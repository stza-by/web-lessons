// пример массива
const myArray = ['cat', 'dog', 'bird'];

// элементы в массиве нумеруются с начала начиная с 0
console.log(myArray[0]); // cat
console.log(myArray[1]); // dog
console.log(myArray[2]); // bird
console.log(myArray[3]); // undefined

// length - свойство обозначающее длину
console.log(myArray.length); // 3

// Массивы могут содержать любые типы данных
const numbers = [333, 234, 123, 123123, 124123];

// один из способов перебора элементов массива
for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
}

// алтернативный способ обхода массивов
for(const element of numbers) {
  console.log(element);
}

const user1 = {
  name: 'Laura',
  password: '12345678'
}

const user2 = {
  name: 'Katerina',
  password: '123456789'
}

const users = [user1, user2];
console.log(users);

const newUser = {
  name: 'Sam',
  password: 'qwe'
}

users.push(newUser);
users.pop();
users.unshift(newUser);
users.shift();

console.log(users);
