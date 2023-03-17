'use strict'

// 1

const ageTable = document.getElementById('age-table');
const ageTableLabels = ageTable.querySelectorAll('label');
const ageTableFirstTd = ageTable.querySelector('td:first-child');
if (ageTableFirstTd.textContent === 'Age') {
  // найдено!
}
const searchForm = document.querySelector('form[name="search"]');
const searchFormFirstInput = searchForm.querySelector('input');
const searchFormInputs = searchForm.querySelectorAll('input');
const searchFormLastInput = searchFormInputs[searchFormInputs.length - 1];
