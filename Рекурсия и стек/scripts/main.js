'use strict'

// 1

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumTo(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }
}

function sumTo(n) {
  return (n * (n + 1)) / 2;
}

// 2

function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
alert(factorial(5)); // 120

// 3

function fib(n) {
  let a = 1,
      b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757

// 4

function printList(list) {
  let tmp = list;

  while (tmp) {
  alert(tmp.value);
  tmp = tmp.next;
  }
}

function printList(list) {
  alert(list.value);

  if (list.next) {
  printList(list.next);
  }
}

// Оба решения верны и дают одинаковый результат.
// Однако, в данном случае рекурсивное решение может быть более удобным и читаемым, особенно если список содержит много элементов.

function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.unshift(tmp.value);
    tmp = tmp.next;
  }

  for (let value of arr) {
    console.log(value);
  }
}

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
    console.log(list.value);
  }
}
