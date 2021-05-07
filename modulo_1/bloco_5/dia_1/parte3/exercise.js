document.querySelector('#header-container').style.backgroundColor = 'green';
document.querySelector('#container').style.backgroundColor = 'grey';
document.querySelector('.emergency-tasks').style.backgroundColor = 'pink';
let th3 = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < th3.length; index += 1) {
  th3[index].style.backgroundColor = 'purple';
}
document.querySelector('.no-emergency-tasks').style.backgroundColor = 'yellow';
let th3b = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < th3b.length; index += 1) {
  th3b[index].style.backgroundColor = 'black';
}
document.querySelector('#footer-container').style.backgroundColor = 'green';