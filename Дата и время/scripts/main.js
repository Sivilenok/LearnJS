//1 

/* let date = new Date(2012, 1, 20, 3, 12);
alert(date.toLocaleString());

// 2

function getWeekDay(date) {
  // Создаем массив сокращений дней недели
  let daysOfWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
  // Получаем номер дня недели
  let dayIndex = date.getDay();
  
  // Возвращаем сокращение для соответствующего дня недели
  return daysOfWeek[dayIndex];
}

// 3

function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) { // воскресенье (0) изменяем на 7
    day = 7;
  }
  return day;
}

// 4

function getDateAgo(date, days) {
  let dateCopy = new Date(date);
  let timestamp = dateCopy.getTime();
  let diff = days * 24 * 60 * 60 * 1000;
  dateCopy.setTime(timestamp - diff);
  return dateCopy.getDate();
}

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// 5

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
console.log(getLastDayOfMonth(2012, 1)); // 29
console.log(getLastDayOfMonth(2022, 2)); // 28
console.log(getLastDayOfMonth(2023, 3)); // 31

// 6

function getSecondsToday() {
  let now = new Date(); // текущая дата и время
  let start = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // начало дня
  let diff = now - start; // разница в миллисекундах
  return Math.floor(diff / 1000); // разница в секундах
}

// 7

function getSecondsToTomorrow() {
  // Создаем объект Date, представляющий текущую дату и время
  var now = new Date();

  // Создаем объект Date, представляющий завтрашнюю дату
  var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  // Вычисляем разницу в миллисекундах между завтрашней датой и текущей датой
  var diff = tomorrow - now;

  // Переводим миллисекунды в секунды и возвращаем результат
  return Math.round(diff / 1000);
}

// 8

function formatDate(date) {
  var diff = new Date() - date; // Вычисляем разницу в миллисекундах
  if (diff < 1000) { // Меньше 1 секунды
    return 'прямо сейчас';
  } else if (diff < 60000) { // Меньше 1 минуты
    return Math.floor(diff / 1000) + ' сек. назад';
  } else if (diff < 3600000) { // Меньше 1 часа
    return Math.floor(diff / 60000) + ' мин. назад';
  } else { // Полная дата
    var d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // Выводим каждую компоненту даты и времени в виде двух цифр
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
  }
}

*/