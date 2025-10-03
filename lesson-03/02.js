// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(integer) {
    let checkInt = integer % 2;
    if (checkInt === 0) {
    return true
    } else {
    return false
    }
}

let finalCheck = isEven (2)

if (finalCheck === true) {
console.log ('Число является чётным')
} else {
console.log ('Число нечетное')}