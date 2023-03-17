"use strict"

// 1

const divElement = document.querySelector('div');
const ulElement = document.querySelector('ul');
const liElements = document.querySelectorAll('li');
const secondLiElement = liElements[1]; // Второй элемент, т.к. индексация начинается с 0

// 2

// Да. Верно. Элемент elem.lastChild всегда последний, у него нет ссылки nextSibling.
// Нет. Неверно. Потому что elem.children[0] – потомок-элемент.
// Но перед ним могут быть другие узлы. Например, previousSibling может быть текстовым узлом.

// 3

const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  rows[i].cells[i].style.backgroundColor = 'red';
}
