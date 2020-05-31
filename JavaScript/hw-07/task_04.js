// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


"use strict";

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.getElementById('value');

let counterValue = 0;

decrementBtn.addEventListener('click', handleDecrementClick);
incrementBtn.addEventListener('click', handleIncrementClick);

function handleDecrementClick() {
  counterValue -= 1;
  counter.textContent = counterValue;
}

function handleIncrementClick() {
  counterValue += 1;
  counter.textContent = counterValue;
}