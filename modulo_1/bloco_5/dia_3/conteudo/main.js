const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

divUm.addEventListener('click', classTech);
divDois.addEventListener('click', classTech);
divTres.addEventListener('click', classTech);
input.addEventListener('input', alteraTech);

function classTech(event) {
  const techElement = document.querySelector('.tech');
  techElement.classList.remove('tech');
  event.target.classList.add('tech');
  input.value = '';
}

function alteraTech(event) {
  const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
}

myWebpage.addEventListener('dblclick', event => {
  window.open('https://tatosampli.github.io/', '_blank');
});

myWebpage.addEventListener('mouseover', event => {
  event.target.style.color ='red';
});

myWebpage.addEventListener('mouseout', event => {
  event.target.style.color ='unset';
});