// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 };
// Expected output: "15 is divisible by three"
const object2 = { number: 0 };
// Expected output: "0 is divisible by three"
const object3 = { number: -7 };
// Expected output: "-7 is not divisible by three"

describe("checkDiv3", () => {
  it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
    expect(checkDiv3(object1)).toEqual("15 is divisible by three");
    expect(checkDiv3(object2)).toEqual("0 is divisible by three");
    expect(checkDiv3(object3)).toEqual("-7 is not divisible by three");
  });
});

//  ReferenceError: checkDiv3 is not defined

// b) Create the function that makes the test pass.
// Declare a function named checkDiv3 which has a parameter of object
// Within the function, write an if statement with the following logic:
// if the value stored at the object's key, number, is divisible by 3 (using modulo operator) then return a statement using string interpolation to insert the number and the words "is divisible by three"
// else if that value is not divisible by 3 (using modulo operator and the bang operator) then return a statement using string interpolation to insert the number and the words "is not divisible by three"
// not listed in the prompt, but it could be a good idea to create a catch-all else statement to catch edge cases such as the object's number value being written as a string.
//  else return a string that says "something has gone wrong with your input"

const checkDiv3 = (object) => {
  if (object.number % 3 === 0) {
    return `${object.number} is divisible by three`;
  } else if (object.number % 3 !== 0) {
    return `${object.number} is not divisible by three`;
  } else {
    return "something has gone wrong with your input";
  }
};

//Expected: "15 is divisible by three"
//Received: "15 is divisible by three."

// I got the above error which notified me that I put a period into my function, that I had not put into my test. I removed it from the function and ran the test again.

//Test Suites: 1 passed, 1 total
//Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("capitalizer", () => {
  it("takes in an array of words and returns an array with all the words capitalized", () => {
    expect(capitalizer(randomNouns1)).toEqual([
      "Streetlamp",
      "Potato",
      "Teeth",
      "Conclusion",
      "Nephew",
    ]);
    expect(capitalizer(randomNouns2)).toEqual([
      "Temperature",
      "Database",
      "Chopsticks",
      "Mango",
    ]);
  });
});

// ReferenceError: capitalizer is not defined

// b) Create the function that makes the test pass.
// Declare a function named capitalizer that has one parameter, array
// Since we are taking in an array and returning an array of the same size, use the higher order function .map
// .map will be appended onto the original array, and will have a parameter of string, since the elements in the array we are iterating through are going to be strings
// within the .map function, we will use concatenation to return the character at the zero index of the string, uppercased via the .toUpperCase method, then the rest of the string, with the first character removed via the .slice method.

const capitalizer = (array) =>
  array.map((string) => string[0].toUpperCase() + string.slice(1));
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
describe("firstVowel", () => {
  it("takes in a string and logs the index of the first vowel.", () => {
    expect(firstVowel(vowelTester1)).toEqual(1);
    expect(firstVowel(vowelTester2)).toEqual(0);
    expect(firstVowel(vowelTester3)).toEqual(2);
  });
});

const vowelTester1 = "learn";
// Expected output: 1
const vowelTester2 = "academy";
// Expected output: 0
const vowelTester3 = "challenges";
// Expected output: 2

// ReferenceError: firstVowel is not defined

// b) Create the function that makes the test pass.
// Declare a function name firstVowel that has a parameter of a string.
// Use a for loop to iterate through the string, starting at an index of 0, stopping at the index 1 less than the length of the string, and increasing by 1 each time.
// At each iteration, run an if statement:
//If the value at the current index is equal to any vowel, return the current index

/*
const firstVowel = (string) => {
    let placeholder = "no vowels"
    for (let i=0; i< string.length; i++){
        if(string[i] === "a" || "e" || "i" || "o" || "u"){
            placeholder = i
            console.log(i)
        } 
        return placeholder
    }
}
 This is not working for me! I keep getting this error:
   firstVowel
    ✕ takes in a string and logs the index of the first vowel. (51 ms)

  ● firstVowel › takes in a string and logs the index of the first vowel.

    expect(received).toEqual(expected) // deep equality

    Expected: 1
    Received: 0

    In my mind, the logic should only replace the placeholder with 0 if the letter at index 0 is one of the strings listed in the if statement. But it seems to be updating the value of placeholder even though it is a consonant! I'm going to try another way.

 New idea! this time the function will create variables for the index of the first occurence of every vowel. Then I will place those indexes into an array. I will filter the array to remove -1, since that indicates the vowel was not present. from the filtered array, I will sort it from smallest to largest, and from that array, get the value at the index of zero, which will be the smallest number and hence the first vowel from the string.
*/

const firstVowel = (string) => {
  let a = string.indexOf("a");
  let e = string.indexOf("e");
  let i = string.indexOf("i");
  let o = string.indexOf("o");
  let u = string.indexOf("u");
  let compareIndexes = [a, e, i, o, u];
  let filtered = compareIndexes.filter((value) => value !== -1);
  let sorted = filtered.sort((a, b) => a - b);
  return sorted[0];
};

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

// IT WORKS! It might not be the most concise method, but I'm glad it worked!
