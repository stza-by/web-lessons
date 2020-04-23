function log(argument) { // function declaration, объявление функции
  console.log(argument);
}

function max(a, b) { // function decalration
  if (a > b) {
    return a;       // returned value
  } else {
    return b;       // returned value
  }
}

const min = function (a, b) { // function expression, функциональное выражение
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

const isEven = (a) => { // arrow function, стрелочная функция
  if (a % 2) {
    return false;
  } else {
    return true;
  }
}

const calculator = (a, b, opearator) => {
  let answer = null;
  switch (opearator) {
    case '+':
      answer = a + b;
      break
    case '-':
      answer = a - b;
      break;
    case '*':
      answer = a * b;
      break;
      case '/': 
      answer = a / b;
      break;
      default:
        answer = 'Error. Unexpected operator';
  }

  return answer;
}

log(max(10, 20)); // 20

log(min(11, 99)); // 11

log(isEven(11)); // false

log(isEven(8)); // true

log(calculator(1, 10, '+')); // 11
log(calculator(22, 10, '-')); // 12
log(calculator(13, 1, '*')); // 13
log(calculator(28, 2, '/')); // 14