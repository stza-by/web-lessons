// console.log(window.console);

// console.log(console);

// console.log(window.document);

// console.log(document);

// console.dir(document);

// console.log(document.URL);
// console.log(document.title);

// document.title = 'Новое название';

// console.dir(document.head);
// console.dir(document.body);
// console.dir(document.all);

// getElementById

// vanilla JS 
// const header = document.getElementById('header-title');

// header.innerHTML = '<h1>Changed</h1>';

// // header.outerHTML  = '<h1>Changed</h1>';
// header.style.borderBottom = 'solid 3px #fff';
// header.style.width = 'fit-content';

// console.dir(header);

// getElementsByClassName
// const listItems = document.getElementsByClassName('list-group-item');
// console.log(listItems);
// console.log(listItems[0]);
// console.log(listItems[3]);

// listItems[3].style.backgroundColor = 'yellow';

// for(var i = 0; i < listItems.length; i++){
//   listItems[i].style.backgroundColor = '#f4f4f4'
// }

// if(true) {
//   const a = 10;
//   let b = 23;
//   var c = 33;
// }

// console.log(a)

// getElementsByTegName
// const elements = document.getElementsByTagName('li');

// console.log(elements);

// for(let element of elements) {
//   element.style.color = 'red';
// }

// querySelector querySelectorAll
// const header = document.querySelector('#main-header');

// const input = document.querySelector('input');

// input.placeholder = 'text';

// let listItems = document.querySelector('.list-group-item');

// listItems = document.querySelectorAll('.list-group-item');
// console.log(listItems[2]);

// const listItems = document.querySelectorAll('.list-group-item:nth-child(2n)');
// console.log(listItems[0]);
// console.log(listItems[1]);

// for(const el of listItems){
//   el.style.color = 'red';
// }

// // parent, child, siblings

//const item = document.querySelector('#items');
// console.log(item);

// const itemParent = item.parentNode;
// const parentElement = item.parentElement;

// console.log(itemParent);
// console.log(parentElement);

// itemParent.style.fontSize = '2em';
// parentElement.style.fontSize = '3em';

// const children = item.children;
// console.log(children);

// let i = 100;
// for(const element of children) {
//   element.innerHTML = `<span>Chached ${i}</span>`
//   i = i **2;
// }


// const first = item.firstElementChild;
// console.log(first);

// const last = item.lastElementChild;
// console.log(last);

// let listItem = document.querySelector('.list-group-item:nth-child(2)');
// console.log(listItem);

// console.log(listItem.previousElementSibling);

// console.log(listItem.nextElementSibling);



// const list = document.querySelector('#items');

// const item1 = createNewListItem('Мой элемент');
// const item2 = createNewListItem('Мой элемент 2');
// const item3 = createNewListItem('Мой элемент 3');
// const item4 = createNewListItem('Мой элемент 4');

// list.appendChild(item1);
// list.appendChild(item2);
// list.appendChild(item3);
// list.appendChild(item4);

// function createNewListItem(str) {
//   const newElement = document.createElement('li');
//   newElement.className = 'list-group-item';
//   const innerText = document.createTextNode(str);

//   newElement.appendChild(innerText);

//   return newElement;
// }


// append  prepend before after 

// const newElement = document.createElement('li');
// newElement.className = 'list-group-item';
// newElement.innerText = 'Новый элемент';

// const newElement2 = document.createElement('li');
// newElement2.className = 'list-group-item';
// newElement2.innerText = 'Новый элемент 2';

// console.log(newElement);

// const list = document.querySelector('#items');
// console.log(list);

// list.append(newElement);
// list.prepend(newElement2);

// before after

// list.children[2].before(newElement);

// replaceWith

// const newElement3 = document.createElement('li');
// newElement3.className = 'list-group-item';
// newElement3.innerText = 'XXXXXXX';

// list.lastElementChild.replaceWith(newElement3);

// list.firstElementChild.remove();

// events 2.1

// function buttonClicked() {
//   const list = document.querySelector('#items');

//   if(list.lastElementChild){
//     list.lastElementChild.remove();
//   } else {
//     alert('Элементов нет');
//   }
// }

// // addEventLitener
// const btn = document.querySelector('#btn');

// btn.addEventListener('click', buttonClicked);

// const addButtnon = document.querySelector('#add-button');

// addButtnon.addEventListener('click', function(){

// })

// addButtnon.addEventListener('click', () => {
//   const input = document.querySelector('#text-input');
//   const text = input.value;


//   if(text && text !== ''){

//     const newElement3 = document.createElement('li');
//     newElement3.className = 'list-group-item';
//     newElement3.innerText = text;
  
//     const list = document.querySelector('#items');
  
//     list.append(newElement3);
//     document.querySelector('#text-input').value = '';
//   }
// });

const btn = document.querySelector('#btn');
const container = document.querySelectorAll('.container');

console.log(container);



container[1].addEventListener('click', (event) => {
  console.log('Я нажал на контейнер');
  console.log(event.target);
  console.log(event.currentTarget);
})

btn.addEventListener('click', (newEvent) => {
  console.log(newEvent.target);
  console.log(newEvent.currentTarget);
});
