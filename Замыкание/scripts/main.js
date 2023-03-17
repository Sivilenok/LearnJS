"use strict"

// 1

alert( counter2() ); // 0
alert( counter2() ); // 1

// Счетчики, созданные с помощью функции makeCounter(),
// независимы друг от друга, так как каждый счетчик имеет свою собственную
// локальную переменную count, которая определена в замыкании, возвращаемом makeCounter()

// 2

alert( counter.up() ); // 1
alert( counter.up() ); // 2
alert( counter.down() ); // 1

// После вызова let counter = new Counter(); в переменной counter создается новый объект,
// который содержит два метода up() и down() и переменную count со значением 0.
// Последующие вызовы методов up() и down() будут изменять значение переменной count и возвращать ее измененное значение.

// 3

// Будет ошибка "Uncaught ReferenceError: sayHi is not defined", потому что функция sayHi объявлена внутри блока if и недоступна за его пределами

// 4

function sum(a) {
  return function(b) {
    return a + b;
  };
}

console.log(sum(1)(2)); // 3
console.log(sum(5)(-1)); // 4

// 5

function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

alert(arr.filter(inArray([1, 2, 10]))); // 1,2

// 6

function byField(fieldName) {
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

users.sort(byField('name')); // сортировка по имени
users.forEach(user => alert(user.name)); // Ann, John, Pete

users.sort(byField('age')); // сортировка по возрасту
users.forEach(user => alert(user.name)); // Pete, Ann, John

// 7

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = (function(index) {
      return function() {
        alert(index);
      };
    })(i);

    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0
army[5](); // 5

