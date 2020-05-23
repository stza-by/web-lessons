// async await

// function f1() {
//    return 1;
// }

// async function f2() {

//   const asyncOperation = new Promise((resolve, reject) => {

//     setTimeout(() => {
//       resolve('Две секунды прошло');
//     }, 2000)
//   })

//   // old
//   // asyncOperation.then((result) => {
//   //   console.log(result);
//   // })

//   const result = await asyncOperation;

//   console.log(result);

//   // return 2;
// }

// console.log(f1());
// // console.log(f2());

// f2().then(result => {
//   // console.log(result);
// })


document.querySelector('#get-users').addEventListener('click', fillUserTable);
document.querySelector('#clear-users').addEventListener('click', clearUserTable);


async function fillUserTable() {
  console.log('fill');

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => console.log(users));

  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  let userData = '';

  users.forEach(user => {

    userData += `
    <tr>
      <td>${user.name}</td>
      <td>${user.company.name}</td>
      <td>${user.phone}</td>
    </tr>
    `

    document.querySelector('#user-data').innerHTML = userData;
  })
}

function clearUserTable() {
  document.querySelector('#user-data').innerHTML = '';
}
