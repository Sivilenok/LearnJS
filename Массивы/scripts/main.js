"use strict";

// 1

let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;

shoppingCart.push("Банан");

alert( fruits.length ); // 4

// 2

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");

// 3

//При вызове arr[2](), будет выведено ["a", "b", function].

//Это происходит потому, что метод push() добавляет переданный ему аргумент в конец массива, а в данном случае переданный аргумент является функцией. 
//При вызове arr[2](), мы вызываем эту функцию в контексте массива arr, то есть this внутри функции ссылается на сам массив arr. 
//Поэтому, когда мы выводим значение this внутри функции при помощи alert(),
//мы получаем значение всего массива, включая добавленную функцию.

// 3 

function sumInput() {
  let numbers = [];

  while (true) {
    let input = prompt('Введите число', '');

    if (input === null || input === '' || !isFinite(input)) break;

    numbers.push(+input);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }

  return sum;
}

// 4 

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}
