"use Scrict";
console.log("Hello from External JavaScript");

alert("Welcome to my Website");

 var favColor = prompt("What is your favorite Color?");
 alert(favColor + ' is my favorite color too!');

 // ----------------------------- Word Problems ------------------------- //


//----- Movie Rental ----//
var dailyRentalRateDollars = prompt("What is the dollar amount per day?");
var littleMermaidDaysRented = prompt("How many days are you renting LittleMermaid?");
var brotherBearDaysRented = prompt("How many days are you renting Brother bear?");
var herculesDaysRented = prompt("How many days are you renting Hercules?");

var totalRentalCost = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRateDollars;
alert("The total amount is $" + totalRentalCost.toFixed(2));

//------ Contractor payments --------- //
var googleRate = parseFloat(prompt("What is googles hourly rate?"));
var amazonRate = parseFloat(prompt("What is amazons hourly rate?"));
var facebookRate = parseFloat(prompt("What is Facebooks hourly rate?"));
var googleHours = parseFloat(prompt("How many hours did you work for google?"));
var amazonHours = parseFloat(prompt("How many hours did you work for Amazon?"));
var facebookHours = parseFloat(prompt("How many hours did you work for Facebook?"));

var totalPayment = googleHours * googleRate;
totalPayment += amazonHours * amazonRate;
totalPayment += facebookHours * facebookRate;

alert("The total will be $" + totalPayment.toFixed(2));

//----Student Enrollment --- //
var classIsNotFull = confirm("verify class is not full");
var classScheduleConflict = confirm("Make sure theres no conflicting times");
var studentEnrolled = classIsNotFull && classSchedulConflict;

alert("Enrollment status: " + studentEnrolled);

// --- Product offer ------ //
var discount = 2;
var numOfItems = prompt("How many items did you buy?")
var offerIsValid = prompt("Confirm offer isn't expired");
var isPremiumMember =prompt("Customer is a Premium member");

var discountApplied = offerIsValid && (isPremiumMember || numOfItems >= discount);

alert("Discount applied: " + discountApplied);






