document.getElementsByTagName('p')[1].innerText = 'Vou estar bem financeiramente, emocionalmente e espiritualmente.';
document.getElementsByClassName('main-content')[0].style.backgroundColor = 'green';
document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
document.getElementsByClassName('title')[0].innerHTML = 'Exercício 5.1 - JavaScript';
let tagp = document.getElementsByTagName('p');
for (let index = 0; index < tagp.length; index += 1) {
  tagp[index].innerHTML = tagp[index].innerHTML.toUpperCase();
}

function show() {
  let mostrar = document.getElementsByTagName('p');
  let cm = [];
  for (let index = 0; index < tagp.length; index += 1) {
    cm.push(mostrar[index].innerHTML);
  }
  return cm;
}
console.log(show());