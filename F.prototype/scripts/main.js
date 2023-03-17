'use strict'

// 1

// Первый вызов alert покажет true, потому что rabbit был создан до изменения Rabbit.prototype.
// Свойство eats уже было установлено на true в объекте, на который указывает прототип rabbit.
// Второй вызов alert покажет false, потому что мы изменили свойство eats на false в прототипе Rabbit после того, как объект rabbit был создан.
// Теперь rabbit будет наследовать свойство eats со значениями false.
// Третий вызов alert снова покажет true, потому что удаление свойства eats из объекта rabbit не повлияет на его прототип.
// Четвертый вызов alert покажет undefined, потому что свойство eats было удалено из прототипа Rabbit,
// и rabbit больше не имеет доступа к этому свойству через свой прототип.

// 2

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person = new Person("John", 30);

let person2 = new person.constructor("Jane", 25);

console.log(person2); // Person {name: "Jane", age: 25}

function Animal(type) {
  this.type = type;
}

let animal = new Animal("Dog");

let animal2 = new animal.constructor("Cat");

console.log(animal2); // TypeError: animal.constructor is not a constructor
