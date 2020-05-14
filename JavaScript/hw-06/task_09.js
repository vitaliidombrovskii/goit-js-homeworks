// Массив имен(поле name) людей, отсортированных в зависимости от количества их друзей(поле friends)

'use strict';
import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  return users.sort((userMin, userMax) =>
      userMin['friends'].length - userMax['friends'].length, )
    .map(users => users.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]