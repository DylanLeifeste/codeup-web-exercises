(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        first_name:  'Dylan',
        last_name: 'Leifeste'
    };
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
        // var sayHello = " Hello ";
        // console.log(sayHello + person.first_name + ' ' + person.last_name);

        person.sayHello = function () {
            return "Hello from " + this.first_name + " " + this.last_name;
        };
        console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function discountChecker (shoppers) {
        shoppers.forEach(function (shopper) {
            if (shopper.amount >= 200) {
                console.log(shopper.name + " has spent $" + shopper.amount.toFixed(2) + ' today. They qualify for the discount of 12%! their final cost is actually $' + (shopper.amount - (shopper.amount * .12)).toFixed(2) + '.');

            } else {
                console.log(shopper.name + ', thanks for shopping with is today! your final total is: $' + shopper.amount.toFixed(2) + '. If you added $' + (200 - shopper.amount).toFixed(2) + ', you could save 12% on your purchase today.');
            }
        })
    }
    console.log(discountChecker(shoppers));
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "Harry potter",
            author: {
                first_name: 'JK',
                last_name: 'Rowling'
            }
        },
        {
            title: "The Compund",
            author: {
                first_name: 'S.A',
                last_name: 'Bodeen'
            }
        },
        {
            title: "War and Peace",
            author: {
                first_name: 'Leo',
                last_name: 'Tolstoy'
            }
        },
        {
            title: 'Of mice and men',
            author: {
                first_name: 'John',
                last_name: 'Steinbeck'
            }
        },
        {
            title: 'War of the worlds',
            author: {
                first_name: 'H.G',
                last_name: 'Wells'
            }
        }
    ];

    var author = [
        {first_name: 'Jk', last_name: 'Rowling'},
        {first_name: 'S.A', last_name: 'Bodeen'},
        {first_name: 'Leo', last_name: 'Tolstoy'},
        {first_name: 'John', last_name: 'Steinbeck'},
        {first_name: 'H.G', last_name: 'Wells'}
    ];

    function loggingBooks(books){
        for (var x = 0; x < books.length; x++){
            console.log('Book # ' + (x + 1) + "\n" + 'Book title: ' + books[x].title + '\n' + "Book Author: " + books[x].author.first_name + ' ' + books[x].author.last_name);
        }
    }
    loggingBooks(books);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    var result=" ";
    for (var i = 0; i < books.length; i++) {
        result += (books[i] + ":" + author[i] + "");
    }
    return result;


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
