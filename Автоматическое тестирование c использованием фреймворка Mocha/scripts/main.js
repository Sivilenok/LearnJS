// 1

it("Возводит x в степень n", function() {
    let x = 5;
  
    let result = x;
    assert.equal(pow(x, 1), result);
  
    result *= x;
    assert.equal(pow(x, 2), result);
  
    result *= x;
    assert.equal(pow(x, 3), result);
  
    // проверяем возведение в отрицательную степень
    assert.equal(pow(x, -1), 1 / x);
    assert.equal(pow(x, -2), 1 / (x * x));
    assert(isNaN(pow(x, NaN)));
    assert(isNaN(pow(NaN, x)));
  });
  