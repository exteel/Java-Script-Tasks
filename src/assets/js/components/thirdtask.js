const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const table = document.getElementById('usersTable');
let selectedRows = [{
        firstName: 'Vitalii',
        lastName: 'Kovalchuk',
        email: 'vitalii@gmail.com',
        date: new Date().toLocaleString(),
        isValueChecked: false
    },
    {
        firstName: 'Olga',
        lastName: 'Retro',
        email: 'olgar@gmail.com',
        date: new Date().toLocaleString(),
        isValueChecked: false
    }
];
let editUserIndex;
createTable();

const btn = document.getElementById('sbmAdd');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (!firstNameInput.value.trim() ||
        !lastNameInput.value.trim() ||
        !emailInput.value.trim()
    ) {
        return alert('Incorrect');
    }

    if (editUserIndex !== undefined) {
        editRow(e);
    } else {
        createUser(e);
    }
    clearForm();
});

const deleteRowsButton = document.getElementById('delSelRows');
deleteRowsButton.addEventListener('click', function(e) {
    e.preventDefault();
    selectedRows = selectedRows.filter((user) => !user.isValueChecked);

    createTable();
});

function clearForm() {
    firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
}

function editRow(e) {
    btn.innerText = 'ADD';

    let user = selectedRows[editUserIndex];
    user.firstName = firstNameInput.value;
    user.lastName = lastNameInput.value;
    user.email = emailInput.value;
    editUserIndex = undefined;
    createTable();
}

function createUser(e) {
    e.preventDefault();

    const date = new Date().toLocaleString();
    let user = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        date,
        isValueChecked: false
    };
    selectedRows.push(user);
    addRowToTable(user);
}

function addRowToTable(user) {

    let row = table.insertRow(-1);
    let checkBoxCell = row.insertCell(-1);

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'checkbox');
    checkbox.onclick = function(event) {
        user.isValueChecked = event.target.checked;
    };
    checkBoxCell.appendChild(checkbox);

    let firstNameCell = row.insertCell(-1);
    let lastNameCell = row.insertCell(-1);
    let emailCell = row.insertCell(-1);
    firstNameCell.innerText = user.firstName;
    lastNameCell.innerText = user.lastName;
    emailCell.innerText = user.email;
    row.insertCell(-1).innerHTML = user.date;

    let editCell = row.insertCell(-1);
    editCell.innerHTML = 'edit';
    editCell.classList.add('edit');
    editCell.addEventListener('click', function(event) {
        btn.innerText = 'Edit';
        firstNameInput.value = user.firstName;
        lastNameInput.value = user.lastName;
        emailInput.value = user.email;
        editUserIndex = row.rowIndex - 1;
    });

    let deleteCell = row.insertCell(-1);
    deleteCell.innerHTML = 'delete';
    deleteCell.classList.add('delete');

    deleteCell.addEventListener('click', function(event) {
        let rowIndex = event.target.parentNode.rowIndex;
        table.deleteRow(rowIndex);
    });
}

function createTable() {
    table.innerHTML = `<thead>
  <tr>
    <th scope="col">Choose</th>
    <th scope="col">First Name</th>
    <th scope="col">Second Name</th>
    <th scope="col">Email</th>
    <th scope="col">Date</th>
    <th scope="col">Edit</th>
    <th scope="col">Delete</th>
  </tr>
</thead>`;
    selectedRows.forEach((user) => addRowToTable(user));
}



function validateEmail(sEmail) {
    let reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

    if (!sEmail.match(reEmail)) {
        alert("Invalid email address");
        return false;
    }

    return true;

}