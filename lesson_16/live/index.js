// const obj = {};
// const obj2 = new Object();

// const array = [];

// console.log(array);

// const array2 = new Array();

// const str = '2132';
// const str2 = new String('wef');

// console.log(obj);
// console.log(obj2);

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;

//   // this.getTitle = () => {
//   //   console.log(author);
//   // }
// }

// Book.prototype.getTitle = function () {
//   console.log(this.title);
// }

// const book1 = new Book('Js для начинающих', 'Кнут', 2010);

// book1.getTitle();

// class Book {
//   constructor(title, year) {
//     this.title = title;
//     this.year = year;
//     Book.incCount();
//   }

//   getBookData() {
//     return this.title + " " + this.year;  
//   }

//   static instanceCount = 0;

//   static incCount() {
//     Book.instanceCount++;
//   }
// }

// const newBook = new Book('JS', 2000);
// const newBook1 = new Book('JS', 2000);

// console.log(newBook);
// console.log(newBook.getBookData());
// console.log(Book.instanceCount);

// console.log(Math);

// console.log(localStorage);

// const saveBtn = document.querySelector('#save');
// const clearBtn = document.querySelector('#clear');


// saveBtn.addEventListener('click', () => {
//   localStorage.setItem('name', 'Victor');
//   localStorage.setItem('title', 'Victoedwefwefwegwrgwgr');
//   localStorage.setItem('title', {name: 'qweqer'});
// })

// clearBtn.addEventListener('click', () => {
//   const name = localStorage.getItem('name');
//   localStorage.removeItem('name');
//  console.log(name);
// })


// const abc = {
//   name: 'dwefw',
//   toString() {
//     return '______________'
//   },
//   valueOf() {
//     return '+++++++++++++++'
//   }
// }

// const book = {
//   title: 'qwerty',
//   year: 1234,
//   author: {
//     name: 'Jo',
//     surname: 'H'
//   }
// }

// const bookToStr = JSON.stringify(book);

// console.log(bookToStr);

// const book2 = JSON.parse(bookToStr);

// localStorage.setItem('book', bookToStr);

// console.log(book2);
