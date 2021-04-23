let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe', 'Jogar Xadrez');
tasksList.unshift('Escovar os dentes')
console.log(tasksList);

tasksList.pop();
console.log(tasksList);

tasksList.shift();
console.log(tasksList);

let indexOfTask = tasksList.indexOf('Brincar com o cachorro');
console.log(indexOfTask);
