const block = document.querySelector('.demo-1');
const button = document.querySelector('.demo-2 button');

if (block && button) {

  const color1 = '#eb4034';
  const color2 = '#34abeb';
  let colorFlag = 1;

  setInterval(() => {

    if (colorFlag) {
      block.style.backgroundColor = color1;
      colorFlag = 0;
    } else {
      block.style.backgroundColor = color2;
      colorFlag = 1;
    }

  }, 500);

  button.addEventListener('click', () => {
    alert("Ну привет :) ")
  });

} else {
  console.log('Error');
} 