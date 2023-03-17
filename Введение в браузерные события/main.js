"use strict"

// 1

let hideButton = document.getElementById("hide-button");
let text = document.getElementById("text");

hideButton.addEventListener("click", function() {
  text.style.display = "none";
});

// 2

function hideSelf() {
    let hideButton = document.getElementById("hide-button");
    hideButton.style.display = "none";
  }

// 3

button.onclick = () => alert(2);

//Обработчик события "click", который был добавлен первым через метод addEventListener,
// был удален с помощью removeEventListener, но так как переданные функции были разные,
// это не повлияло на добавленный обработчик.

