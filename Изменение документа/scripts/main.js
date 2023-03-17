"use strict"

// 1

let text = '<b>текст</b>';

  elem1.append(document.createTextNode(text));
  elem2.innerHTML = text;
  elem3.textContent = text;

// Ответ: 1 и 3.
// Результатом обеих команд будет добавление text «как текст» в elem.

// 2

function clear(elem) {
  elem.innerHTML = '';
}

const elem = document.getElementById('elem');
clear(elem); // очищает список

// 3

// При вызове метода table.remove(), таблица и её содержимое удаляются из документа, но текст "aaa" находится вне таблицы и, следовательно, не подвержен удалению.
// По умолчанию браузер интерпретирует любой текст, находящийся внутри таблицы, как содержимое ячеек таблицы, даже если этот текст не находится внутри тегов <td> или <th>.
// В данном случае текст "aaa" расположен перед тегом <tr>, которая является дочерним элементом таблицы.
// Браузер интерпретирует этот текст как содержимое ячеек таблицы и отображает его на странице в соответствии с CSS-стилями для таблицы.

// 4

const createListButton = document.getElementById('create-list');
  const list = document.getElementById('list');

  createListButton.addEventListener('click', () => {
    while (true) {
      const listItemContent = prompt('Введите содержимое пункта списка', '');
      if (listItemContent === null || listItemContent === '') {
        break;
      }

      const li = document.createElement('li');
      li.textContent = listItemContent;
      list.appendChild(li);
    }
  });

// 5

function createTree(container, data) {
  container.appendChild(createTreeDom(data));
}

function createTreeDom(data) {
  let ul = document.createElement('ul');
  for (let key in data) {
    let li = document.createElement('li');
    li.textContent = key;
    if (typeof data[key] === 'object') {
      li.appendChild(createTreeDom(data[key]));
    }
    ul.appendChild(li);
  }
  return ul;
}

let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },
  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

let container = document.getElementById('container');
createTree(container, data);

// 6

let lis = document.getElementsByTagName('li');

    for (let li of lis) {
      let descendantsCount = li.getElementsByTagName('li').length;
      if (!descendantsCount) continue;

      li.firstChild.data += ' [' + descendantsCount + ']';
    }

// 7

function createCalendar(elem, year, month) {

  let mon = month - 1;
  let d = new Date(year, mon);

  let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

  // * * * 1  2  3  4
  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  // <td> ячейки календаря с датами
  while (d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>';

    if (getDay(d) % 7 == 6) {
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';

  elem.innerHTML = table;
}

function getDay(date) {
  if (day == 0) day = 7;
  return day - 1;
}

createCalendar(calendar, 2012, 9);

// 8

function update() {
  let clock = document.getElementById('clock');
  let date = new Date(); // (*)
  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].innerHTML = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].innerHTML = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  clock.children[2].innerHTML = seconds;
}

function clockStart() {
  if (!timerId) {
    timerId = setInterval(update, 1000);
  }
  update();
}

function clockStop() {
  clearInterval(timerId);
  timerId = null;
}

// 9

const liTwo = document.getElementById('two');
liTwo.insertAdjacentHTML('beforebegin', '<li>2</li><li>3</li>');

// 10

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}