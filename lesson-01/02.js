/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code
let factorial = 1;
const MIN_VALUE_02 = 1;
const MAX_VALUE_02 = 10;
let current_02 = MIN_VALUE_02;

while (current_02 <= MAX_VALUE_02) {
factorial = factorial * current_02;
current_02 = current_02 + 1;
}
console.log("факториал числа 10 =", factorial);