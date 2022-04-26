'use strict';
const str = ' Web Developer';
const str1 = ' About Me!';
const str2 = ' My Languages';
for (let i = 1; i < str.length; i++) {
  hero(i);
}
function hero(i) {
  setTimeout(function () {
    document.querySelector('.typing-container h2').textContent += str[i];
  }, 220 * i);
}
for (let i = 1; i < str1.length; i++) {
  about(i);
}
function about(i) {
  setTimeout(function () {
    document.querySelector('.about-me').textContent += str1[i];
  }, 220 * i);
}
