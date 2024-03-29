"use strict";
// Task 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end
// of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name
// once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName = "\n \t Sheena Mohsin \n \t";
console.log(personName);
console.log(personName.trim());
// Task 7 and 8
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in
// the number 8. Be sure to enclose your operations in print statements to see the results
// You should create four lines that look like this:console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3); //addition
console.log(4 * 2); //multiplication
console.log(12 - 4); //subtraction
console.log(16 / 2); //division
// Task 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message
// that reveals your favorite number. Print that message.
let favouriteNumber = 6;
console.log(`My favourite number is ${favouriteNumber}`);
// Task 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If 
// you don’t have anything specific to write because your programs are too simple at this point, just add
// your name and the current date at the top of each program file. Then write one sentence describing what
// the program does.
// sheena mohsin, 15-03-2024
// This program prints a message
console.log("I am learning coding");
//  Task 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by
// accessing each element in the list, one at a time.
let names = ["Aliza", "Saba", "Anusha", "Wania"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Task 12 
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s 
// name, print a message to them. The text of each message should be the same, but each message should be
// personalized with the person’s name.
let members = ["Aliza", "Saba", "Anusha", "Wania"];
let message = " hope you are doing great.";
for (let i = 0; i < members.length; i++)
    console.log(members[i] + message);
// Task 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make
// a list that stores several examples. Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”
let favouriteCars = ["Hilux", "LandCruiser", "Civic", "Prius"];
for (let i = 0; i < favouriteCars.length; i++) {
    console.log(" I would like to own " + favouriteCars[i]);
}
;
// Task 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a 
// list that includes at least three people you’d like to invite to dinner. Then use your list to print a
// message to each person, inviting them to dinner.
let guests = ["Wania", "Saba", "Aliza"];
guests.forEach(guests => {
    console.log(`Dear ${guests}, would you like to join me for dinner? `);
});
// Task 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send
// out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating
// the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person
// you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
let unableGuest = "Wania";
let newGuest = "Faizan";
guests[0] = newGuest;
guests.forEach(guests => {
    console.log(`Dear ${guests}, would you like to join me for dinner? `);
});
console.log(`${unableGuest} is not coming for dinner!`);
// Task 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more
// guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing
// people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your
// list.
// • Print a new set of invitation messages, one for each person in your list.
let moreGuests = ["Faizan", "Saba", "Aliza"];
console.log("Good news! I found a bigger dinner table!");
moreGuests.unshift("Mohsin");
moreGuests.splice(2, 0, "Sheena");
moreGuests.push("Nabeel");
moreGuests.forEach(moreGuests => {
    console.log(`Dear ${moreGuests} would you like to join me for dinner?`);
});
// Task 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
// invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you 
// pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
// invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you
// actually have an empty list at the end of your program.
console.log("Unfortunately!, i can invite only two persons for dinner.");
while (moreGuests.length > 2) {
    let removeGuests = moreGuests.pop();
    console.log(`Sorry ${removeGuests} you are not inivited for dinner.`);
}
;
moreGuests.forEach(moreGuests => {
    console.log(` Dear ${moreGuests} you are still inivited for dinner!`);
});
moreGuests.splice(0, 2);
console.log(moreGuests);
// Task 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let places = ["Turkey", "Maldives", "Saudia Arabia", "Malaysia", "Australia"];
console.log(places); //original order
console.log([...places].sort()); //alphabetical order in array copy
console.log(places); //orignal array
console.log([...places].sort().reverse()); //reverse alphabetical order in array copy
console.log(places); //orignal order
console.log(places.reverse()); //reverse order in original array
console.log(places.reverse()); //again reverse order in original array
console.log(places.sort()); //sort array in orignal array
console.log(places.sort().reverse()); // sort in original array
// Task 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating
// the number of people you are inviting to dinner.
console.log(`Total number of Guests are: ${moreGuests.length}`);
// Task 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers,
// countries, cities, languages, or anything else you’d like. Write a program that creates a list containing
// these items.
let items = ['Karachi', 'Food', 'Shopping', 'Urdu'];
items.forEach(items => {
    console.log('I love', items);
});
;
let user = {
    name: 'Sheena Mohsin',
    age: 17,
    nationality: 'Pakistan',
    student: true,
};
console.log(user);
// Task 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to
// make one happen. Change an index in one of your programs to produce an index error. Make sure you 
// correct the error before closing the program.
let siblings = ['Faizan', 'Nabeel', 'Aliza'];
console.log(siblings[4]);
console.log(siblings);
// Task 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your
// prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = 'Subaru';
// Test 1
console.log("Is car == 'Subaru'? I predict true. ");
console.log(car == 'Subaru');
// Test 2
console.log("Is car === 'Subaru'? I predict true. ");
console.log(car === 'Subaru');
// Test 3
console.log("Is car != 'Honda'? I predict true. ");
console.log(car != 'Honda');
// Test 4
console.log("Is car.UpperCase == 'SUBARU'? I predict true. ");
console.log(car.toUpperCase() == 'SUBARU');
// Test 5
console.log("Is car.LowerCase == 'subaru'? I predict true. ");
console.log(car.toLowerCase() == 'subaru');
// Test 6
console.log("Is car == 'Honda'? I predict false. ");
console.log(car == 'Honda');
// Test 7
console.log("Is car != 'Subaru'? I predict false. ");
console.log(car != 'Subaru');
// Test 8
console.log("Is car == 'Grande'? I predict false. ");
console.log(car == 'Grande');
// Test 9
console.log("Is car == 'SUBARU'? I predict false. ");
console.log(car == 'SUBARU');
// Test 10
console.log("Is car == 'Train'? I predict false. ");
console.log(car == 'Train');
// Task 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to 
// try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal
// to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Equality and InEquality test with strings
console.log("Equality test: ", "Apple" === "Apple");
console.log("InEquality test: ", "car" != "Bus");
// Lowercase function test
console.log("Lowercase function test: ", "HELLO".toLowerCase() === "hello");
// Numerical test involving Equality and InEquality
console.log("Numerical test with Equality: ", 17 === 17);
console.log("Numerical test with Inequality: ", 6 != 1);
// Greater than and less than test
console.log("Greater than test: ", 10 > 2);
console.log("Less than test: ", 6 < 6);
//Greater than and less than or equal to test
console.log("Greater than or equal to test: ", 11 >= 9);
console.log("less than or equal to test: ", 8 <= 8);
// "And" and "or" operators test
console.log("And operator test: ", 5 === 5 && "Train" === "Train");
console.log("Or operator test: ", 4 > 2 || 10 < 11);
// Test whether an item is in array
let fruits = ['Orange', 'Straw Berry', 'Mango'];
console.log("Item in array test: ", fruits.includes("Mango"));
// Test whether an item is not in array
console.log("Testing item is not in array: ", fruits.includes("Apple"));
// Task 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color
// and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the
// player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that
// fails will have no output.)
let aleinColor1 = 'red';
if (aleinColor1 == 'red') {
    console.log('Player just earned 5 points!');
}
;
aleinColor1 = 'green';
if (aleinColor1 == 'red') {
    console.log('Player just earned 5 points!');
}
;
// Task 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting
// the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let aleinColor2 = 'green';
if (aleinColor2 == 'green') {
    console.log('Player just earned 5 points for shooting the alein!');
}
else {
    console.log('Player just earned 10 points ');
}
;
// Task 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let aleinColor3 = 'yellow';
if (aleinColor3 == 'yellow') {
    console.log('Player just earned 10 points');
}
else if (aleinColor3 == 'green') {
    console.log('Player just earned 5 points ');
}
else if (aleinColor3 == 'red') {
    console.log('Player just earned 15 points ');
}
;
// Task 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the
// variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let age = 17;
if (age < 2) {
    console.log('Person is a Baby!');
}
else if (age >= 2 && age < 4) {
    console.log('Person is a Toddler!');
}
else if (age >= 4 && age < 13) {
    console.log('Person is a Kid!');
}
else if (age >= 13 && age < 20) {
    console.log('Person is a Teenager!');
}
else if (age >= 20 && age < 65) {
    console.log('Person is an Adult!');
}
else {
    console.log('Person is an Elder!');
}
;
// Task 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if
// statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If
// the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favouriteFruit = ['Mango', 'Orange', 'Banana'];
if (favouriteFruit.includes('Mango')) {
    console.log('I really like Mango');
}
if (favouriteFruit.includes('Orange')) {
    console.log('I really like Orange');
}
if (favouriteFruit.includes('Banana')) {
    console.log('I really like Banana');
}
if (favouriteFruit.includes('Pear')) {
    console.log('I really like Pear');
}
if (favouriteFruit.includes('Cherry')) {
    console.log('I really like Cherry');
}
;
// Task 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are
// writing code that will print a greeting to each user after they log in to a website. Loop through the
// array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a
// status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let userNames = ['Admin', 'Tweety', 'Tom', 'Bunny', 'Berg'];
userNames.forEach(userName => {
    if (userName == 'Admin') {
        console.log('Hello Admin, would you like to see a report?');
    }
    else {
        console.log(`Hello ${userName}, thankyou for logging in again!`);
    }
});
