function modal() {
    let section = document.querySelector('.secondtask'),
      secondP = section.children[1],
      newDiv = document.createElement('div');
  
    newDiv.classList.add('modal-wrap');
    section.insertBefore(newDiv, secondP);
  
    let section2 = document.querySelector('.modal-wrap'),
      secondP2 = section.children[2],
      newDiv2 = document.createElement('div');
    newDiv2.innerHTML = 'MODAL WINDOW <br> <br><br>';
    newDiv2.classList.add('modal');
    newDiv2.classList.add('modal-window');
    newDiv2.setAttribute('id', 'six');
    section2.insertBefore(newDiv2, secondP2);
  
    let section3 = document.querySelector('.modal'),
      secondP3 = section.children[3],
      newDiv3 = document.createElement('button');
    newDiv3.setAttribute('onclick', 'closeModal()');
    newDiv3.setAttribute('data-modal', '#sign-in');
  
    newDiv3.innerHTML = 'Close';
    newDiv3.classList.add('modal-close');
    section3.insertBefore(newDiv3, secondP3);
  }
  
  function closeModal() {
    let elemnt = document.getElementById('scd');
    elemnt.removeChild(elemnt.children[1]);
  }