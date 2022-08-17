const docInputValue = function (field) {
  const input = document.getElementById(field);
  const value = parseFloat(input.value) && (parseFloat(input.value) > 0) ? parseFloat(input.value) : parseFloat('0');
  input.value = '';
  return value;
}

const docHistorryInnertext = function (field) {
  const fieldInner = document.getElementById(field);
  const fieldValue = parseFloat(fieldInner.innerText);
  return fieldValue;
}

const calculatesum = function (num1, num2) {
  const sum = num1 + num2;
  return sum;
}

const calculatesub = function (num1, num2) {
  const sub = num1 - num2;
  return sub;
}