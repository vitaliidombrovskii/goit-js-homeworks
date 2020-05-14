// Получить массив имен пользователей по полу(поле gender).
'use strict';
import users from './users.js';

const getUsersWithGender = (users, gender) => {
  return users
    .filter(users => users.gender === gender)
    .map(usres => usres.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]