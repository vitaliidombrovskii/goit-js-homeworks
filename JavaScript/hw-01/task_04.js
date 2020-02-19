'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let inputUser = prompt('Введите колличество дроидов');
const quantityPerDroid = Number(inputUser);
let totalPrice;
let balance;

if (inputUser === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = pricePerDroid * inputUser;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(`Вы купили ${inputUser} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
  }
}


//   }
//   massege = `Вы купили ${inputUser} дроидов, на счету осталось ${balance} кредитов.`;
//   console.log(massege);
// }



// switch (input) {
//   case null:
//     'Отменено пользователем';
//     break;
//   case totalPrise = (prisePerDroid * inputUser)

// }