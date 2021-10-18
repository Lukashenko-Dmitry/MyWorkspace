let page = document.querySelector('.page');
let button1 = document.querySelector('.button-light');
let button2 = document.querySelector('.button-dark');

button1.onclick = function() {
    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme');    
  };
