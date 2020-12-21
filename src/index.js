import '../public/css/sass/style.scss';
import book from '../public/img/book.png';

const modalBox = document.querySelector('.modal');
const openModal = document.querySelector('.header__options-addBlock')
const inputContentTitle = document.querySelector('.modal__box__form-title');
const inputContentText = document.querySelector('.modal__box__form-text');
const modalButtonCreateCard = document.querySelector('.modal__box__buttons-create');
const modalButtonClose = document.querySelector('.modal__box__buttons-close');
const sectionCards = document.querySelector('.main__cards');
const msgNoneCards = document.querySelector('.main__cards-msg');

openModal.onclick = () => modalContent('initial');
modalButtonCreateCard.onclick = () => addCard();
modalButtonClose.onclick = () => modalContent('hidden');
sectionCards.onclick = e => listenClick(e);


function addCard() {

  if(inputContentTitle.value == '' || inputContentText.value == ''){
    alert('Coloque dados no card');
    return false;
  } else {
    createCard();
    hideCardEmpty();
    modalContent('hidden');
  }
};

function listenClick(e){

  if(e.target.classList.contains('card__edit')){
    editCard(e)
  }
  if(e.target.classList.contains('card__delete')){
    if(confirm('Deseja mesmo deletar o card ?')){
      e.target.parentNode.remove()
    }
  }
}

/*
function editCard(e){

}
*/

function createCard(){

  const card = document.createElement('li');
  card.className = 'card';

  const delButton = document.createElement('span');
  delButton.textContent = 'X';
  delButton.className = 'card__delete';

  const editButton = document.createElement('span');
  editButton.textContent = 'Edit';
  editButton.className = 'card__edit';

  card.innerHTML = `
  <h1 class="card__title">${inputContentTitle.value}</h1>
  <p class="card__text">${inputContentText.value}</p>
  `;

  sectionCards.appendChild(card);
  card.appendChild(delButton);
  card.appendChild(editButton);
}

function modalContent(p){

  inputContentTitle.value = '';
  inputContentText.value = '';
  return modalBox.style.visibility = p;
}

function hideCardEmpty(){

  if(!sectionCards.childElementCount == 0){
    msgNoneCards.style.display = 'none';
  }
}

modalBox.onclick = (e) => {
  if (e.target === modalBox) {
    modalContent('hidden');
  }
};
