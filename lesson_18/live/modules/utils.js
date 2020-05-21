function sayHi(name) {
  console.log(`hi ${name}`);
}

function plus(x, y) {
  return x + y;
}

const user = {
  name: 'Rick',
  age: 1000,
}


console.log('Меня импортировали');


export default class Person {

}


export { sayHi, plus, user };