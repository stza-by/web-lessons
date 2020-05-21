document.querySelector('#get-text').addEventListener('click', getText);
document.querySelector('#get-users').addEventListener('click', getUsers);
document.querySelector('#get-posts').addEventListener('click', getPosts);

document.querySelector('#new-empl').addEventListener('submit', createNewEmpl);


function createNewEmpl(e) {

  e.preventDefault();


  const name = document.getElementById('name').value;
  const salary = document.getElementById('solary').value;
  const age = document.getElementById('age').value;

  let body = {
    name,
    salary,
    age
  };

  body = JSON.stringify(body);
  console.log(body);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body
  }

  fetch('http://dummy.restapiexample.com/api/v1/create', options)
  .then(response => response.json())
  .then(result => console.log(result));
}


function getPosts() {

  fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(response => response.json())
    .then(employes => {
      console.log(employes);

      let output = '<h2>Работники</h2>'

      employes.data.forEach(empl => {
        output += `
        <h3>${empl.employee_name}</h3>
        <p> Возраст: ${empl.employee_age}  Доход: ${empl.employee_salary}</p>
      `
      })

      document.querySelector('#output').innerHTML = output;
    })
    .catch(() => {

    })
}



function getText() {
  fetch('./text.txt')
    .then(result => result.text())
    .then(result => {
      document.querySelector('#output').innerHTML = `<h2>${result}</h2>`
    })
}

function getUsers() {

  // fetch('./user.json')
  // .then(response => response.text())
  // .then(text => {

  //   console.log(text)

  //   console.log(JSON.parse(text));
  // });

  fetch('./user.json')
    .then(response => response.json())
    .then(users => {
      console.log(users);

      let output = '<h2>Пользователи </h2>'
      users.forEach(user => {
        output += `
          <ul>
          <li>ID: ${user.id}</li>
          <li>Name: ${user.name}</li>
          <li>Email: ${user.email}</li>
          </ul>
        `
      })

      document.querySelector('#output').innerHTML = output;

    })
    .catch(error => {
      console.log('Проиизшла ошибка');
      console.log(error);

    });
}