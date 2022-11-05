// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Golf 2022"
console.log(cohort.split(""))

// a) Your answer: An array with each letter as it's own string in the array e.g. ["G", "o", "l", "f", " "] etc
// b) Verify and explain:The answer was correct. .split is a built in method which can be used on strings, and converts them to arrays. This method takes an argument which tells it how to split up the string, e.g. cohort.split(" ") would return ["Golf", "2022"]. If no argment is input, it will return the entire string as one item in the array, eg cohort.split() would return ["Golf 2022"]

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))



// a) Your answer: undefined
// b) Verify and explain: The answer was correct; because the function is missing a return, it does not have a way to output a value. When we see undefined in our console, it's a good clue to double check if we have included a return in our function! One thing that is interesting to note, that I tested and researched (see below), is that the word return and the curly braces are not necessary if there is only one line of code within the function. However, then you MUST remove both the curly braces and the word return, and move it on to the same line for the code to work.

const greeter1 = (name) => `Hello, ${name}!`
console.log("removed the word return and curlies: ", greeter1("LEARN Student"))


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: The answer was correct. Here we see an arrow function (as noted in the previous question) in which the word return is not explicitly written because the code is on one line. The .map method is applied to the array. It takes an argument of a function and maps over the array by iterating through each value and multiplying it by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The answer was correct. .filter is a method which takes an argument of a function, the output of which is a Boolean. As it iterates through the array, it creates a new array including only the values which, when inputted to the conditional statement, returned a Boolean of true. In this code, the consitional statement provided used a modulo operation as well as a bang operator, indicating that the remainder of the value divided by 2 does not equate to 0, in other words, it is an odd number.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: The answer was correct. The object myCodingSkills contains a number of key:value pairs, including several whose value is an array of strings. Using dot notation, we can access the nested value by providing the key, as well as the index of the desired item in the array.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: {name: "George", cohort: undefined, year: undefined}
// b) Verify and explain: Actual answer: Learn { student: 'George', cohort: 'Foxtrot', year: 2022 } 
// I didn't look closely at the class creating the blueprint, and missed that there were several values hardcoded into the class, rather than setting a dynamic variable to be changed. Therefore, I thought when no cohort or year was put into the argument, it would return undefined, not realizing it had be pre-defined in the class. It was also interesting to see that this.student was assigned the parameter name, since most of the examples when I was learning had the key match the parameter for the value (e.g. this.student = student), so I missed that it would log student: George rather than name: George
// Lastly, the console logged the name of the class before the key:value pairs of the object (Learn:)