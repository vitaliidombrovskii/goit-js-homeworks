// В HTML есть пустой список ul#ingredients.


// В JS есть массив строк.

// // Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

'use strict';
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const list = document.querySelector('#ingredients');
const creatListOfItems = function (arr) {
  let addItem;
  const arrayOfItems = [];
  for (let i = 0; i < arr.length; i += 1) {
    addItem = document.createElement('li');
    addItem.textContent = arr[i];
    arrayOfItems.push(addItem);
  }
  return list.append(...arrayOfItems);
};
creatListOfItems(ingredients);