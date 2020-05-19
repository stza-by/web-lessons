// Прототипное наследование
// function PointX(x, y) {
//   this.x = x;
//   this.y = y;
//   this.symbol = 'x'
// }

// PointX.prototype.show = function() {
//   const pointView = document.createElement('div');
//   pointView.innerText = this.symbol;
//   pointView.className = 'point';

//   pointView.style.cssText = `
//     position: absolute;
//     top: ${this.x}px;
//     left: ${this.y}px;
//     font-size: 3em;
//   `

//   document.body.append(pointView);
// }

// function PointY(x, y) {
//   PointX.call(this, x, y);
//   this.symbol = 'y';
// }

// PointY.prototype = Object.create(PointX.prototype);
// PointY.prototype.constructor = PointY;

// const x = new PointX(10, 10);
// const y = new PointY(20, 20);

// console.log(x);
// console.log(y);

// const pointArray = [
//   new PointX(40, 40), 
//   new PointX(80, 80), 
//   new PointX(160, 160), 
// ];

// pointArray.forEach(point => {
//   point.show();
// })

// const pointArray2 = [
//   new PointY(100, 240), 
//   new PointY(200, 280), 
//   new PointY(300, 260), 
// ];

// PointY.prototype.show = function() {
//   const pointView = document.createElement('div');
//   pointView.innerText = this.symbol;
//   pointView.className = 'point';

//   pointView.style.cssText = `
//     position: absolute;
//     right: ${this.x}px;
//     bottom: ${this.y}px;
//     font-size: 2em;
//   `

//   document.body.append(pointView);
// }

// pointArray2.forEach(point => {
//   point.show();
// })

// es6 наслдование

// class PointX {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   symbol = 'x'

//   show() {
//     const pointView = document.createElement('div');
//     pointView.innerText = this.symbol;
//     pointView.className = 'point';

//     pointView.style.cssText = `
//     position: absolute;
//     top: ${this.x}px;
//     left: ${this.y}px;
//     font-size: 3em;
//   `
//     document.body.append(pointView);
//   }
// }

// class PointY extends PointX {
//   constructor(x, y) {
//     super(x, y);
//   }

//   symbol = 'y';
// }

// const pointx = new PointX(10, 10);
// const pointy = new PointY(20, 20);

// console.log(pointx);
// console.log(pointy);

// pointx.show();
// pointy.show();

// try catch

// try {
//   // ...
// } catch(err) { // <-- объект ошибки, можно использовать другое название вместо err
//   // ...
// }

// throw

// finally

// асинхронный js

// const posts = [];

// function getPosts() {

//   setTimeout(() => {
//     const post1 = {
//       title: 'post1'
//     }

//     const post2 = {
//       title: 'post2'
//     }

//     posts.push(post1);
//     posts.push(post2);
//   }, 2000);
// }

// function drowPosts() {
//   const list = document.createElement('ol');
//   posts.forEach(post => {
    

//   })
// }





