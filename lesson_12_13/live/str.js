const s1 = 'Hi "ewdef"';
const s2 = "H1 'wefwef'";
const s3 = `H1 ${f1()}`;

console.log(s3);

function f1(){
  return 'Hi';
}

//длина строки 

console.log(s1.length);

console.log(s1[9]);

s1[0] = 'A';

console.log(s1);

for(let i = 0; i < s1.length; i++){
  console.log(s1[i]);
}

for(let char of s3) {
  console.log(char);
}

const s4 = 'text text \' \" \\ \n tex\t\t\t\tt\u2103 \u038E';
console.log(s4);

const s5 = 'Строка с секретным кодом 124';

console.log(s5.charAt(111));

const position = s5.indexOf('1234');

if(position === -1){
  console.log('Подстрока не найдена');
} else {
  // 
}

console.log(s5.includes('123'));

const originStr = '     Привет    ';

const trimedStr = originStr.trim();

console.log(originStr);

console.log(trimedStr.toLowerCase());


console.log(trimedStr.toUpperCase());

const s6 = 'Оля,Сергей,Василий';

console.log(s6.split(','));

console.log(s6.substring(3, 10));

console.log(s6.slice(3));


