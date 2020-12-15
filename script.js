const modalBox = document.querySelector('.modal');
const openModal = document.querySelector('.page-top__options-addBlock')
const inputContentTitle = document.querySelector('.formModal-title');
const inputContentText = document.querySelector('.formModal-text');
const modalButtonCreateCard = document.querySelector('.confirmModal');
const modalButtonClose = document.querySelectorAll('.confirmModal')[1];
const editModal = document.querySelector('.cards-top__options-edit');
const sectionCards = document.querySelector('.page-mid__cards');
const msgNoneCards = document.querySelector('.page-mid__cards-msg');


modalBox.onclick = (e) => { if(e.target === modalBox) modalContent('hidden') };
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

  if(e.target.classList.contains('cards-top__options-edit')){
    editCard(e)
  }
  if(e.target.classList.contains('cards-top__options-delete')){
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
  card.className = 'cards';

  const delButton = document.createElement('span');
  delButton.textContent = 'X';
  delButton.className = 'cards-top__options-delete';

  const editButton = document.createElement('span');
  editButton.textContent = 'Edit';
  editButton.className = 'cards-top__options-edit';
  
  card.innerHTML = `
    <div class="cards-top">
      <h1 class="cards-top__title">${inputContentTitle.value}</h1>
    <div class="cards-mid">
      <p class="cards-text">${inputContentText.value}</p>
    </div>
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