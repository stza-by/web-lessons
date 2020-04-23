const newObject = {};
const newObject2 = new Object();

const user = {
  name: 'Jo',
  age: 11,
  job: 'doctor',
  'last name': 'Hart'
};

console.log(user.name);
console.log(user.age);
console.log(user.job);

console.log(user['name'])
console.log(user['job']);
console.log(user['age']);

console.log(user);

user.married = true;
console.log(user);

delete user.age;
console.log(user);

const user2 = {
  name: 'Dario',
  sayHello: function () {
    console.log('Hi');
  },
  sayGoodBye: () => {
    console.log('Good bye');
  },
  sayNiceDay: () => {
    console.log('Have a nice day');
  }
}

user2.sayHello();
user2.sayGoodBye();
user2.sayNiceDay();