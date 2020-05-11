// "use strict";

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

// for(let i = 0; i < robots.length; i++) {
//   console.log(robots[i]);
// }

// forEach

// function f1(el, index, array){
//   console.log(el);
//   console.log(index);
//   console.log(array);
// }

// robots.forEach(f1);


// filter

// let filteredRobots = [];

// for(let i = 0; i < robots.length; i++) {

//   if(robots[i].cost > 200 ) {
//     filteredRobots.push(robots[i]);
//   }
// }

// console.log(filteredRobots);


// const filtered2 = robots.filter(robot => {
//   if(robot.cost > 200) return true;

//   return false;
// })

// console.log(filtered2);

// let filteredAges = ages.filter(age => {
//   return age > 30;
// })

// filteredAges = ages.filter(age => age > 30);

// console.log(filteredAges);

// map

// const robotsNames = robots.map(robot => {
//     return robot.cost;
// })

// console.log(ages.map(age => age ** 2).filter(age => age % 2));

// sort

// const sortedAges = ages.sort((a, b) => {
//     console.log(a , b);

//     if( a < b ) {
//       return 1;
//     } 
//     else {
//       return -1;
//     }
// })

// console.log(sortedAges);


// const sortedRobots = robots.sort((robot1, robot2) => {

//   if(robot1.cost > robot2.cost){
//     return 1;
//   }

//   if(robot1.cost === robot2.cost){
//     return 0;
//   }


//   return -1;
// })

// console.log(sortedRobots);

// reduce

// let sum = 0;

// ages.forEach(age => {
//   sum += age; // sum = sum + age

//   // sum -= age
//   // sum *= age
//   // sum /= age

// })

// console.log(sum);


// const sum2 = ages.reduce((sum, age) => {
//   return sum + age;
// }, 0)

// console.log(sum2);

// 6.2 spread-operator, arguments

// function max() {

//   console.log(arguments);



//   console.log(Array.from(arguments))
//   // let max = arguments[0];
//   // for(let i = 0; i < arguments.length; i++){
//   //   if(arguments[i] > max) {
//   //     max = arguments[i];
//   //   }
//   // }

//   return max;
// }

// console.log(max(50, 10, 20, 30, 40));


// const max3 = () => {
//   console.log(arguments);
// }

// max3(10);

// function max2( a,...args) {

//   console.log(a);
//   console.log(args);
// }

// max2('a', 10, 'efwe');


// const f3 = (a, b) => {
//   console.log(a, b);
// }

// const args = ['a', 'b'];

// f3(...args);

// 4.4 THIS

// const book = {
//   title: "Book 1",
//   year: 1999,
//   getBookData() {
//     console.log(this);

//     function f100() {
//       console.log(this);
//     }

//     f100();

//     return `${this.title} ${this.year}`
//   },
//   arrow: () => {
//     console.log(this);
//   }
// }

//  const bookData = book.getBookData();
// // console.log(bookData);

// // book.arrow();


// function f10(){
//   console.log(this);
// }


// function sayHi() {
//   console.log('h1 ' + this.title);
// }

// f10();

// book.f10 = f10;

// book.f10();

// sayHi();

// book.sayHi = sayHi;

// book.sayHi();

// apply, call, bind

// const obj = {
//   name: 'world'
// }

// function hello(name2){
//   console.log('Hello '  + this.name + " " + name2);
// }

// hello.call(obj, 'name222');

// hello.apply(obj, ['name22']);

// const newHello = hello.bind(obj);

// newHello('12345');


function timeCounter(f) {

  console.log(this);

  function wrapper(...args) {
    console.log(this);
    const start = new Date().getTime();
    const result = f.call(this, ...args);
    const end = new Date().getTime();
    console.log('Execution time ' + (end - start))
    const exeTime = end - start;
    wrapper.time = exeTime;

    return result;
  }

  return wrapper;
}

// function heavyF(interval){

//   let sum = 0;
//   while(interval !== 0){
//     sum += interval--;
//   }
//   return sum;
// }

// const heavyWrapper = timeCounter(heavyF);

// console.log(heavyWrapper(1000000000));
// console.log(heavyWrapper.time);


// const someObject = {
//   interval: 1000000,
//   heavy() {

//     console.log(this);
    
//     let sum = 0;
//     while (this.interval) {
//       sum += this.interval--;
//     }
//     return sum;
//   }
// }

// const heavyWrapper = timeCounter(someObject.heavy);

// heavyWrapper.call(someObject);

// const myOwnHeavy = someObject.heavy;

// const newF =  myOwnHeavy.bind({interval: 1000});

// newF();


// 4.6
function Book(title, year) {
  // this = {}
  this.title = title;
  this.year = year;

  this.bookInfo = function () {

    function x1() {
      console.log(this);
    }

    const x2 = () => {
      console.log(this);
    }

    x1();
    x2();
    return '' + this.title + this.year;
  },
  this.x2 = () => {
    console.log(this);
  }
  // return this
}

const newBook = new Book('New book title', 1234);
console.log(newBook);
console.log(newBook.bookInfo())
newBook.x2()


// ч.1 4.4  4.6  5.5  6.2 6.9 - 6.11



