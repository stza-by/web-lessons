
// prototypes
// function Book(title, author, year){

//   this.title = title;
//   this.author = author;
//   this.year = year;

//   // this.getInfo = function() {
//   // }
// }

// Book.prototype.getInfo = function() {
//   return `${this.title} ${this.author} ${this.year}`
// }

// const newBook = new Book('1', '2', '3');
// console.log(newBook.getInfo());
// console.log(newBook)


// const simpleObject = {};
// const simpleObject2 = new Object();

// console.log(simpleObject, simpleObject2);

// es 6 classes
// class Book {

//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     Book.incInstancies();
//   }

//   width = 1000;

//   getInfo() {
//     return `${this.title} ${this.author} ${this.year}`
//   }

//   static instances = 0;

//   static incInstancies() {
//     Book.instances++;
//   }
// }

// const book1 = new Book('Name', 'author name', 1234);
// const book2 = new Book('Name', 'author name', 1234);

// console.log(book1);
// console.log(book1.getInfo());
// console.log(Book.instances);

// localStorage

// console.log(localStorage);

// localStorage.setItem('name', 'Stepan');

// localStorage.removeItem('name');

// localStorage.clear();

// localStorage.key(0);

// console.log(localStorage.getItem('name'));

// window.onstorage = (event) => {
//   console.log(event);
// }

// localStorage.setItem('name', 'Stepan');

// localStorage.setItem('book', {name: 'qwertt'});

// JSON JSON.stringify JSON.parse

// const book2 = {
//   title: '123',
//   id: 3,
//   booked: true,
//   author: {
//     name: 'John',
//     surname: 'Doe'
//   }
// }

// const stringifyBook = JSON.stringify(book2);
// console.log(stringifyBook);
// const parsedBook = JSON.parse(stringifyBook);
// console.log(parsedBook);


// localStorage.setItem('myBook', stringifyBook);


// const restoredBook = JSON.parse(localStorage.getItem('myBook'));

// console.log(restoredBook);


// Math random

console.log(Math);

let randomNumber = Math.random();

console.log(randomNumber);

randomNumber *= 1000;
console.log(randomNumber);

randomNumber = Math.round(randomNumber);

console.log(randomNumber);



