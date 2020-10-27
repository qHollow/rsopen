const modalWparrer = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal-close');
const card = document.querySelectorAll('.main__our-friend-button');

// function
function closeModal(){
  modalWparrer.style.display = 'none';
  document.body.style.overflowY = '';
}

function displayModal(){
  modalWparrer.style.display = 'block';
  document.body.style.overflowY = 'hidden';
}


//Events
close.addEventListener('click', closeModal);

for(let i = 0; i < card.length; i++){
  let n = card[i];
  n.addEventListener('click', displayModal);
}

window.onclick = function(event) {
  if (event.target == modalWparrer) {
    modalWparrer.style.display = "none";
  }
}

document.location.href = "https://www.yandex.ru";

//run
closeModal();
