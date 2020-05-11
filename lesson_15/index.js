const robots = [
  { name: 'Robot One', cost: 234 },
  { name: 'Robot Two', cost: 199 },
  { name: 'Robot Three', cost: 299 },
  { name: 'Robot Four', cost: 134 },
  { name: 'Robot Five', cost: 111 },
  { name: 'Robot Six', cost: 345 },
  { name: 'Robot Seven', cost: 554 },
  { name: 'Robot Eight', cost: 212 },
  { name: 'Robot Nine', cost: 234 },
]

const ages = [22, 13, 45, 22, 21, 32, 76, 43, 34, 27];

// класический способ обхода массива

// for (let index = 0; index < robots.length; index++) {
//   console.log(robots[index]);
// }

// forEach

// robots.forEach(function (robot, index, source) {
//   console.log(robot, index, source);
// });


// класическая фильтрация элементов последовательности
let filteredAges = [];

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] < 30) {
//     filteredAges.push(ages[i]);
//   }
// }

// console.log(filteredAges);

// filter
// filteredAges = ages.filter(function(ageElement) {
//   if(ageElement < 30) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(filteredAges);

// filteredAges = ages.filter((age) => {
//   return age < 30;
// })

// console.log(filteredAges);

// filteredAges = ages.filter(age => age < 30);

// console.log(filteredAges);

/*
Отфильтруйте роботов с ценой выше 200
*/

// let robotNames = [];

// robots.forEach(robot => {
//   robotNames.push(robot.name);
// })

// console.log(robotNames);

// map

// robotNames = robots.map(robot => {
//   return robot.name;
// })

// robotNames = robots.map(robot => robot.name);
// console.log(robotNames);

// Задание: создать массив из числе в ages возведенные в квадрат

// const result = ages
//   .map(age => age ** 2)
//   .filter(age => age % 2)

// console.log(result);

// sort

// let sortedAges = ages.sort((a, b) => {
//   if(a > b){
//     return 1;
//   } else {
//     return -1;
//   }
// }) 

// sortedAges = ages.sort((a, b) => a > b ? 1 : -1);

// console.log(sortedAges);

// Задание: Отсортировать массив с роботами 

// robots.sort((r1, r2) => r1.cost > r2.cost ? 1 : -1);

// console.log(robots);

// reduce

// let sum = 0;

// ages.forEach(age => {
//   sum = sum + age;
// });

// console.log(sum);

// sum = ages.reduce((total, current) => {
//   return total + current;
// }, 0);

// console.log(sum);


// -------------------------------------------------------------


// 6.2 spread operator, arguments




//  4.4 THIS

// const book1 = {
//   title: 'Book One',
//   year: 1999,
//   origin: 'USA',
//   getBookData: function () {
//     console.log(this);      // book1

//     const innerFunction = () => {
//       console.log(this);   // book1
//     }

//     function innerFunction2() {
//       console.log(this);
//     }

//     innerFunction();

//     innerFunction2();

//     return `${this.title} ${this.year}`
//   },
//   arrow: () => {
//     console.log(this);
//     console.log(this.title);
//   }
// }

// const bookData = book1.getBookData();

// console.log(bookData);

// function thisCheck() {
//   //'use strict';
//   console.log(this);
//   console.log(this.origin);
// }

// thisCheck();

// book1.thisCheck = thisCheck;

// book1.thisCheck();

// book1.arrow();

// call apply 6.9

// const obj = {
//   name: 'World'
// }

// function sayHi(arg) {
//   console.log(arguments);
//   console.log(`Hello ${this.name} ${arg}`);
// }

// obj.sayHi = sayHi;

// sayHi.call(obj, 'arg');


// function timeCounter(f) {

//   wrapper.time = undefined;

//   function wrapper(...args) {
//     const start = new Date().getTime();
//     const result = f.apply(this, args);
//     const end = new Date().getTime();
//     console.log(this);
//     wrapper.time = end - start;
//     return result;
//   }

//   return wrapper;
// }

// const newFunction = timeCounter(sayHi);

// newFunction('Uo');
// console.log(newFunction.time);

// newFunction.call(obj, 'You');

// function heavyF(interval) {
//   let result = 0;
//   for (let i = 0; i < interval; i++) {
//     result = result + i;
//   }

//   return result;
// }

// const wrappedHeavyF = timeCounter(heavyF);

// console.log(wrappedHeavyF(100000000));
// console.log(wrappedHeavyF.time);


// const someObject = {
//   interval: 1000000,
//   heavyF () {
//     let result = 0;
//     for (let i = 0; i < this.interval; i++) {
//       result = result + i;
//     }

//     return result;
//   }
// }

// const newObjHeavy = timeCounter(someObject.heavyF);

// console.log(newObjHeavy());
// console.log(newObjHeavy.call(someObject));


//  es5 Constructor 4.6

// function Book(title, year) {
//   // this = {}; 
//   this.title = title;
//   this.year = year;

//   this.getBookData = function () {
//     return `${this.title} ${this.year}`;
//   }
//   // return this;
// }

// const book1 = Book('Book Name 1', 2999);
// const book2 = new Book('Book Name 1', 2999);
// console.log(book1);
// console.log(book2);

// console.log(book2.getBookData());

// Prototypes

const human = {
  name: 'Jo'
}

const actions = {
  sayHi: function() {
    console.log(this.name);
  }
}

human.__proto__ = actions;

// Object.setPrototypeOf(human, Object.getPrototypeOf(actions));

console.log(human);

console.log(Object.getPrototypeOf(human));

// 
human.sayHi();




// function Book(title, year) { 
//   this.title = title;
//   this.year = year;
// }

// console.log(Book.prototype);
// const newBook = new Book('Name', 1789);
// console.log(newBook);

// console.log(Book.prototype === newBook.__proto__); // один и тот же объект

// Book.prototype.getBookData = function() {
//   return `${this.title} ${this.year}`;
// }

// Book.prototype.secret = 10;

// console.log(newBook);

// const bookData = newBook.getBookData();
// console.log(bookData);
// console.log(newBook.secret);

// Прототипное наследование


