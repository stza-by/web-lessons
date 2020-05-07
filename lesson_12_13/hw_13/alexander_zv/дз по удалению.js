
const dell1 = document.querySelector('#dell1');

console.log(dell1);

dell1.addEventListener('click', removeElement);
function removeElement() {
    console.log(document.getElementById('dell1'))
    document.getElementById('dell1').remove();
}

const dell2 = document.querySelector('#dell2');
dell2.addEventListener('click', removeElement2);
function removeElement2() {
    document.getElementById('dell2').remove();
}

const dell3 = document.querySelector('#dell3');
dell3.addEventListener('click', removeElement3);
function removeElement3() {
    document.getElementById('dell3').remove();
}

const dell4 = document.querySelector('#dell4');
dell4.addEventListener('click', removeElement4);
function removeElement4() {
    document.getElementById('dell4').remove();
}
