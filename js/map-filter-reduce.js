"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let langs = users.filter(user => user.languages.length > 2 );
console.log(langs);

const userEmails =  users.map(user => {
    return user.email;
});
console.log(userEmails);

const totalExp = users  .reduce((total, user )=> {
    return total + user + user.yearsOfExperience;
}, 0);

console.log(totalExp);

const avgExp = totalExp / users.length;
console.log(avgExp);

let longestEmail = users.reduce((longestEmail, user)=> {
    if (longestEmail.length > user.email.length) {
        return longestEmail;
    } else {
        return user.email;
    }
}, "");

console.log(longestEmail);

let instructorsString = users.reduce((finalString, instructor, index) => {
    if (index < users.length - 1){
        return `${finalString}${instructor.name.substring(0,1).toUpperCase()}${instructor.name.substring(1,instructor.name.length).toLowerCase()}, `} else {
        return `${finalString}${instructor.name.substring(0,1).toUpperCase()}${instructor.name.substring(1,instructor.name.length).toLowerCase()}, `}

}, "Your instructors are: ");

console.log(instructorsString);
