/*
 * Преобразование типов 
 */
let number = 10; // number
let str = '10';  // string

let number2string = String(number); // преобразование числа в строку
console.log('number2string', number2string, typeof number2string);

String(true);  // 'true'
String(false); // 'false'


let string2number = Number(str); // преобразование строки в число 
console.log('string2number', string2number, typeof string2number);

let age = Number('Эту строку невозможно преобразовать в число');

console.log(age); // NaN

Number(undefined); // NaN
Number(null);      // 0
Number(true);      // 1
Number(false);     // 0
Number('');        // 0


console.log(1 + '2');    // '12'
console.log(2 * '3');    // 6 
console.log('2' - 3);    // -1
console.log('10' - 3);   // 7

Boolean(1); // true 
Boolean(0); // false
Boolean('Good day!'); // true
Boolean(''); // false
Boolean(' '); // false
Boolean('0'); // true

console.log('------------------------------------------');

/*
Операторы в JS
*/

// Унарные операторы - требуют только один аргумени
let x = 10;
console.log('Унарный - ', -x);
console.log('Унарный ++', ++x);

// Бинарные операторы
const strA = 'Hello', strB = 'World!';
console.log('Бинарный +', strA + strB);

// Приоритет операторов

console.log('* и / имеет более высокий приоритет чем + и -', 4 - 2 * 4 + 8 / 2);
console.log('С помощью () можно управлять приоритетом', (4 - 2) * (4 + 8) / 2);


// Остаток от деления 

console.log('Остаток от деления вычисляется оператором %', 10 % 3);

// Возведение в степень

console.log("Возведение в степень выполняется с помощью оператора **", 3 ** 2, 2 ** 3);

// Инкремент / Декремент

let inc = 10;
inc++;
++inc;

let dec = 100;
dec--;
--dec;

// Побитовые операции

let a = 1; // 0001
let b = 4; // 0100

console.log(a & b); // 0000
console.log(a | b); // 0101

// Сокращенное присваивание 

// *= /* -= +/

let n = 2;

n = n + 10; // 12

n += 10; // 22

/*
  Операторы сравнения
*/

console.log(10 > 2, 10 < 2); // оператор больше/меньше

console.log(10) //  >= <= больше/меньше или равно 

// == - равно

// != - не равно 

/*
Оператор alert
*/

alert('Сообщение для пользователя');

/*
Оператор prompt
*/

age = prompt('Ваш возраст?', 18);

console.log(age);

alert(`Пользователь ввел число ${age}`);

/*
Оператор confirm
*/

const answer = confirm(`Вам действительно ${age} лет?`);

console.log(answer);