'use strict'

// 1

async function loadJson(url) {
  let response = await fetch(url);
  
  if (response.status == 200) {
  return response.json();
  }
  
  throw new Error(response.status);
  }
  
  loadJson('no-such-user.json')
  .catch(alert); // Error: 404

// 2

async function demoGithubUser() {
  let name = prompt("Введите логин?", "iliakan");

  while (true) {
    try {
      const user = await loadJson(`https://api.github.com/users/${name}`);
      alert(`Полное имя: ${user.name}.`);
      return user;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        name = prompt("Введите логин?", "iliakan");
      } else {
        throw err;
      }
    }
  }
}

// 3

function f() {
  wait().then(result => {
    console.log(result); // выведет 10
  });
}
