/**
 * Let's make a calculator 🧮
 */

type Formula = "add" | "substract" | "multiply" | "divide" | "remainder";
function calculate(formula: Formula, a: number, b: number): number {
  // if로 하는 방법
  /**
   if (formula === "add") {
    return a + b;
  } else if (formula === "substract") {
    return a - b;
  } else if (formula === "multiply") {
    return a * b;
  } else if (formula === "divide") {
    return a / b;
  } else {
    return a % b;
  }
   */

  // switch로 하는 방법
  switch (formula) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;
    default:
      throw new Error("unknown error");
  }
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
