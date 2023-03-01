// 1

/* let messages = [  {text: "Hello", from: "John"},  {text: "How goes?", from: "John"},  {text: "See you soon", from: "Alice"}];

let readMessages = new WeakSet();

// функция для обновления статуса сообщения
function markAsRead(message) {
  readMessages.add(message);
}

// функция для проверки статуса сообщения
function isRead(message) {
  return readMessages.has(message);
}

// функция для удаления сообщения из структуры данных
function deleteMessage(message) {
  readMessages.delete(message);
  const index = messages.indexOf(message);
  if (index > -1) {
    messages.splice(index, 1);
  }
}

let message1 = messages[0];
console.log(isRead(message1)); // false

markAsRead(message1);
console.log(isRead(message1)); // true

let message2 = messages[1];
deleteMessage(message2);
console.log(isRead(message2)); // false

// 2

let messages = [  { text: "Hello", from: "John" },  { text: "How goes?", from: "John" },  { text: "See you soon", from: "Alice" }];

let messageReadTimes = new WeakMap();

// функция для обновления времени прочтения сообщения
function markAsRead(message) {
  messageReadTimes.set(message, new Date());
}

// функция для получения времени прочтения сообщения
function getReadTime(message) {
  return messageReadTimes.get(message);
}

// функция для удаления сообщения из структуры данных
function deleteMessage(message) {
  messageReadTimes.delete(message);
  const index = messages.indexOf(message);
  if (index > -1) {
    messages.splice(index, 1);
  }
}

let message1 = messages[0];
markAsRead(message1);
console.log(getReadTime(message1)); // выводит текущую дату и время

let message2 = messages[1];
markAsRead(message2);
console.log(getReadTime(message2)); // выводит текущую дату и время

let message3 = messages[2];
deleteMessage(message3);
console.log(getReadTime(message3)); // undefined

*/
