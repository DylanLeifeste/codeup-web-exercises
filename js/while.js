"use strict";

// var i = 1;
//
// while (i < 17) {
//     console.log(Math.pow(2, i));
//     i++;
// }

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    console.log(allCones + " Cones for sale ");
    var conesBought = Math.floor(Math.random() * 5) + 1;

    if (conesBought <= allCones) {
        console.log(allCones + " Cones sold ");
        allCones -= conesBought;
        console.log(" I have " + allCones + " left ");
    }
    if (allCones === 0) {
        console.log("WooHoo diabetus sold all my cones");

    } else {
        console.log("Sorry i cant sell " + conesBought + " because i only have " + allCones + " left ");
    }
}
while (allCones >= 1);