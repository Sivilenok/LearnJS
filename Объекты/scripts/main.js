"use strict";

// 1

let user = {};  // Создаем пустой объект user

user.name = "John";  // Добавляем свойство name со значением John
user.surname = "Smith";  // Добавляем свойство surname со значением Smith

user.name = "Pete";  // Изменяем значение свойства name на Pete

delete user.name;  // Удаляем свойство name из объекта

// 2

function isEmpty(obj) {
  for (let key in obj) {
    return false;  
  }
  return true;  
}

// используем функцию для проверки объектов на пустоту

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

// 3

const user = {
    name: "John"
  };
  
  user.name = "Pete";  // это будет работать
  user = { name: "Jack" };  // будет ошибка, т.к. мы пытаемся переназначить переменную const

// 4 

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum);  // 390

  
  // 5 

  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == "number") {
        obj[key] *= 2;
      }
    }
  }
  
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  alert(menu.width);   // 400
  alert(menu.height);  // 600
  alert(menu.title);   // "My menu"
  