document.querySelector('#newUsers').addEventListener('click', newUsers);

function newUsers() {

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      console.log(users);

      let newTable = ' <h2> добавлены пользователи </h2> '

      users.forEach( user => {
        newTable += `
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td> 
          <button bookId=${user.id} class='delete btn btn-danger btn-sm'>x</button>
        </td>
      `
      })

      document.querySelector('#table').innerHTML = newTable;
    })
}