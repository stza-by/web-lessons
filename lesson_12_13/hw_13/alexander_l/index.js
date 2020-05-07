

const btn = document.querySelector("#btn");
const closeItems = document.querySelector("#items");

closeItems.addEventListener("click", foundRemove);
btn.addEventListener("click", deleteLastListElement);

function foundRemove(event) {

  console.log(event.target);

  if (event.target.className == "close") {
   // event.path[1].remove();
   event.target.parentElement.remove();
  }
}

function deleteLastListElement() {
  const list = document.querySelector("#items");

  if (list.lastElementChild) {
    list.lastElementChild.remove();
  } else {
    alert("Элементы закончились");
  }
}

const theForm = document.querySelector("#the-form");

theForm.lastElementChild.addEventListener("click", addNewListItem);

function addNewListItem(event) {
  if (theForm.firstElementChild.value === "") {
    alert("Ничего не введено");
    return;
  }
  const closeBtn = '<button type="button" class="close">&times;</button>';
  const newListItem = document.createElement("li");
  console.dir(theForm.firstElementChild);
  newListItem.className = "list-group-item";
  newListItem.innerHTML = theForm.firstElementChild.value + closeBtn;

  document.querySelector("#items").append(newListItem);
  theForm.firstElementChild.value = "";
}
