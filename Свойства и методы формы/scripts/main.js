"use strict"

// 1

const select = document.getElementById("genres");

const selectedOption = select.options[select.selectedIndex];
console.log(selectedOption.value);
console.log(selectedOption.text);

const classicOption = new Option("Классика", "classic");
select.add(classicOption);

select.value = "classic";
