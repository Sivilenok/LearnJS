//1 

let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user;

alert(name);      // John
alert(age);       // 30
alert(isAdmin);   // false

// 2

function topSalary(salaries) {
  let maxSalary = 0;
  let maxSalaryName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxSalaryName = name;
    }
  }

  return maxSalaryName;
}
