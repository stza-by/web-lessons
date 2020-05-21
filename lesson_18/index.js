// // промисы

// let myPromise = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     resolve('done')
//   }, 1000)
// });


// myPromise.then((result) => {
//   console.log(result);
// })
// .catch(error => {
//   console.log(error);
// })
// .finally(() => {
//   console.log('finally block');
// })


// console.log(myPromise);

// // очередь задач
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('hello');
//   }, 2000)
// })
// .then(result => {

//   return new Promise((resolve) => {

//     setTimeout(() => {
//       result = result + 'world';
  
//       resolve(result);
//     }, 1000)
//   })
// })
// .then(result => {
//   console.log(result);
// })
 









