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



const list = document.querySelector('#items');

const item1 = createNewListItem('Мой элемент');
const item2 = createNewListItem('Мой элемент 2');
const item3 = createNewListItem('Мой элемент 3');
const item4 = createNewListItem('Мой элемент 4');
 
list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);
list.appendChild(item4);

function createNewListItem(str) {
  const newElement = document.createElement('li');
  newElement.className = 'list-group-item';
  const innerText = document.createTextNode(str);

  newElement.appendChild(innerText);

  return newElement;
}
