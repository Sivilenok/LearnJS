"use strict";

// 1

1

// 2 

// Первый цикл выведет значения 1, 2, 3, 4.

// Второй цикл выведет значения 1, 2, 3, 4, 5.

// 3

// Оба цикла выведут alert с одинаковыми значениями

//Постфиксная форма:
0, 1, 2, 3, 4

//Префиксная форма:
0, 1, 2, 3, 4

// 4

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

// 5 

let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

// 6 

let num;
do {
num = Number(prompt("Введите число, большее 100", ""));
} while (num <= 100 && num);

// 7 

function eratosthenes(n) {
  // Создаем список чисел от 2 до n
  let numbers = [];
  for (let i = 2; i <= n; i++) {
    numbers.push(i);
  }

  // Начинаем с первого числа в списке (2)
  let i = 0;
  while (i < numbers.length) {
    // Вычеркиваем все кратные числа
    let j = i + 1;
    while (j < numbers.length) {
      if (numbers[j] % numbers[i] === 0) {
        numbers.splice(j, 1);
      } else {
        j++;
      }
    }
    i++;
  }

  // Оставшиеся числа являются простыми
  return numbers;
}

// Пример использования
let n = 10;
console.log(eratosthenes(n)); // [2, 3, 5, 7]

