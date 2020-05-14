'use strict';
import users from './users.js';

const getUsersWithEyeColor = (users, color) => {
  return users
    .filter(users => users.eyeColor === color)
    .map(usres => usres.name);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]