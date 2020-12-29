'use strict';

// import '../public/css/sass/style.scss';
// import book from '../public/img/book.png';

class HeaderCommands {
  modalContent(param){
    this.inputTitle = inputContentTitle;
    this.inputText = inputContentText;

    this.inputTitle.value = '';
    this.inputText.value = '';
    modalBox.style.visibility = param;
  }
}

class CardCreator extends HeaderCommands{

  addCard(){
    this.inputTitle = inputContentTitle;
    this.inputText = inputContentText;

    if(this.inputTitle.value == '' || this.inputText.value == ''){
      alert('Coloque dados no card');
      return false;
    } else {
      this.createCard();
      this.hideCardEmpty();
      this.modalContent('hidden');
    }
  }

  createCard(){

    this.card = this.elementCreator('li', 'card');
    this.delButton = this.elementCreator('span', 'card__delete', 'X');
    this.editButton = this.elementCreator('span', 'card__edit', 'Edit');

    this.card.innerHTML = `
    <h1 class="card__title">${this.inputTitle.value}</h1>
    <p class="card__text">${this.inputText.value}</p>
    `;

    sectionCards.appendChild(this.card);
    this.card.appendChild(this.delButton);
    this.card.appendChild(this.editButton);

  }

  elementCreator(elem, clas, content = null){
    this.creator = document.createElement(elem);
    this.creator.className = clas;
    this.creator.textContent = content;

    return this.creator;
  }

  hideCardEmpty(){
    if(!sectionCards.childElementCount == 0){
      msgNoneCards.style.display = 'none';
    }
  }

  listenClick(e){
    if(e.target.classList.contains('card__edit')){
      console.log('Edit não disponivel ainda');
    }
    if(e.target.classList.contains('card__delete')){
      if(confirm('Deseja mesmo deletar o card ?')){
        e.target.parentNode.remove()
      }
    }
  }
}

const modalBox = document.querySelector('.modal');
const openModal = document.querySelector('.header__options-addBlock')
const inputContentTitle = document.querySelector('.modal__box__form-title');
const inputContentText = document.querySelector('.modal__box__form-text');
const modalButtonCreateCard = document.querySelector('.modal__box__buttons-create');
const modalButtonClose = document.querySelector('.modal__box__buttons-close');
const sectionCards = document.querySelector('.main__cards');
const msgNoneCards = document.querySelector('.main__cards-msg');
const inputSearch = document.querySelector('.header__options-search');

const HeaderCommand = new HeaderCommands;
const CardCreate = new CardCreator();

openModal.onclick = () => HeaderCommand.modalContent('initial');
modalBox.onclick = (e) => (e.target === modalBox) ? HeaderCommand.modalContent('hidden') : false;
modalButtonClose.onclick = () => HeaderCommand.modalContent('hidden');
modalButtonCreateCard.onclick = () => CardCreate.addCard();
sectionCards.onclick = e => CardCreate.listenClick(e);
inputSearch.addEventListener('keyup', () =>{
  HeaderCommand.searchCard();
})
