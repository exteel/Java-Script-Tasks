function calc() {
    let price, amount, result, text;

    text = document.getElementById('out');

    amount = document.getElementById('amount').value;
    amount = parseFloat(amount);

    price = document.getElementById('price').value;
    price = parseFloat(price);

    result = amount - price;

    if (isNaN(price) || isNaN(amount)) {
        text.innerHTML = 'Enter the correct information';
    } else if (amount < price) {
        text.innerHTML = 'You do not have enough money';
    } else if (amount == price) {
        text.innerHTML = 'You spent all the money';
    } else if (amount > price) {
        text.innerHTML = 'Your rest: ' + result.toFixed(2) + ' $';
    } else {}
    den(result);
}

function den(result) {
    let denomination = [
        { amount: 100, count: 0 },
        { amount: 50, count: 0 },
        { amount: 20, count: 0 },
        { amount: 10, count: 0 },
        { amount: 5, count: 0 },
        { amount: 1, count: 0 },
        { amount: 0.5, count: 0 },
        { amount: 0.25, count: 0 },
        { amount: 0.1, count: 0 },
        { amount: 0.05, count: 0 },
        { amount: 0.01, count: 0 }
    ];
    denomination.forEach(function(item, i, array) {
        let count = 0;
        while (+result.toFixed(2) >= +item.amount.toFixed(2)) {
            result -= +item.amount.toFixed(2);
            count++;
        }
        item.count = count;
    });

    let resultString = '';

    denomination.forEach(function(item, i, array) {
        if (item.count !== 0) {
            resultString += `<br> ${item.amount} $ - ${item.count} `;
        }
    });

    let nom = document.getElementById('denomination');
    nom.innerHTML = 'At face value: ' + resultString;

    if (denomination[0]['amount'] != 0) {
        console.log(denomination[0]['count']);
    }
}