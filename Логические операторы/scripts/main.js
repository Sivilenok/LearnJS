"use strict";

// 1

2

// 2

1, 2

// 3

1, undefined

// 4

3

// 5

if (age >= 14 && age <= 90);

// 6

if (!(age >= 14 && age <= 90)) {
  // Возраст НЕ находится в диапазоне от 14 до 90 (включительно)
}

if (age < 14 || age > 90) {
  // Возраст НЕ находится в диапазоне от 14 до 90 (включительно)
}

// 7 

1, 3

// 8

let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}