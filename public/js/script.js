const searchBox = document.querySelector('.main__input');
const listCard = document.querySelectorAll('.card');
const titleCard = document.querySelectorAll('.card__title');
const textCard = document.querySelectorAll('.card__text');
const typeCard = document.querySelectorAll('.card__type');
const selectBox = document.querySelector('select');


let indexSelect;
selectBox.addEventListener('blur', () =>{
    listCard.forEach(elem => elem.style.display = "inline")
    searchBox.value = ''
    indexSelect = selectBox.selectedIndex;
    console.log(indexSelect)
})
searchBox.addEventListener('keyup', (event)=>{
  const listiner = event.target.value.toLowerCase();

  switch (indexSelect) {
    case 0:
        titleCard.forEach(elem =>{
        const title = elem.innerHTML.trim().toLowerCase();
        if(title.includes(listiner)){
          elem.parentElement.style.display = "inline"
        } else{
          elem.parentElement.style.display = "none"
        }
      })
      break;
    case 1:
        textCard.forEach(elem =>{
        const text = elem.innerHTML.trim().toLowerCase();
        if(text.includes(listiner)){
          elem.parentElement.style.display = "inline"
        } else{
          elem.parentElement.style.display = "none"
        }
      })
      break;
    case 2:
        typeCard.forEach(elem =>{
        const type = elem.innerHTML.trim().toLowerCase();
        if(type.includes(listiner)){
          elem.parentElement.style.display = "inline"
        } else{
          elem.parentElement.style.display = "none"
        }
      })
      break;
    default:
      titleCard.forEach(elem =>{
        const title = elem.innerHTML.trim().toLowerCase();
        if(title.includes(listiner)){
          elem.parentElement.style.display = "inline"
        } else{
          elem.parentElement.style.display = "none"
        }
      })
      break;
  }
})

