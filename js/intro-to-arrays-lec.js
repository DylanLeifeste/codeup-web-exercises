"use strict";
console.log("Welcome to intro to arrays");

var arr1 = [1,2,3,4,5];

console.log(arr1[0]);
console.log(arr1[arr1.length - 1]);
//return the last element in an array
var arrLength = arr1.length;
console.log(arrLength);
arr1.push(6);
console.log(arrLength);

var arr2 = ['a','b','c'];
var arr3 = [6,'d',7,'e'];

var arr4 = [[1,2,3,4,5], ['a','b','c'], [6,'d',7,'e']];
console.log(arr4[1][2]);

var arr5 = [];
console.log(arr5);

// Iterating over Arrays

var colors = ['red','orange','yellow','green','blue','violet'];
// colors.length : starts at 1, counts the number of elements in an array
// colors.length - 1: this is used to find the last index in an array

// This for loop starts at index 0
for(var i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

// This for loops starts at the last element
for(var i = (colors.length -1); i >= 0; i--){
    console.log(colors[i]);
}

// This forEach loop iterates over all the array elements
// Call the forEach method on the Array
// forEach takes in a function parameter
// function has 3 available parameters

colors.forEach(function(color, index){
    console.log(color,index);
});

/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */


// An array is a data structure that holds an ordered list of items
// Each slot in a JavaScript array can hold any type of data



/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> []

//An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it

//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`

var pies = [];
console.log(pies);


//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
pies = ["apple", "cherry", "key lime", "huckleberry"];
console.log(pies);


// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
var shapes =  ['square', 'rectangle', 'circle', 'triangle'];
console.log(shapes);

// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
var instructors =  ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"]
console.log(instructors);

// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
var daysOfTheWeek =  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
console.log(daysOfTheWeek);

// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable
var favoriteFoods = ['ramen','sushi','CUPCAKES','pizza'];
console.log(favoriteFoods);


/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

//We can also count the length of an array by using the `.length` property

// TODO TOGETHER: Log the length of shapes array
console.log(shapes.length);

// TODO: console.log the length of the instructors array
console.log(instructors.length);
// TODO: console.log the length of the daysOfTheWeek array
console.log(daysOfTheWeek.length);
// TODO: console.log the length of the favoriteFoods array
console.log(favoriteFoods.length);


/* ***************************************************************
* 				ACCESSING ARRAY ELEMENTS
*************************************************************** */
// ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.

// TODO TOGETHER: What do we expect the following to output?
console.log(shapes[0]);
console.log(shapes[1]);
console.log(shapes[2]);
console.log(shapes[3]);
console.log(shapes[4]);

// TODO: console.log each element of the instructors array
console.log(instructors[0]);
console.log(instructors[1]);
console.log(instructors[2]);
console.log(instructors[3]);

// TODO: console.log the first three elements of the daysOfTheWeek array
// TODO: console.log the first three elements of the favoriteFoods array


// TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array

function returnLastElement(arr){
    return arr[arr.length - 1];
}

console.log(returnLastElement(shapes));


/* ***************************************************************
* 					ITERATING ARRAYS
*************************************************************** */
//  TODO TOGETHER: Log each element of the shapes array
console.log(shapes[0]);
console.log(shapes[1]);
console.log(shapes[2]);
console.log(shapes[3]);

// TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape
for(var i = 0; i < shapes.length; i++){
    console.log(shapes[i]);
    if(shapes[i] === 'circle'){
        alert("That's my favorite shape!");
        break;
    }
}
// TODO TOGETHER: Alert "that's my favorite shape!" when your favorite shape is iterated over in the loop.

// TODO: What happens if we change var i = 1? or var i = 2;
// TODO: What are benefits of using loops to iterate?
// TODO: How does the loop know when to stop iterating?

// TODO: Using a for loop, iterate through the instructors array and console.log each instructor
for(var i = 0; i < instructors.length; i++){
    console.log(instructors[i]);
    if(instructors[i] === 'sophie' || instructors[i] === 'justin' || instructors[i] === 'david'){
        alert("hey, I know " + instructors[i]);
    }else {
        alert("I haven't had class with " + instructors[i]);
    }
}
// TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week
for(var i = 0; i < daysOfTheWeek.length; i++){
    console.log(daysOfTheWeek[i]);
}
// TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food
for(var i = 0; i < favoriteFoods.length; i++){
    console.log(favoriteFoods[i]);
}
// TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor.
//  If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"



/* ***************************************************************
* 						FOR EACH ARRAY
*************************************************************** */

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array
shapes.forEach(function(shape){
    console.log(shape);
});

// TODO TOGETHER: Using a for each loop, console.log each element from the following array:
var pies = ["apple", "cherry", "key lime", "huckleberry"];

pies.forEach(function(pie){
    console.log(pie);
});

// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor
instructors.forEach(function(instructor){
    console.log(instructor);
});
// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week
daysOfTheWeek.forEach(function(day){
    console.log(day);
});
// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food
favoriteFoods.forEach(function(food){
    console.log(food);
});