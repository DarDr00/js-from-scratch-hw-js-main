/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findCommonElements(array1, array2) {
   const newArray = [];
   let array1Array2 = [...array1, ...array2];
   for(let i = 0; i < array1.length; i++) {
   let likeEl = array1[i]
   

   for(let a = 0; a < array2.length; a++) {
   if (likeEl === array2[a]) {
    newArray.push(likeEl)
   }
 }
}
return newArray

}

let finalfindCommonElements = findCommonElements([1, 2, 3], [2, 3, 4]);
console.log(finalfindCommonElements)
