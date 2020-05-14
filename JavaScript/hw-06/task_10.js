// Получить массив всех умений всех пользователей(поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
'use strict';
import users from './users.js';

const getSortedUniqueSkills = users => {
  const allUserSkills = users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])

  const uniqueSkillsOfUsers = [];
  allUserSkills.forEach(skill => {
    if (!uniqueSkillsOfUsers.includes(skill)) {
      uniqueSkillsOfUsers.push(skill);
    }
  });

  return uniqueSkillsOfUsers.sort();
};


console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]