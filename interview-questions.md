# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: When declaring a function, the parameter is the placeholder that indicates what type of information will be passed to the function when it is invoked. You can write whatever you want in the parameter but it is helpful for it to be somewhat descriptive, for example, if you are writing a function that is expecting an array of numbers, it may be helpful to name the parameter something like numArray. There can also be multiple parameters set up when declaring the function. Within the function, you may use the parameter to convey what logic to perform on it to produce the desired output. The argument is the value which is actually passed to the function when invoking it. The arguments passed in will correlate with the order of the parameters when the function was initially declared. Every time a function is invoked, it can have different arguments, however the parameters never change.
Example: a simple subtraction function may take two parameters, both of which should ideally be numbers. They may be named num1 and num2 as descrptive indicators for the placeholders. When the function is called, it can take arguments of 4 and 3, 12 and 5, etc. The first argyment will always fill in the place of the first parameter, and so on in whatever order they are entered.
const subtract = (num1, num2) => num1 - num2
                   ^ parameters
console.log(subtract(5,4))
                       ^ arguments

Researched answer: An interesting thing to note is that it is somewhat common to use these terms interchangeably when speaking informally. However, put simply, parameter is used when providing the definition of the function, and arguments are used when calling the function. An interesting thing I learned while researching is that different languages handle datatypes of parameters differently. In some strongly typed languages, the datatype of the parameter must be provided when defining the function. Some other languages will try to use context in the code of the function to determine the data type. Javascript is a language which attempts to resolve incompatible data types via type coercion, which could happen easily since parameters are not set up to specify a certain data type, and any argument can be passed. For example, for the function above, I could call console.log(subtract("5", 4)) and it will still run despite entering a string as an argument, when the parameter is called num1

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: .map takes a function as a parameter. This function includes some value, which indicates the value of the current element in the array, an arrow function, and a return, which is some logic to be performed on the value. At this time, I only have experience using all of these parameters, so I haven't had a use case to see if any are not required, nor am I aware of any additional parameters besides the function I just described. Logically, I would say that the value parameter within the function parameter, may not be needed, espcially if mapping over the array with something unrelated to the values in it. For example, althoguh I would need to test this to confirm, I imagine that if I had an array of numbers, and I wanted to produce an array of identical strings, it should work to code something like sampleArray = [1, 2, 3].map(() => "test") would produce something like ["test", "test", "test"]. 

Researched answer: First of all, I am happy to report that my sample code above did work and produced the hypothesized outcome!
Here is what I learned. The parameters of a .map function include the following:
-callbackFn() (required: runs for each element in the array)
-value/element (required: the current element being worked on as the method iterates through; I referred to it above as a value)
-index (optional: the index of the current element)
-array (optional: the array that the .map is appended to)
-thisArg (optional: a value to be passed to the function that serves as its "this" value, i.e. it is defined and referred to within the function)


3. What is the difference between map and filter?

Your answer: Map and filter both iterate over an array and return an array. However, map will always return an array of the same length, as it performs logic on each element in the array, whereas filter typically will return a smaller array, as it uses logic to filter out certain elements, and only return that which equates as true in the conditional provided.

Researched answer: An important difference to note is that filter will always return whatever values make it through the filter as they originally were, unchanged. Typically map will perform some changes to the elements - it maps "over" the original array and the new array will often have different elements in it, having gone some transformation from the original.

4. What is iteration?

Your answer: Iteration is the process of repeating some algorithm repeatedly until some condition is met. It is seen, for example, in a for loop, as well as in the higher order functions .map(), .filter(), and .forEach()

Researched answer: In my original answer, I described iteration as being used in for loops. I have since learned that iteration and looping are similar, related, yet distinct concepts, although they are often used interchangeably. Both looping and iteration will perform a certain code repeatedly, however iteration refers most commonly to when that process is done just once for each item in an an array or string, until it reaches the end, and looping refers to doing that process until a certain condition is met. In a JavaScript for loop, this is defined within the second statement of the for loop. i.e., "continue looping until this condition is met." Iteration typically has a default ending point which does not need to be defined in the code (i.e. the end of the array). Running through the code once could be described as one execution of a loop, or one iteration, so it's easy to see how these terms are close to synonymous.



