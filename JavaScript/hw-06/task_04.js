// Получить массив только неактивных пользователей(поле isActive).
'use strict';
import users from './users.js';

const getInactiveUsers = users =>
  users.filter(user => !user.isActive).map(usres => usres.name);

console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]