function log(arg) {
  console.log(arg);
}

function max(a, b) {
  let maxNumber = null;

  if (a > b) {
    maxNumber = a;
  } else {
    maxNumber = b;
  }

  return maxNumber;
}

log(max(19, 9));

log(isEqual(11, 10)); // false
log(isEqual(10, 10)); // true

function isEqual(a, b) { // function declaration, объявление функции
  // должны вернуть true если они ровны, иначе возвращаем false
  let result = null;

  if (a === b) {
    result = true;
  } else {
    result = false;
  }

  return result;
  // return a === b;
}

const min = function (a, b) { // function expression, функциональное выражение 
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

const isEven = function (num) {
  let result = null;

  if (num % 2) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

const isEven2 = (num) => { // arrow function
  let result = null;

  if (num % 2) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

const calculator = (a, b, operator) => {
  let answer = null;
  switch (operator) {
    case '+':
      answer = a + b;
      break;
    case '-':
      answer = a - b;
      break;
    case '*':
      answer = a * b;
      break;
    case '/':
      answer = a / b;
      break;
    case '**':
      answer = a ** b;
      break;
    default:
      answer = 'Ошибка. Неизвестный оператор :(';
  }
  return answer;
}


log(calculator(11, 12, '+')); // 23
log(calculator(11, 12, '-')); // -1
log(calculator(11, 12, '*')); // 132
log(calculator(11, 12, '/')); // 0.9
log(calculator(4, 2, '**')); // 16