5. What is the difference between a class and an object?

Your answer: Objects are collections of key:value pairs which are stored inside curly braces. Class is a function which is used to create a template, or blueprint, for making objects. Classes can also includes methods, which are functions contained within and belonging to that class. For example, if I needed to create many objects such as products in an online shop, I could first create a class called Product which would use the method constructor to take parameters of the defining properties all of the products would have, such as brand, type, price, category, etc. Then, to create the objects, I could use the keyword class to quickly and easily set up many different objects.

class Product = {
    constructor(brand, type, price, category){
        this.brand = brand
        this.type = type
        this.price = price
        this.category = category
    }
    describe() = {return `In the ${this.category} section, we have a ${this.brand} {this.type} for the low price of $${this.price}!`
}
let keurig = new Product("Keurig", "coffee maker", "65", "Applicances")
let hottub = new Product("Whirlpool", "jacuzzi", "1500", "Outdoor")

Researched answer: When learning more about classes, I learned about the idea of hoisting. This refers to what order JS reads the code and performs it. While some functions can be invoked before they are actually defined, classes do not fall into this category. First, a class must be declared, and then, below, they can be used to construct objects.
I also learned about class expressions which are a way of defining classes. For example, if there are going to be several similar but distinct classes, it may be helpful to group them within a class expression. The syntax would be:
Instrument = class Guitar {
    constructor(brand, type){
        this.brand = brand
        this.type = type
    }

}

6. STRETCH: What is hoisting in JavaScript?

Your answer: Wow I did not read ahead in the questions or I might have written something else in my previous question!
So now I have read about it a bit. I believe hoisting refers to accessing some code (such as functions) earlier in the code than when it is declared (i.e. closer to the top of the page), for i.e, calling a variable before you actually declare it in your code.

Researched answer: Hoisting is relevant to several data types in Javascript, incuding functions and classes. It also depends on the keyword being used to call a variable, var, let, or const.
var - when declaring with var, you can refer to it before calling it, anywhere within its scope, but it will return undefined. Therefore when using var, variables should still be declared before using them.
const and let declarations are considered non-hoisted, and will return a reference error if called before they are initialized.

Functions can be hoisted if they are function declarations. however, function expressions are not hoisted. One difference between the two is that a function declaration uses the word "function" when declaring, whereas function expressions typically use the keyword const.

Classes are not hoisted; you cannot use them before they are declared.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: A simple way of communicating to a developer what the end user should see and experience when using a certain element. Descriptions will be brief and use laymans terms, with just a sentence or two per element. For example, "The user will see a button that says "Log in" in the top right hand corner of the screen." Development teams that take a user-stories approach allow the development team to focus on the basic building blocks before diving into details that may change later. 

2. Spread operator: The spread operator is a shorthand that allows the combination of arrays or objects. the spread opertor is three dots in front of the variable name, (e.g. ...someArray), which represents a copy of the entire contents of that variable. When combining objects, it will add any new properties, but if any properties are the same, they will be overwritten by the last key:value pair given.

3. React: React is a JavaScript library that is used for building front-end user-interfaces. React is component-based which means that the final app is primarily made up of small components. It looks for changes to each component and refreshes only those on the page, rather than needing to update the entire page.

4. React props: Props in react are essentially parameters that allow you to pass in data when builing a component. One way in which they are different is that props can be sent to a component using JSX, which is essentially html syntax, as an attribute.

5. DOM events:
Events in the DOM are things that the program is "listening" for in order to check for changes and refresh the necessary components. Some examples are mouse events such as mouseup, and click, and keyboard events, such as keypress. These type of signals alert the program that something is happening. They can be triggered by either the user, or the browser itself.