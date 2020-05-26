// // async await

// function f1() {
//   return 1;
// }

// async function f2() {


//   // const promise = new Promise((resolve, reject) => {
//   //   resolve('done');
//   // });

//   const asyncActions = async () => {

//     throw new Error('Ошибка');
//     return 'done';
//   }

//   async function f3() {
//     return 'done f3';
//   }

//   const f4 = async function () {
//     return 'done f4';
//   }

//   // promise.then(result => console.log(result))
//   let result
//   try {
//     result = await asyncActions();
//   } catch (e) {
//     console.log('Призошла ошибка');
//     result = 'неизвестно';
//   }

//   const result2 = await f3();
//   const result3 = await f4();

//   console.log(result);
//   console.log(result2);
//   console.log(result3);

//   return 2; // resolve(2)
// }


// // console.log(f1());

// f2()

document.querySelector('#get-users').addEventListener('click', fillUserTable);
document.querySelector('#clear-users').addEventListener('click', clearUserTable);


async function fillUserTable() {

  console.log('fill');

  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  console.log(users);
  let userData = '';
  users.forEach(user => {

    userData += `
      <tr>
        <td>${user.name}</td>
        <td>${user.company.name}</td>
        <td>${user.phone}</td>
      </tr>
    `
  })


  document.querySelector('#user-data').innerHTML = userData;
}

function clearUserTable() {
  document.querySelector('#user-data').innerHTML = '';
}

