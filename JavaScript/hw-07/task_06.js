// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.


//   Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

'use strict';
const input = document.querySelector('#validation-input');
input.addEventListener('change', validationCheck);

function validationCheck(event) {
  const needfulLengthOfInput = Number(input.getAttribute('data-length'));
  if (needfulLengthOfInput === event.currentTarget.value.length) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  };
}