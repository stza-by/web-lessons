function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        addRow(user);
      });
    })
    .then(() => {
      $('[data-toggle="popover"]').popover();
      // console.log($('button[data-toggle="popover"]').popover());
    });
}

function addRow(user) {
  const list = document.querySelector("#user-list");
  const row = document.createElement("tr");
  row.innerHTML = `
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.username}</td>
      <td><button type="button" class="btn btn-light" data-toggle="popover" data-trigger="hover" 
      data-placement="right" data-html="true" title="${user.name}" data-content="${makeDataTable(
    user.address
  )}">...</button></td> 
      <td>${user.phone}</td>
      <td>${user.website}</td>
      <td><button type="button" class="btn btn-light" data-toggle="popover" data-trigger="hover" 
      data-placement="left" data-html="true" title="${user.name}" data-content="${makeDataTable(
    user.company
  )}">...</button></td>
    `;

  list.append(row);
}

function makeDataTable(data) {
  let dataResult = "";
  for (var key in data) {
    dataResult += `
    <b>${key}:</b> ${data[key]}<br>`;
  }
  //console.log(dataResult);
  return dataResult;
}

getUsers();
