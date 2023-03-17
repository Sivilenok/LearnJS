'use strict'

// 1

let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// 2

let div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();

alert(scrollWidth);

// 3

ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px'
ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px'

// 4

// Единицы измерения: свойство width задает ширину элемента в пикселях или других единицах измерения, которые могут быть заданы
// в CSS (например, проценты), в то время как clientWidth возвращает значение ширины элемента в пикселях, не включая границы и отступы.
// Расчет: значение свойства width вычисляется как сумма ширины содержимого, отступов и границ элемента, тогда как clientWidth вычисляется
// как ширина содержимого, включая внутренние отступы (padding), но не включая границы и внешние отступы (margin).
// Доступность: свойство width является одним из значений, которые можно задать в CSS для определения ширины элемента,
// а clientWidth является свойством объекта элемента, которое можно получить только через JavaScript.
// Кроме того, значение width может быть задано в CSS-файле или непосредственно в HTML-коде элемента,
// в то время как clientWidth доступен только во время выполнения скрипта.
// Влияние на макет: значение свойства width может влиять на макет страницы, так как оно может изменять ширину элемента и его расположение в документе,
// в то время как clientWidth не влияет на макет страницы, так как это значение используется только для вычисления размеров элемента в JavaScript.
// Учет прокрутки: при наличии горизонтальной прокрутки у элемента clientWidth может быть меньше, чем значение width, так как он не учитывает
// ширину полосы прокрутки, в то время как значение width учитывает ее ширину.
// Возможность изменения: значение свойства width может быть изменено путем изменения стиля элемента или задания нового значения в скрипте,
// тогда как clientWidth является только для чтения и не может быть изменен.

