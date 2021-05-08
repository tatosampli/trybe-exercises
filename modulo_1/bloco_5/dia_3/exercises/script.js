const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const dayListDecember = document.querySelector('#days');
const holiday = {
  name: 'holiday',
  string: 'Feriados'
};
const friday = {
  name: 'friday',
  string: 'Sexta-feira'
}

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

function createDaysList(dayList) {
  for (let index = 0; index < dayList.length; index += 1) {
    const day = dayList[index];
    const dayItem = document.createElement('li');
    dayItem.innerHTML = day;
    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
    } else {
      dayItem.className = 'day';
    }    
    dayListDecember.appendChild(dayItem);
  }
};

function createButton(element) {
  const divButton = document.querySelector('.buttons-container');
  const elementButton = document.createElement('button');
  elementButton.id = `btn-${element.name}`;
  elementButton.innerText = element.string;
  divButton.appendChild(elementButton);
};

function changeEvent(button) {
  const targetButton = document.querySelector(`#btn-${button.name}`);
  const targetClassList = document.querySelectorAll(`.${button.name}`);
  if (button.name === 'holiday') {
    targetButton.addEventListener('click', function() {
      for (let index = 0; index < targetClassList.length; index += 1) {
        if (targetClassList[index].style.backgroundColor === 'white') {
          targetClassList[index].style.backgroundColor = 'rgb(238,238,238)';
        }else {
          targetClassList[index].style.backgroundColor = 'white';
        }
      }
    })
  }
  if (button.name === 'friday') {
    let originalValue = [];
    for (let index = 0; index < targetClassList.length; index += 1) {
      originalValue.push(targetClassList[index].innerHTML);
    }
    targetButton.addEventListener('click', function() {      
      for (let index = 0; index < targetClassList.length; index += 1) {
        if (targetClassList[index].innerHTML === 'Finalmente!') {
          targetClassList[index].innerHTML = originalValue[index];
        } else {
          targetClassList[index].innerHTML = 'Finalmente!';
        }
      }
    })
  }
};

function dayMouseover() {
  const listDay = document.querySelector('#days');
    listDay.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseout() {
  const listDay = document.querySelector('#days');
    listDay.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
};

createDaysOfTheWeek();
createDaysList(dezDaysList);
createButton(holiday);
changeEvent(holiday);
createButton(friday);
changeEvent(friday);
dayMouseover();
dayMouseout();
