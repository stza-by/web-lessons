// 2.1 Events 

// document.addEventListener('DOMContentLoaded', (event) => {
//   console.log(event);
// })

// const head = document.querySelector('#head');

// function eventHandeler(event) {
//   // console.log(event.offsetX, event.offsetY);
//   // console.log(event.offsetX, event.offsetY);

//   // console.log(event.clientY, event.pageY);

//   event.preventDefault();

//   console.log(event);

//   // removeEventListener

//   head.removeEventListener('contextmenu', eventHandeler);

// }


// head.addEventListener('click', eventHandeler);
// head.addEventListener('dblclick', eventHandeler);

// head.addEventListener('contextmenu', eventHandeler);

// head.addEventListener('mouseover', eventHandeler);
// head.addEventListener('mouseout', eventHandeler);

// head.addEventListener('mousedown', eventHandeler);
// head.addEventListener('mouseup', eventHandeler);

// head.addEventListener('mousemove', eventHandeler);

// document.body.addEventListener('mousemove', eventHandeler);

// submit

// const myForm = document.querySelector('#my-form');

// myForm.addEventListener('submit', (event) => {
//   console.log(event);

//   event.preventDefault();
// })


// Всплытие 2.2

// const container = document.querySelector('.container');

// container.addEventListener('click', () => {
//   alert('Событие произошло в контейнере');
// })


// const ul = document.querySelector('#users');

// ul.addEventListener('click', () => {
//   alert('Событие произошло в списке');
// })


// ul.children[0].addEventListener('click', (event) => {
//   alert('Событие произошло в первом элементе списка');

//   // event.stopPropagation();

//   event.stopImmediatePropagation();

// })

// ul.children[0].addEventListener('click', (event) => {
//   alert('Событие произошло в первом элементе списка #2');
// })

// document.body.addEventListener('mousemove', (e) => {

//   const x = e.clientX;
//   const y = e.clientY;
//   const z = (x + y) / 2;

//   console.log(x, y, z);

//   const bgc = `rgb(${x % 255},${y % 255}, ${z % 255})`

//   console.log(bgc);

//   document.body.style.backgroundColor = bgc;
// });

// 1.6 атрибуты и свойства

// console.log(ul.children[0].hasAttribute('number'));
// console.log(ul.children[0].getAttribute('number'));
// console.log(ul.children[0].setAttribute('number', 'new value'));
// console.log(ul.children[0].getAttribute('number'));
// console.log(ul.children[0].removeAttribute('number'));
// console.log('----------------------------------');
// console.log(ul.children[0].dataset.number);


// 2.3 Делегирование событий

// const userElements = document.querySelector('#users');

// userElements.addEventListener('click' , (e) => {
//   console.log(e.target);
//   console.log(e.currentTarget);

//   if(e.target.dataset.number === '3'){
//     alert('Тот самый элемент')
//   }

//   if(e.target.dataset.number === '1'){
//     alert('йцукуццук')
//   }

// });


// setTimeout , setInterval часть 1 п. 6.8


// setTimeout(() => {
//   clearInterval(interval);
// }, 5000);

// let i = 0;
// const interval = setInterval(() => {
//   console.log('do set interval', i++);
// }, 1000);


// setTimeout(() => {
//   console.log(0)
// }, 0);


// console.log(1);

document.querySelector('#my-form').addEventListener('submit', (e) => {

  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;

  if(name === '' || email === ''){

    document.querySelector('.msg').textContent = 'Ошибка';

    setTimeout(() => {
      document.querySelector('.msg').textContent = '';
    }, 2000);
  }
})







