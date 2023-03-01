"use strict";

// 1

let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");
let sum = Number(num1) + Number(num2);
alert(`Сумма введенных чисел: ${sum}`);

// 2

let num = 6.35;
let roundedNum = Math.round(num * 10) / 10;
console.log(roundedNum); // 6.4

// 3

function readNumber() {
    while (true) {
      let input = prompt("Введите число", "");
  
      if (input === null || input === "") {
        return null;
      }
  
      let num = Number(input);
  
      if (isNaN(num)) {
        alert("Вы ввели не число, попробуйте ещё раз");
      } else {
        return num;
      }
    }
  }

// 4

for (let i = 0; i < 10; i += 0.2) {
    console.log(i);
  }

// 5

function random(min, max) {
    return min + Math.random() * (max - min);
  }

  console.log(random(1, 5)); // 2.716173463765186
  console.log(random(1, 5)); // 4.580244009018153
  console.log(random(1, 5)); // 2.6847690525469197

// 6

function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  console.log(randomInteger(1, 5)); // 2
  console.log(randomInteger(1, 5)); // 3
  console.log(randomInteger(1, 5)); // 1
  

