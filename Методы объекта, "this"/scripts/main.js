"use strict";

// 1

// Результатом будет ошибка "TypeError: Cannot read property 'name' of undefined".

let obj = {
  makeUser() {
    return {
      name: "John",
      ref: this,
    };
  },
};

let user = obj.makeUser();

alert(user.ref.name); // "John"

// 2

let calculator = {
  read() {
    this.a = +prompt("Введите первое число:", 0);
    this.b = +prompt("Введите второе число:", 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// 3

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

// Пример использования:
ladder.up().up().down().showStep().down().showStep(); // показывает 1, затем 0
