"use strict"

// 1

for (let li of document.querySelectorAll('li')) {
  let title = li.firstChild.data;

  title = title.trim();
  let count = li.getElementsByTagName('li').length;

  alert(title + ': ' + count);
}

// 2

// Во время выполнения <script> последним DOM-узлом является <script>,
// потому что браузер ещё не обработал остальную часть страницы.
// Поэтому результатом будет 1 (узел-элемент).

// 3

// Код выведет имя тега BODY в диалоговом окне (alert box), так как body.firstChild вернет первый дочерний узел body,
// который является созданным комментарием, а data узла содержит текстовое содержимое комментария.

// 4

alert(document); // [object HTMLDocument]
alert(document.constructor.name); // HTMLDocument
alert(HTMLDocument.prototype.constructor === HTMLDocument); // true
alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
alert(HTMLDocument.prototype.__proto__.constructor.name); // Document
alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node

