const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás, Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const formsId = ['input-name', 'input-email', 'input-cpf', 'input-address', 'input-city', 'input-state', 'type', 'input-summary', 'input-job', 'input-description', 'input-date'];
const registerButton = document.getElementById('registerButton');
const eraseButton = document.getElementById('eraseButton');
const main = document.getElementById('main');
let originalTypeIDList = [];

function createStates(states) {
  const selectStates = document.getElementById('input-state');
  for (let index = 0; index < states.length; index += 1) {
    const optionState = document.createElement('option');
    optionState.innerHTML = states[index];
    optionState.value = states[index];
    selectStates.appendChild(optionState);
  }
}

function dayIsValid(day) {
  if (day < 1 || day > 31) {
    return false;
  }
  return true;
}

function monthIsValid(month) {
  if (month < 1 || month > 12) {
    return false;
  }
  return true;
}

function yearIsValid(year) {
  if (year < 0) {
    return false;
  }
  return true;
}

function dateInput() {
  let date = document.getElementById('input-date').value;
  const formatDate = /^\d\d\/\d\d\/\d\d\d\d$/;
  if (date.length === 0) {
    alert('Data não preenchida.');
    return false;
  }
  if (!formatDate.test(date)) {
    alert('Formato de data inválido.');
    return false;
  }
  date = date.split('/');
  const day = date[0];
  const month = date[1];
  const year = date[2];
  const responseDayIsValid = dayIsValid(day);
  const responseMonthIsValid = monthIsValid(month);
  const responseYearIsValid = yearIsValid(year);
  if (responseDayIsValid === false) {
    alert('Dia inválido.');
  }
  if (responseMonthIsValid === false) {
    alert('Mês inválido.');
  }
  if (responseYearIsValid === false) {
    alert('Ano inválido');
  }
  return (responseDayIsValid && responseMonthIsValid && responseYearIsValid);
}

function typeListId() {
  const typeList = document.querySelectorAll('.typeClass');
  for (let index = 0; index < typeList.length; index += 1) {
    originalTypeIDList.push(typeList[index].id);
  }
}

function typeChanger() {
  const typeList = document.querySelectorAll('.typeClass');
  for (let index = 0; index < typeList.length; index += 1) {
    if (typeList[index].checked) {
      typeList[index].id = 'type';
    }
    if (!typeList[index].checked) {
      typeList[index].id = originalTypeIDList[index];
    }
  }
}

function getForm(formsId) {
  let answeredForm = document.getElementById('complete-form');
  let elementDiv = document.createElement('div');
  elementDiv.id = 'resultDiv';
  main.appendChild(elementDiv);
  answeredForm.addEventListener('submit', (event) => {
    event.preventDefault();
    for (let index = 0; index < formsId.length; index += 1) {
      let elementP = document.createElement('p');
      elementDiv.appendChild(elementP);
      let elementId = document.getElementById(`${formsId[index]}`);
      elementP.innerText = `${elementId.name}: ${elementId.value}`;
    }
    let quebraLinha = document.createElement('br');
    elementDiv.appendChild(quebraLinha);
  });
}

function submitButton() {
  registerButton.addEventListener('click', (event) => {
    typeChanger();
    const dateInputIsValid = dateInput();
    if (!dateInputIsValid) {
      event.preventDefault();
    }
  });
}

function clearButton() {
  eraseButton.addEventListener('click', () => {
    const elementDiv = document.getElementById('resultDiv');
    const inputAll = document.getElementsByTagName('input');
    const textAreaAll = document.getElementsByTagName('textarea');
    main.removeChild(elementDiv);
    for (let index = 0; index < inputAll.length; index += 1) {
      inputAll[index].value = '';
    }
    for (let index = 0; index < textAreaAll.length; index += 1) {
      textAreaAll[index].value = '';
    }
  });
}

createStates(states);
typeListId();
getForm(formsId);
submitButton();
clearButton();