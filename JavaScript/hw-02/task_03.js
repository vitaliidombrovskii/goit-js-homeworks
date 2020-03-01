// Задание 3
// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

'use strict';
const findLongestWord = function (string) {
  const stringMessage = string.split(' ');
  let longestWord = stringMessage[0];
  for (let i = 0; i < stringMessage.length; i += 1) {
    let wordMessage = stringMessage[i];
    if (longestWord.length < wordMessage.length) {
      longestWord = wordMessage;
    }
  }
  return longestWord;

};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'