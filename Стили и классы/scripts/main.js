"use strict"

// 1

function showNotification(options) {
  const notification = document.createElement('div');
  notification.className = 'notification';

  if (options.html) {
    notification.innerHTML = options.html;
  }

  if (options.className) {
    notification.classList.add(options.className);
  }

  document.body.appendChild(notification);

  notification.style.top = (options.top || 0) + 'px';
  notification.style.right = (options.right || 0) + 'px';

  setTimeout(() => {
    notification.remove();
  }, 1500);
}

let i = 1;
    setInterval(() => {
      showNotification({
        top: 10,
        right: 10,
        html: 'Hello ' + i++,
        className: "welcome"
      });
    }, 2000);