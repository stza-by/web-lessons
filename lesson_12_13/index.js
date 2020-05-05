// vannila JS

// // BOM (Browser Object Model) Объект window
// console.log(window);
// console.dir(window);

// console.log(console);
// console.log(window.console);

// // DOM (Document Object Model) Обьект document
// console.log(document);
// console.dir(window.document);

// console.log(document.URL);
// console.log(document.title);

// document.title = 'Список дел';

// console.log(document.head);
// console.dir(document.head);
// console.log(document.body);
// console.log(document.all);


// getElementById
//const headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.innerText = 'Task Manager';
// headerTitle.innerHTML = '<h3>Привет</h3>';

// headerTitle.style.width = 'fit-content'
// headerTitle.style.borderBottom = 'solid 3px #fff';


// getElementsByClassName
// const listItems = document.getElementsByClassName('list-group-item');
// console.log(listItems);
// console.log(listItems[1]);

// listItems[1].style.backgroundColor = 'yellow';

// for(let i = 0; i < listItems.length; i++) {
//   listItems[i].style.backgroundColor = '#f4f4f4';
// }

// getElementsByTagName
// const listItems = document.getElementsByTagName('li');
// console.log(listItems);
// console.log(listItems[1]);

// listItems[1].style.backgroundColor = 'yellow';

// for(let i = 0; i < listItems.length; i++) {
//   listItems[i].style.backgroundColor = '#f4f4f4';
// }


// querySelector
// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #000';

// const input = document.querySelector('input');
// input.placeholder = 'задача...';

// const listItem = document.querySelector('.list-group-item');
// listItem.style.color = 'red';
// console.log(listItem);


// querySelectorAll 
// const listItems = document.querySelectorAll('.list-group-item');

// console.log(listItems);
// console.log(listItems[3]);

// for(const item of listItems) {
//   item.style.backgroundColor = '#f4f4f4';
// }

// const oddItems = document.querySelectorAll('.list-group-item:nth-child(2n)');
// console.log(oddItems);

// for(const item of oddItems) {
//   item.style.backgroundColor = '#645c66';
// }


// parent, child, siblings

// const items = document.querySelector('#items');
// console.log(items);

// // parentNode
// const parentNode = items.parentNode;
// const parentElement = items.parentElement;

// console.log(parentNode);
// console.log(parentElement);

// parentNode.style.backgroundColor = '#f4f4f4';

// childNodes
// const childNodes = items.childNodes;
// console.log(childNodes);

// const children = items.children;
// console.log(children);

// for (const childItem of children) {
//   childItem.style.fontSize = '2em';
// }

// firstChild, firstElementChild, lastChild, lastElementChild

// const listItem = document.querySelector('.list-group-item:nth-child(2)');
// listItem.style.color = 'red';

// // siblings
// console.log(listItem.previousSibling);
// console.log(listItem.previousElementSibling);
// console.log(listItem.nextElementSibling);


// Create new element
// const newElement = document.createElement('li');

// newElement.className = 'list-group-item';
// newElement.id = 'my-id';
// newElement.classList.add('bro', 'bro2');

// newElement.setAttribute('myOwnAttr', 'Hello !!');

// const newLiText = document.createTextNode('Элемент 5');
// newElement.appendChild(newLiText);

// console.log(newElement);
// console.dir(newElement);

// const items = document.querySelector('#items');
// items.appendChild(newElement);

// insertBefore, insertAfter


// ---- LESSON 13 ----------

// const newListItem = document.createElement('li');
// newListItem.className = 'list-group-item';
// newListItem.innerText = 'Новый элемент';

// const newListItem2 = document.createElement('li');
// newListItem2.className = 'list-group-item';
// newListItem2.innerText = 'Новый элемент #2';

// const list = document.querySelector('#items');

// append prepend before after replaceWith

// list.prepend(newListItem);
// list.append(newListItem2);

// const h2Before = document.createElement('h2');
// h2Before.innerText = 'Before';

// const h2After = document.createElement('h2');
// h2After.innerText = 'After';

// list.before(h2Before);
// list.after(h2After);

// const replace = document.createElement('h2');
// replace.innerText = 'List';

// list.replaceWith(replace);

// replace.remove();

// Events

// function buttonClicked(event) {
//   console.log('Button clicked ');
//   document.body.style.backgroundColor = '#f4f4f4';
//   console.log(event);

//   console.log(event.target);
//   console.log(event.target.classList);
//   console.log(event.target.classList);
// }

const btn = document.querySelector('#btn');

// btn.addEventListener('click', buttonClicked);

// btn.addEventListener('click', function () {
//   console.log('function expression');
// });

// btn.addEventListener('click', () => {
//   console.log('Arrow function');
// });

btn.addEventListener('click', deleteLastListElement);

function deleteLastListElement() {
  const list = document.querySelector('#items');

  if (list.lastElementChild) {
    list.lastElementChild.remove();
  } else {
    alert('Элементы закончились');
  }
}

const theForm = document.querySelector('#the-form');

theForm.lastElementChild.addEventListener('click', addNewListItem);

function addNewListItem(event) {

  if(theForm.firstElementChild.value === '') {
    alert('Ничего не введено');
    return;
  }

  const newListItem = document.createElement('li');
  console.dir(theForm.firstElementChild)
  newListItem.innerText = theForm.firstElementChild.value;
  newListItem.className = 'list-group-item';

  document.querySelector('#items').append(newListItem);
  theForm.firstElementChild.value = '';
}
