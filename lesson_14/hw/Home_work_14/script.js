const container = document.querySelector(".container");

//container.addEventListener('mousedown', longPressLeft);

container.addEventListener("click", (e) => {
  const numberItem = e.target.innerText;
  if (e.target.id == "plus") {
    addNewItem(e);
  } else if (e.target.className == "item") {
    increment(e);
  }
});

container.addEventListener("contextmenu", (e) => {
  e.preventDefault();
    if (e.target.id == "plus") {
      addNewItem();
    } else if (e.target.className == "item") {
      decrement(e);
    }
  });

function increment(elem) {
    let num = Number(elem.target.innerText);
    num++;
    elem.target.innerText = num;
    animate(elem);
    
}

function decrement(elem) {
    let num = Number(elem.target.innerText);
    num--;
    if (num<0){num=0;}
    elem.target.innerText = num;
    animate(elem);

}

function addNewItem(elem) {
  const newItem = document.createElement("div");
  newItem.className = "item";
  newItem.innerText = 0;
  console.log(newItem.DOMStringMap);
  document.querySelector("#plus").before(newItem);
  animate(elem);
}

 function animate(elem){
    elem.target.className = "onclick item";
    setTimeout(() => {
        elem.target.className = "item";
      }, 50);
 }