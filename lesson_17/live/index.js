// Прототипное наследование

// function PointX(x, y){
//   this.x = x;
//   this.y = y;

//   this.symbol = 'x';
// }


// PointX.prototype.show = function() {
//   const pointView = document.createElement('div');
//   pointView.innerText = this.symbol;

//   pointView.style.cssText = `
//     position: absolute;
//     top: ${this.y}px;
//     left: ${this.x}px;
//     font-size: 3em;
//   `;

//   document.body.append(pointView);
// }


// const point = new PointX(200, 300);
// point.show();

// console.log(point);

// function PointY(x, y){
//   // this = {}
//   PointX.call(this, x, y);
//   this.symbol = 'y';
// }

// PointY.prototype = Object.create(PointX.prototype);
// PointY.prototype.constructor = PointY;

// const pointY = new PointY(200, 200);
// pointY.show();

// console.log(pointY);

// es6 наследование
// class PointX {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;

//     this.symbol = 'x'
//   }

//   show() {
//     const pointView = document.createElement('div');
//     pointView.innerText = this.symbol;

//     pointView.style.cssText = `
//     position: absolute;
//     top: ${this.y}px;
//     left: ${this.x}px;
//     font-size: 3em;
//   `;

//     document.body.append(pointView);
//   }
// }

// const pointx = new PointX(120, 150);
// pointx.show();

// console.log(pointx);

// class PointY extends PointX {
//   constructor(x, y){
//     super(x, y);

//     this.symbol = 'y';
//   }
// }

// const pointY = new PointY(100, 300);
// pointY.show();
// console.log(pointY);

// class PointZ extends PointY {
//   constructor(x, y, symbol) {
//     super(x, y);

//     this.symbol = symbol;
//   }
// }

// const customObject = new PointZ(200, 400, 'ui');

// customObject.show();


// console.log(customObject);

// обработка ошибок

// function getUserInput() {
//   try {
  
//     const userInput = prompt('Введите возраст?');
//     const result = Number(userInput);
  
//     console.log(result);
  
//     if (isNaN(result)) {
//       throw new SyntaxError('Пользователь ввел непраильные данные :(');
//     }

//     if(result < 18) {
//       throw Error('ПОльзователь слишком молод');
//     }
  
//   } catch (error) {
  
//     if (error.message === 'ПОльзователь слишком молод') {
//       alert('Подрости')
//     } else {
//       throw error;
//     }
//   } finally {
//     console.log('блок finaly');
//   }
// }

// try {
//   getUserInput();
// } catch(err) {
//   console.log('Все плохо');
// }

const posts = [];

function getPosts() {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({title: 'post1'})
      posts.push({title: 'post2'})
      
      resolve('я выполнился');
    
    }, 2000);
  })
}

function showPosts() {

  return new Promise((resolve, reject) => {
    posts.forEach(post => {
      const postItem = document.createElement('div');
      postItem.innerText = post.title;
  
      document.body.append(postItem);
    })
    resolve('Элементы отобразились')
  }) 
}

getPosts()
.then((a) => showPosts())
.then((b) => console.log(b))



console.log('la la la');

