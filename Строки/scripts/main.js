"use strict";

// 1

function ucFirst(str) {
  if (!str) return str; // если строка пустая - вернуть как есть
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst("вася")); // "Вася"
console.log(ucFirst("")); // ""
console.log(ucFirst("123")); // "123"

// 2

function checkSpam(str) {
  let lowerStr = str.toLowerCase(); // переводим строку в нижний регистр
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now')); // true
console.log(checkSpam('free xxxxx')); // true
console.log(checkSpam("innocent rabbit")); // false

// 3

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  } else {
    return str;
  }
}

// 4

function extractCurrencyValue(str) {
  return parseInt(str.slice(1));
}
alert( extractCurrencyValue('$120') === 120 ); // true
