const calculationHistory = [];
function addToHistory(operand1, operand2, operator, result) {
  const record = {
    operands: [operand1, operand2],
    operator: operator,
    result: result,
  };
  calculationHistory.push(record);
}
function displayHistory() {
  if (calculationHistory.length === 0) {
    console.log("No calculations have been made yet.");
    return;
  }
  console.log("Calculation History:");
  calculationHistory.forEach((entry, index) => {
    const [operand1, operand2] = entry.operands;
    console.log(
      `${index + 1}. ${operand1} ${entry.operator} ${operand2} = ${entry.result}`
    );
  });
}
function add(operand1, operand2) {
  const result = operand1 + operand2;
  addToHistory(operand1, operand2, "+", result);
  return result;
}
function subtract(operand1, operand2) {
  const result = operand1 - operand2;
  addToHistory(operand1, operand2, "-", result);
  return result;
}
function multiply(operand1, operand2) {
  const result = operand1 * operand2;
  addToHistory(operand1, operand2, "*", result);
  return result;
}
function divide(operand1, operand2) {
  if (operand2 === 0) {
    console.log("Error: Division by zero is not allowed.");
    return "Error: Division by zero";
  }
  const result = operand1 / operand2;
  addToHistory(operand1, operand2, "/", result);
  return result;
}
console.log("=== My Calculator ===");
console.log("5 + 9 =", add(5, 9));
console.log("10 - 4 =", subtract(10, 4));
console.log("6 * 7 =", multiply(6, 7));
console.log("20 / 4 =", divide(20, 4));
console.log("8 / 0 =", divide(8, 0));

console.log("");
displayHistory();