"use strict"

// 1

let dictionary = Object.create(null);

dictionary.toString = function() {
  return Object.keys(this).join();
};

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for(let key in dictionary) {
  alert(key);
}

alert(dictionary); // "apple,__proto__"

// 2

rabbit.sayHi();                        // Rabbit
Rabbit.prototype.sayHi();              // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi();              // undefined

// В первом вызове this == rabbit, во всех остальных this равен Rabbit.prototype, так как это объект перед точкой.
// Так что только первый вызов выведет Rabbit, а остальные – undefined

