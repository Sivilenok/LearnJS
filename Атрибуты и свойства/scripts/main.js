"use strict"

// 1

let widget = document.querySelector('[data-widget-name]');
let widgetName = widget.dataset.widgetName || widget.getAttribute('data-widget-name');
console.log(widgetName); // выведет "menu"

// 2

let links = document.querySelectorAll('a');

for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue; // нет атрибута

  if (!href.includes('://')) continue; // нет протокола

  if (href.startsWith('http://internal.com')) continue; // внутренняя

  link.style.color = 'orange';
}