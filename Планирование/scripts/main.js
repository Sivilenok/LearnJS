"use strict"

// 1

function printNumbers(from, to) {
    let current = from;

    let intervalId = setInterval(function() {
      console.log(current);
      if (current == to) {
        clearInterval(intervalId);
      }
      current++;
    }, 1000);
  }

  printNumbers(1, 5); // выводит числа 1, 2, 3, 4, 5 каждую секунду

function printNumbers(from, to) {
    let current = from;

    setTimeout(function print() {
      console.log(current);
      if (current < to) {
        setTimeout(print, 1000);
      }
      current++;
    }, 1000);
  }

  printNumbers(1, 5); // выводит числа 1, 2, 3, 4, 5 каждую секунду

// 3

let i = 0;

setTimeout(() => alert(i), 100);

for(let j = 0; j < 100000000; j++) {
  i++;
}
