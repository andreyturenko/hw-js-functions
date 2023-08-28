// // // Tasks: Functions

// // 0) Реалізувати функцію isWorkingAgePerson, яка буде перевіряти,
// //    чи працездатного людина віку (від 16 до 65).

const isWorkingAgePerson = function (humanAge) {
  return humanAge >= 16 && humanAge <= 65;
};
console.log("Working age :>> ", isWorkingAgePerson(20));
console.log("Working age :>> ", isWorkingAgePerson(4));
console.log("Working age :>> ", isWorkingAgePerson(88));

// // 1) *Реалізувати функцію, яка приймає число і повертає булевське значення, чи воно просте
// //    (просте число ділитися без залишку тільки на себе і на одиницю).

function isSimpleNumber(number) {
  for (let i = 2; i < number / 2; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}
console.log("Simple number :>> ", isSimpleNumber(97));
console.log("Simple number :>> ", isSimpleNumber(24));

// // 2) Реалізувати функцію checkMultiplicity, яка приймає два числа і перевіряє,
// //    чи ділиться перше на друге націло (без залишку).

function checkMultiplicity(numberOne, numberTwo) {
  return !(numberOne % numberTwo);
}
console.log("Check the numbers :>> ", checkMultiplicity(25, 5));
console.log("Check the numbers :>> ", checkMultiplicity(15, 3));
console.log("Check the numbers :>> ", checkMultiplicity(15, 5));
console.log("Check the numbers :>> ", checkMultiplicity(15, 4));

// // 3) Перевірка можливості існування трикутника. Реалізувати функцію, яка приймає довжини трикутника;
// //    функція повертає true, якщо трикутник можливий, і false, якщо ні.

/**
 * Checking the possibility of the existence of a triangle
 * @param {number} a - First side of a triangle
 * @param {number} b - Second side of the triangle
 * @param {number} c - Third side of the triangle
 * @returns {boolean} Boolean values
 */
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0;
}
console.log("Is a triangle possible? :>> ", isTriangle(1, 5, 10));
console.log("Is a triangle possible? :>> ", isTriangle(12, 10, 12));

// // 4) Реалізувати функції розрахунку площі (або поверхні) наступної фігури (тіла): трикутника,
// //    прямокутника (або конуса, паралелепіпеда) в залежності від переданих розмірів фігури.
// //    Функція повинна повернути обчислене значення. Мінімум для однієї фігури на вибір.

/**
 * Calculating the area of a triangle
 * @param {number} a - First side of a triangle
 * @param {number} b - Second side of the triangle
 * @param {number} c - Third side of the triangle
 * @returns {(number|string)} Calculated area
 */
let areaTriangle = function (a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return "Incorrect parameters";
  } else {
    return Math.sqrt((a + b + c) * (b + c - a) * (a + c - b) * (a + b - c));
  }
};
console.log("The area of a triangle :>> ", areaTriangle(3, 4, 5));
console.log("The area of a triangle :>> ", areaTriangle(3, 4, 0));

let areaParallelepiped = function (a, b, c) {
  return 2 * (a * b + b * c + a * c);
};
console.log("The area of a parallelepiped :>> ", areaParallelepiped(2, 3, 4));
