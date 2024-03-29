// Task 2
 // Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple,
 // such as, “Hello Eric, would you like to learn some Python today?”

let personName = "Sheena";
console.log (`Hello ${personName},would you like to learn some python today?`);

// Task 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase

let myName = "Sheena"
console.log (myName. toLowerCase());    // printing name into lowercase
console.log (myName. toUpperCase());    // printing name into uppercase
console.log (myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase()); // printing name into titlecase

// Task 4
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:

console.log ('Albert Einstein once said, " A person who never made a mistake never tried anything new."');

// Task 5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called 
//famous_person. Then compose your message and store it in a new variable called message. Print your
// message

let famousPerson = "Albert Einstein";
let message = `${famousPerson} once said, " A person who never made a mistake never tried anything new."`;
console.log(message) ;  
