'use strict'

// 1

async function getUsers(names) {
  const promises = names.map(name =>
    fetch(`https://api.github.com/users/${name}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch user ${name}: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.message && data.message === 'Not Found') {
          return null; // если пользователя не существует, возвращаем null
        }
        return data;
      })
      .catch(error => {
        console.error(error);
        return null; // если произошла ошибка при запросе, возвращаем null
      })
  );
  return Promise.all(promises);
}

// 2

// HTTP заголовок Origin и заголовок Referer выполняют разные функции, поэтому оба они важны и не могут заменять друг друга.
// Заголовок Referer содержит информацию о странице, с которой был выполнен запрос.
// Заголовок Origin же определяет источник, с которого был отправлен запрос, и используется для безопасности веб-приложений.
// Важно отметить, что заголовки Referer и Origin могут быть отсутствующими, и это не является ошибкой.
