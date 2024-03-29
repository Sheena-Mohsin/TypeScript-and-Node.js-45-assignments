"use strict";
// Task 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
let userNames = ['Admin', 'Tweety', 'Tom', 'Bunny', 'Berg'];
if (userNames.length == 0) {
    console.log('We need to find some users!');
}
else {
    (userNames = []);
    console.log('All user names have been removed!');
}
;
// Task 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone
// has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also
// in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a 
// message that the person will need to enter a new username. If a username has not been used, print a message saying 
// that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let currentUsers = ['AliZa', 'SaBa', 'SaRah', 'MirAal', 'AiMan'];
let newUsers = ['Ayeza', 'Urwa', 'SaRah', 'MirAal', 'Shibra'];
newUsers.forEach(users => {
    let lowerCase = users.toLowerCase();
    if (currentUsers.map(currUsers => currUsers.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${users} is not available. Please write a different username! `);
    }
    else {
        console.log(`The username ${users} is available!`);
    }
});
// Task 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers
// end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should
// read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num of numbers) {
    let ordinalEnding;
    if (num == 1) {
        ordinalEnding = 'st';
    }
    else if (num == 2) {
        ordinalEnding = 'nd';
    }
    else if (num == 3) {
        ordinalEnding = 'rd';
    }
    else {
        ordinalEnding = 'th';
    }
    console.log(`${num}${ordinalEnding}`);
}
;
// Task 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then 
// use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name
// of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output 
// should consist of three or more lines about the kinds of pizza you like and then an additional sentence,
// such as I really love pizza!
let pizzas = ['Fajita', 'Mexican chilli', 'BBQ chicken'];
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza`);
}
console.log(`I really love pizza!`);
// Task 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of 
// these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program 
// to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of 
// your program stating what these animals have in common. You could print a sentence such as Any of these
// animals would make a great pet!
let animals = ['Dog', 'Cat', 'Rabbit'];
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log(`Any of these animals would make a great pet.`);
// Task 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should 
// be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the 
// message printed on it. Call the function.
function shirt(size, message) {
    console.log(`Creating a ${size} shirt with the message ${message}`);
}
shirt('Medium', 'Hello World');
// Task 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that 
// reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of 
// any size with a different message.
function makeShirt(size = 'Large', message = 'I love TypeScript ') {
    console.log(`Creating a ${size} shirt with the message ${message}`);
}
makeShirt();
makeShirt('Medium');
makeShirt('Small', 'I love Python');
// Task 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function
// should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default
// value. Call your function for three different cities, at least one of which is not in the default country.
function describeCities(city, country = 'Pakistan') {
    console.log(`${city} is in ${country}`);
}
describeCities('Karachi');
describeCities('Lahore');
describeCities('Tokyo', 'Japan');
// Task 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The
// function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city, country) {
    return `${city},${country}`;
}
console.log(cityCountry('Karachi', 'Pakistan'));
console.log(cityCountry('Istanbul', 'Turkey'));
console.log(cityCountry('london', 'England'));
// Task 40
// Album: Write a function called make_album() that builds a Object describing a music album. The function 
// should take in an artist name and an album title, and it should return a Object containing these two pieces 
// of information. Use the function to make three dictionaries representing different albums. Print each return 
// value to show that Objects are storing the album information correctly. Add an optional parameter to make_album()
// that allows you to store the number of tracks on an album. If the calling line includes a value for the number of
// tracks, add that value to the album’s Object. Make at least one new function call that includes the number of 
// tracks on an album.
function makeAlbum(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = makeAlbum('Artist 1', 'Title 1');
console.log(album1);
const album2 = makeAlbum('Artist 2', 'Title 2');
console.log(album2);
const album3 = makeAlbum('Artist 3', 'Title 3', 12);
console.log(album3);
// Task 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which
// prints the name of each magician in the array.
let magicians = ['Harry Potter', 'Harmione Ganger', 'Ron weasley', 'Albus Dumbledore'];
function showMagicians(magician) {
    magician.forEach(name => {
        console.log(name);
    });
}
showMagicians(magicians);
// Task 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians()
// to see that the list has actually been modified.
let magicians2 = ['Harry Potter', 'Harmione Ganger', 'Ron weasley', 'Albus Dumbledore'];
function makeGreat(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'The great ' + magicianArray[i];
    }
}
makeGreat(magicians2);
showMagicians(magicians2);
// Task 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of
// the array of magicians’ names. Because the original array will be unchanged, return the new array and store 
// it in a separate array. Call show_magicians() with each array to show that you have one array of the original names 
// and one array with the Great added to each magician’s name.
function copyArray(arr) {
    return [...arr];
}
const copyMagicianArray = copyArray(magicians);
makeGreat(copyMagicianArray);
console.log('This is my original array:');
showMagicians(magicians);
console.log('This is my modified copy of the array:');
showMagicians(copyMagicianArray);
//  Task 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should
// have one parameter that collects as many items as the function call provides, and it should print a summary
// of the sandwich that is being ordered. Call the function three times, using a different number of arguments
// each time
function sandWiches(items) {
    console.log('Making your sandwich with:');
    items.forEach(element => console.log("-" + element));
}
;
sandWiches(['Chicken', 'Cheese', 'Lettuse']);
sandWiches(['Mayonise', 'Egg']);
sandWiches(['BBQ', 'Ketchup', 'Cucumber']);
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const myCar = createCar('Toyota', 'Corolla', { color: 'white', year: '2024' });
console.log(myCar);
