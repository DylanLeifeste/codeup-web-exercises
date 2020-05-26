"use strict";
$(document).ready(function () {


function userHistory(username) {

var myPromise = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_API_KEY}`}});

myPromise.then(response => response.json())
    .then(events => events)
    .then(jsonResponse => jsonResponse.filter(events => events.type === 'PushEvent')[0].created_at)
    .then(date => console.log(new Date(date).toDateString()))
}
userHistory('DylanLeifeste');

let wait = num => {
    num = num * 1000;
    return new Promise((resolve) => setTimeout(() =>{
        if (num > 1000) {
            resolve("You will see this after " + (num / 1000) + " seconds");
        } else {
            resolve("You will see this after " + (num / 1000) + " second");
        }
    }, num ));
}
wait(1).then(console.log)
wait(2).then(console.log)
wait(3).then(console.log)

});



