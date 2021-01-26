const modalClick = document.querySelector('.mainCards__submit');
const modalContent = document.querySelector('.modal')

modalClick.addEventListener('click', () =>{
  modalContent.style.visibility= "visible"
})
modalContent.addEventListener('click', () =>{
  modalContent.style.visibility= "hidden"
})
