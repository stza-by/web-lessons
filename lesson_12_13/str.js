// способы задания строк
const s1 = 'Hi';
const s2 = "Hi";
const s3 = `h1 ${10 + 123}`;

// длина строки
console.log(s1.length);

// строки неизменяемы 
console.log(s1[0]);
s1[0] = 'f';
console.log(s1);

// перебор методов строк
for (let char of s3) {
  console.log(char);
}

console.log('-----------')

for (let i; i < s3.length; i++) {
  console.log(s3[i]);
}

// специальные символы
console.log('\' та самая строка\' \n разделенная переводом строки');

// методы строк
const s4 = 'Строка с секретным кодом \"4332\"';

console.log(s4.charAt(10));

const position = s4.indexOf('44332');

if(position !== -1) {
  console.log(`Строка содержит секретный код в позиции ${position}`);
} else {
  console.log('Не содержит :(');
}

console.log(s4.includes('44332'));

// trim, repeat, toLowerCase, toEpperCase, slice, substring, split


