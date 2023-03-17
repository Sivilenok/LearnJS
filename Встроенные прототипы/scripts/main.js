'use strict'

// 1

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
}

function f() {
  alert("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду

// 2

Function.prototype.defer = function(ms) {
  let fn = this;
  return function(...args) {
    setTimeout(() => fn.apply(this, args), ms);
  };
};

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
