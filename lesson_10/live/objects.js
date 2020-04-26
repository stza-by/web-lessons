const newObhect = {};
const newObhect2 = new Object();

const user = { // объект
  name: 'Jo',  // свойство либо property либо поле либо field 
  age: 12,
  job: 'doctor',
  password: '123456',
  'last name': 'Hurt',
  sayHello: function () {  // метод  metod
    console.log('Hello');
  },
  sayGoodBye: () => {
    console.log('Bye Bye');
  },
  say() {
    console.log('Hiiiiii');
  }
}

const fieldName = 'last name';

console.log(user);
console.log(user.age);
console.log(user.name);
console.log(user.job);
console.log(user.password);
console.log(user.email);

console.log(user['name']);
console.log(user['age']);
console.log(user['job']);
console.log(user['password']);
console.log(user[fieldName]);


user.isMarried = true;
user['qwert'] = 123;

delete user.job;

console.log(user);

console.log()

user.sayHello();


user.say();
user.sayGoodBye();

const returnNumber = () => {
  return 10000;
}

user.rn = returnNumber;

console.log(user.rn()); // 10000

const a = 10;
const b = 10;

console.log(a === b);

const obj1 = {
  name: 'name'
}

const obj2 = obj1;

console.log(obj1.name === obj2.name);


// -----------------------------------------------------------


function createUser(name) {
  return { name }
}

const newUser = createUser('Lary');
const newUser2 = createUser('Dario');
const newUser3 = createUser('Nick');

console.log(newUser);