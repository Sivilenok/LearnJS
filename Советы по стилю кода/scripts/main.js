"use strict";

// 1

describe("Функция pow", function() {
  it("Возводит x в степень n", function() {
    function pow(x, n) {
      // реализация функции возведения числа x в степень n
    }

    let x = 5;

    let result = x;
    assert.equal(pow(x, 1), result);

    result *= x;
    assert.equal(pow(x, 2), result);

    result *= x;
    assert.equal(pow(x, 3), result);
  });
});

