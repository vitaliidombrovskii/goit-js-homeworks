// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства. Возвращает массив значений определенного свойства prop из каждого объекта в массиве.
"use strict";
const productss = [{
    name: 'Радар',
    price: 1300,
    quantity: 4
  },
  {
    name: 'Сканер',
    price: 2700,
    quantity: 3
  },
  {
    name: 'Дроид',
    price: 400,
    quantity: 7
  },
  {
    name: 'Захват',
    price: 1200,
    quantity: 2
  },
];

const getAllPropValues = function (arr, prop) {
  let values = [];
  for (const product of productss) {
    if (prop in product)
      values.push(product[prop]);
  }
  return values;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(productss, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(productss, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(productss, 'category')); // []