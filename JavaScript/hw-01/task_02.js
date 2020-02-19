'use strict';

const total = 100;
let ordered = 50;
if (total < ordered) {
  const result1 = 'На складе недостаточно товаров!'
  console.log(result1)
} else {
  const result2 = 'Заказ офомлен, с вами свяжется менеджер.'
  console.log(result2)
}