

// function f(resolve, reject) {

// }


// const promise = new Promise((resolve, reject) => {

//   setTimeout(() => {

//     resolve('Hello ');

//   }, 2000)

//   // reject(new Error('Error'));
// });

// console.log(promise)

// // promise.then((result) => {
// //   console.log(result)
// // })
// // .catch((error) => {
// //   console.log(error.message);
// // })
// // .finally(() => {
// //   console.log('блок finally');
// // })

// promise
// .then(result => {
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => { resolve(result + 'World') }, 2000)
//   })

//   return promise2;
// })
// .then((result) => {
//   console.log(result);
// })



// fetch('http://dummy.restapiexample.com/api/v1/employees')
//   .then(response => response.json())
//   .then(employes => {
//     console.log(employes);
//   })


// console.log('ewfwefwefwefgw');



// async function fi() {


//   // let pr = new Promise((resolve, reject) => {

//   //   setTimeout(() => {
//   //     console.log('Я это примис');
//   //     resolve('done');
//   //   }, 2000)

//   // })

//   // let response = await pr;
//   // console.log(response);


//   async function f2() {

//     setTimeout(() => {
    
//       console.log('Я это примис');
//       return Promise.resolve('done');
    
//     }, 2000)
  
//   }

//   const result = await f2();

//   console.log(result);

// }

// fi();
