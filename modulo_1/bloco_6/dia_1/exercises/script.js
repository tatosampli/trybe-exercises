const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás, Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const registerButton = document.getElementById('registerButton');

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

function submitButton() {
  registerButton.addEventListener('click', (event) => {
    const dateInputIsValid = dateInput();
    if (!dateInputIsValid) {
      event.preventDefault();
    }
  });
}

createStates(states);
submitButton();