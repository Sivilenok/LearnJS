"use strict";

// 1

5 > 4 // true
// 5 больше, чем 4, поэтому результат выражения - true.

"ананас" > "яблоко" // false
// при сравнении строк сравниваются коды символов в них поочередно слева направо, и в данном случае "я" имеет больший код, чем "а", поэтому "яблоко" больше, чем "ананас", результат - false.

"2" > "12" // true
// при сравнении строк сначала сравниваются первые символы. "2" имеет больший код символа, чем "1", поэтому результат - true.

undefined == null // true
// undefined и null равны друг другу и ни к чему не приводятся, поэтому результат - true.

undefined === null // false
// undefined и null имеют разные типы, поэтому результат - false.

null == "\n0\n" // false
// при нестрогом равенстве (==) null равен только null и undefined, а строка "\n0\n" не является ни одним из них, поэтому результат - false.

null === +"\n0\n" // false
// унарный плюс преобразует строку "\n0\n" в число 0, но тип значения не совпадает с типом null, поэтому результат - false.