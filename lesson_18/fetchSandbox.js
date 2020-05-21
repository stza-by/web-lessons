document.getElementById('get-text').addEventListener('click', getText);

document.getElementById('get-users').addEventListener('click', getUsers);

document.getElementById('get-posts').addEventListener('click', getPosts);

function getText() {
  fetch('./text.txt').then(result => {
    console.log(result);

    return result.text();
  })
    .then(text => {
      // задание вставить текст на страницу 
      console.log(text);

      document.querySelector('#output').innerHTML = `<h2> ${text}</h2>`;
    })
}

function getUsers() {

  fetch('./users.json')
    .then(response => {

      return response.text();
      // return response.json()
    })
    .then(result => {
      console.log(result);
      result = JSON.parse(result);

      let output = '<h2>Пользователи</h2>'

      result.forEach(user => {

        output += `
        <ul>
          <li>ID: ${user.id}</li>
          <li>Name: ${user.name}</li>
          <li>Email: ${user.email}</li>
        </ul>
      `;

        document.querySelector('#output').innerHTML = output;
      })
    })
}

function getPosts() {

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      console.log(posts);

      let output = '<h2>Посты</h2>'

      posts.forEach(post => {

        output += `
        <div>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;

        document.querySelector('#output').innerHTML = output;
      })
    })
}