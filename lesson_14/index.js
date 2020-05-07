// events  2.1

document.addEventListener('DOMContentLoaded', () => {
  console.log('Документ загружен');
})

const myForm = document.querySelector('#my-form');

myForm.addEventListener('submit', (event) => {
  console.log(event);
  event.preventDefault();
})

// removeEventListener

// Всплытие 2.2

// stopPropagation

// stopImmediatePropagation

// атрибуты и свойства 1.6

// Делегирование

const userElemens = document.querySelector('#users');

userElemens.addEventListener('click', (event) => {
  console.log(event.target);
  console.log(event.currentTarget);

  if(event.target.className === 'item'){
    event.target.style.backgroundColor = 'red';
  } else {
    console.log("Не туда")
  }
});


