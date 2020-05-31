// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

'use strict';
const numberOfCategories = document.querySelectorAll('.item');
console.log(`В списке ${numberOfCategories.length} категории.`);
const titleOfItem = document.querySelectorAll('h2');
const lengthOfItem = document.querySelectorAll('.item > ul');
titleOfItem.forEach(title => console.log(title.textContent));
lengthOfItem.forEach(len => console.log(len.children.length));

function getNameAndLength(title, value) {
  for (let i = 0; i < title.length; i += 1) {
    console.log(`Категория: ${title[i].textContent}`);
    console.log(`Количество елементов: ${value[i].children.length}`);
  }
}
getNameAndLength(titleOfItem, lengthOfItem);