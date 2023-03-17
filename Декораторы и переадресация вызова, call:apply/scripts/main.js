'use strict'

//1

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}

// 2

function f(x) {
  console.log(x);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test1"); // показывает "test1" после 1000 мс
f1500("test2"); // показывает "test2" после 1500 мс

// 3

function debounce(f, ms) {
  let timeoutId;

  return function(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      f.apply(this, args);
      timeoutId = null;
    }, ms);
  };
}

function sayHello() {
  console.log("Hello!");
}

let debouncedHello = debounce(sayHello, 1000);

debouncedHello(); // выполняется немедленно
debouncedHello(); // проигнорирован
setTimeout(() => debouncedHello(), 500); // проигнорирован (прошло только 500 мс)
setTimeout(() => debouncedHello(), 1500); // выполняется
setTimeout(() => debouncedHello(), 2500); // проигнорирован (прошло только 1000 мс от последнего вызова)

// 4

function throttle(f, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    f.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}




