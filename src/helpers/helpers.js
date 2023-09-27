export const computer = (first, operator, second) => {
  first = +first;
  second = +second;
  let result;
  switch (operator) {
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    case "*":
      result = first * second;
      break;
    case "/":
      result = first / second;
      break;
    default:
      result = second;
      break;
  }
  return +result.toFixed(15);
};

export const getCurrent = (payload, current, newNumber) => {
  // only on dot value payload is undefined
  // alert(current);
  return !payload
    ? current + (current.includes(".") ? "" : ".")
    : (newNumber ? "" : current) + payload;
};
