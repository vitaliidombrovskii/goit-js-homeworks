// Напиши скрипт который, при наборе текста в инпуте input# name - input(событие input), подставляет его текущее значение в span# name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.


'use strict';
const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
input.addEventListener('input', handleInput);

function handleInput(event) {
  if (event.currentTarget.value !== '') {
    nameOutput.textContent = event.currentTarget.value;
  }
};