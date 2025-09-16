/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;
const MIN_VALUE_03 = 1;
const MAX_VALUE_03 = 20;
let current_03 = MIN_VALUE_03;

while (current_03 <= 20 ) {
  if (current_03 % 2 === 1)
  sum = sum + current_03;
  current_03 = current_03 + 1;
}

console.log("сумма всех нечетных чисел от 1 до 20:", sum);


