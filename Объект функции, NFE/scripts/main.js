"use strict"

// 1

function makeCounter() {
    function counter() {
      return counter.currentCount++;
    };
    counter.currentCount = 0;
    counter.set = function(value) {
      counter.currentCount = value;
    };
    counter.decrease = function() {
      counter.currentCount--;
    };
    return counter;
  }

  let counter = makeCounter();
  console.log(counter()); // 0
  console.log(counter()); // 1

  counter.set(10);
  console.log(counter()); // 10

  counter.decrease();
  console.log(counter()); // 9

// 2

function sum(a) {
    let currentSum = a;

    function helper(b) {
      currentSum += b;
      return helper;
    }

    helper.toString = function() {
      return currentSum;
    };

    return helper;
  }

  console.log(sum(1)(2)); // 3
  console.log(sum(1)(2)(3)); // 6
  console.log(sum(5)(-1)(2)); // 6
  console.log(sum(6)(-1)(-2)(-3)); // 0
  console.log(sum(0)(1)(2)(3)(4)(5)); // 15
