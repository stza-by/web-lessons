function createUser(name) {
  return { name }
}


const array = []; // array == массив
const array2 = new Array();

const myArray = ['cat', 'dog', 'bird']; // cat - 0; dog - 1; bird - 2

console.log(myArray[0]); // cat
console.log(myArray[1]); // dog
console.log(myArray[2]); // bird
console.log(myArray[3]); // bird

for (let index = 0; index < myArray.length; index++) {
  console.log(index, myArray[index]);
}
//                0    1    2    3    4   5   6    7
const numbers = [345, 213, 123, 123, 123, 0, 123, 123, 11111];

// способо обхода всех элементов массива

console.log('--------------------------------------------')
let index = 0;

while (index < numbers.length) {

  console.log(index, numbers[index]);

  index++;
}

console.log('----------------------')

for (let element of myArray) {
  console.log(element);
}

const user = {
  name: 'name1'
}


const user2 = {
  name: 'name2'
}

const users = [user, user2];

console.log(users);

const myArray2 = ['BMW', 'Audi'];

console.log(myArray2);

myArray2.push('Mercedes');

console.log(myArray2);

myArray2.pop();

console.log(myArray2);

myArray2.pop();

console.log(myArray2);

// shift unshift

myArray2.unshift('Mazda');

console.log(myArray2);

myArray2.shift();
myArray2.shift();

console.log(myArray2);

//          0     1             2
let arr = ["Я", "изучаю", "JavaScript"];

arr.splice(1, 0, 'Очень', 'Старательно'); // начиная с позиции 1, удалить 1 элемент

console.log(arr);

const lenght = Number(prompt('Какой длины создать массив ?'));

const result = [];

let index2 = 0;

while (index2 <= lenght) {
  result.push(index2);
  index2++;
}

console.log(result);
