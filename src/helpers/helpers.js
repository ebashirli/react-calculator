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
  return result;
};

export const getCurrent = (payload, current, newNumber) => {
  // only on dot value payload is undefined
  return !payload
    ? current + (current.includes(".") ? "" : ".")
    : (newNumber ? "" : current) + payload;
};
