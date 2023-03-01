"use strict";

// 1

function AB() {}

let a = new AB();
let b = new AB();

alert( a == b ); // true

// 2

function Calculator() {
  this.read = function() {
    this.a = +prompt('Введите первое значение:', 0);
    this.b = +prompt('Введите второе значение:', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

// Пример использования:
let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// 3 

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('Введите число:', 0);
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);

