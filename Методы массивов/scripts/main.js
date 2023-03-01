"use strict";

// 1

/* 

function camelize(str) {
  return str.split('-').map(function(word, index) {
    if (index == 0) {
      return word;
    }
    // Если это не первое слово, то делаем первую букву заглавной и возвращаем
    return word[0].toUpperCase() + word.slice(1);
  }).join('');
}

camelize("my-short-string"); // 'myShortString'
camelize("background-color"); // 'backgroundColor'
camelize("list-style-image"); // 'listStyleImage'
camelize("-webkit-transition"); // 'WebkitTransition'

// 2

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered); // [3, 1]
console.log(arr); // [5, 3, 8, 1] (исходный массив не изменен)

// 3

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr); // [3, 1]

//4

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr); // [8, 5, 2, 1, -10]

//5

function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // ['CSS', 'HTML', 'JavaScript']
console.log(arr); // ['HTML', 'JavaScript', 'CSS']

// 6

function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };
  
  this.calculate = function(str) {
    let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
    
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    
    return this.methods[op](a, b);
  }
  
  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

//7 

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name);

alert( names ); // Вася, Петя, Маша

//8

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya, petya, masha ];

let usersMapped = users1.map(user => ({
  fullName: user.name + " " + users.surname,
  id: users.id
}));

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // "Вася Пупкин"

// 9

function sortByAge(users) {
  users.sort((a, b) => a.age - b.age);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

// 10

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [array[i], array[j]] = [array[j], array[i]]; // меняем местами элементы с индексами i и j
  }
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr); // возможны различные перестановки, например [3, 1, 2]

// 11

function getAverageAge(users) {
  let sum = users.reduce((acc, user) => acc + user.age, 0);
  return sum / users.length;
}

// 12

function unique(arr) {
  let result = [];
  let set = {};

  for (let str of arr) {
    if (!(str in set)) {
      result.push(str);
      set[str] = true;
    }
  }

  return result;
}
 
//13

function groupById(arr) {
  return arr.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
  }, {});
}
*/