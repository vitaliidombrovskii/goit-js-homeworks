// Получить общую сумму баланса(поле balance) всех пользователей.

'use strict';
import users from './users.js';

const calculateTotalBalance = users =>
  users.reduce ((total, user) => total + user.balance, 0);

// const calculateTotalBalance = users => {
//   // твой код
// };

console.log(calculateTotalBalance(users)); // 20916