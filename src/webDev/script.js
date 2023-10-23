// //INTO VARIABLES
// // A vairaible is a container that is used to store values.
// //Keywords Like {Let,const,var} variable = variable value

// //Number
// let a = 20;
// let b = 30;
// let c = a + b;
// console.log(c);

// //String
// const firstName = "Danny";
// console.log(firstName);

// //Boolean
// const isActive = true;
// console.log(isActive);

// //Objects
// const userData = {
//   name: "Dinakaran",
//   age: 23,
//   Role: "Developer",
//   bikes: ["BMW", "NS", "Duke", "V3", "R15"],
// };
// console.log(userData);

// //arrays
// const number = [20, 7, 9, 5, 70, 85, 2, 1];
// const bikes = ["BMW", "NS", "Duke", "V3", "R15"];
// const manyTypes = [
//   "Developer Danny",
//   24,
//   {
//     isActive: false,
//     isActive: true,
//   },
// ];
// console.log(number);
// console.log(bikes);
// console.log(manyTypes);

// // Date
// const date = new Date();
// console.log(date);

// // Difference between LET CONST VAR
// // Scope, Redeclaration,Reassignment and Initialization

// //SCOPE: Where the variable is available for use (Global function or Local and blocked scoped variable)

// // VAR is globally and function scoped.
// // LET and CONST is blocked scoped.

// //REDECLARATION: Recreating the variables.
// //VAR can be redeclared
// //LET and CONST cannot be redeclared.
// // const good = "good"; //Declaration
// // const good = "Morning"; //ReDeclaration

// //REASSIGNMENT: Assigning a new value to an already created variable.
// //Reassignment is possible for LET and VAR
// //Reassignment is  not possible for CONST

// // var name = "Dinakaran";
// // name = "Danny";
// // console.log(name);

// //INITIALIZATION: Means to assigin an initial value to a variable.
// //VAR and LET are initialized to undefined
// //CONST must be initialized.

// var global = "Good Morning";
// console.log(global);

// //Function call with no paramaters
// function name() {
//   var age = 20;
//   console.log(age);
// }
// name();

// //Function call with parameters
// function peopleName(x, y) {
//   console.log(x + y);
// }
// peopleName(2, 5);
// // console.log(age);

// //ARITHEMETIC OPERATORS:
// //+.-,*,/,**(exponent)--> Math.pow(),%(modulu),++(increment),--(decrement);

// let x = 5;
// let y = 10;
// var global = "Good Morning";
// let z = x * y;
// let m = x - global;
// console.log(m);
// console.log(z);

// //Write a function that checks if a value is divisible by 2

// const divisibleByTwo = (d) => {
//   if (d % 2 == 0) {
//     console.log(`${x % 2} Divisible by 2`);
//   } else {
//     console.log(`Not Divisible by 2`);
//   }
// };
// divisibleByTwo(89);
// // divisibleByTwo(10);

// //Increment and Decrement
// let num1 = 20;
// let num2 = 50;
// const increment = ++num1; //num=num+1;(Preincrement);
// const postIncrement = num1++; //num=num+1;(Preincrement);
// console.log(increment);
// console.log(postIncrement);

// //COMPARISON OPERATOR:
// /**
//  * ==(Equal in value),
//  * !=(Not equal in value)
//  * ===(Equal in value with type)
//  * !==(Not equal in value or type)
//  * > (Greater than),
//  * >= (Greater than or equal to)
//  * < (Less than)
//  * <= (Less than or Equal)
//  * ? (question mark or Ternary)
//  * (Condition) ? "Return true": "Return false"
//  */

// let age = 20;
// let currentAge = 20;
// console.log(typeof currentAge);
// console.log(age !== currentAge);
// let ageCalulate =
//   age < currentAge ? "Less" : age === currentAge ? "equal" : "bigger";
// console.log(ageCalulate);

// // console.log(age!=currentAge);

// //ASSIGNMENT OPERATOR
// /**
//  * =(simple assignment)
//  * +=( addition assignment , addds a value to a variable)
//  * -=( subtraction assignment , subs a value to a variable)
//  * *=( Multiplication assignment, )
//  * /=(division assignment)
//  * %=(remainder assignment)
//  * **=(exponential assignment)
//  *
//  */

// //LOGICAL OPERATORS:
// /**
//  * && (LOGICAL AND)
//  * || (LOGICAL OR)
//  * ! (LOGICAL NOT)
//  */
// // let sal = 60;
// // let currSal = 3;
// // let totalSal = sal > 10 && "let true";
// // console.log(sal < 10 && y> 1);
// // console.log(totalSal);

// let sal = 6;
// let currSal = 3;
// let totalSal = sal > 10 || currSal > 10;
// console.log(sal < 10 && y > 1);
// console.log(totalSal);
// console.log(!totalSal);

// //Solutions
// /*
// Swap variable values without reasign the value directly.
// INPUT : x=2, y=3;
// OUTPUT : x=2, y=3;
// */
// let varX = 2;
// let varY = 3;
// console.log(`${varX} ${varY}`);
// let varZ = varX;
// varX = varY;
// varY = varZ;
// console.log(`${varX} ${varY}`);

// // Input : difference (32) and difference (11)
// // Output : 38 and 2

// const differenceProgrma = (x) => {
//   if (x > 13) console.log(2 * (x - 13));
//   else {
//     console.log(13 - x);
//   }
// };
// differenceProgrma(32);
// differenceProgrma(11);

// function sumTriple(x, y) {
//   if (x == y) {
//     console.log(3 * (x + y));
//   } else {
//     console.log(x + y);
//   }
// }
// sumTriple(10, 20);
// sumTriple(10, 10);

// const positiveNegative = (x, y) => {
//   if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
//     console.log("true");
//   }
//   // else if  (x > 0 && y < 0){
//   //   console.log("true value");
//   // }
//   else {
//     console.log("false");
//   }
// };
// positiveNegative(2, -2);
// positiveNegative(2, 2);

// var userInput = 21;
// var hasParent = false;

// //Age verification
// var isAllowedAccess = userInput >= 68 && hasParent;
// if (isAllowedAccess) {
//   console.log("Access Granted");
// } else {
//   console.log("Access Denied");
// }

// const color = "blue";
// if (color === "blue" || color === "green") {
//   console.log("You like Blue Color or Green Color");
// } else {
//   console.log("You dont like Blue Color");
// }

// //String and important string Methods//
// /**
//  * str.length() property.
//  * str.toUpperCase()
//  * str.toLowerCase()
//  * str.replace(first match of X with Y)
//  * str.concat(str1,str2,....) Same as adding strings (+)
//  * str.split("seperator") converts strings to an array
//  * str.includes("value")
//  * str.startsWith("value")
//  * str.endsWith("value")
//  * str.slice(start, end)
//  */
// let userName = "Dinakaran is going to school";

// // length
// console.log(`Length of a string ${userName.length}`);

// //UpperCase
// console.log(`Upper Case ${userName.toUpperCase()}`);

// //LowerCase
// console.log(`Upper Case ${userName.toLowerCase()}`);

// //Replace
// console.log(`Replacing the words ${userName.replace("school", "work")}`);

// //Concat
// console.log(
//   `Concating the two strings like (+) adding two strings ${userName.concat(
//     " is ",
//     "going ",
//     "to ",
//     "office "
//   )}`
// );
// console.log(
//   `Concating the two strings like (+) adding two strings ${
//     userName + " dinakaran"
//   }`
// );

// //Split
// console.log(`Convert the string to an array ${userName.split()}`);
// console.log(userName.split());
// console.log(userName.split(" "));

// //Includes
// console.log(
//   `checking a particular string is there are not ${userName.includes(
//     "Dinakaran"
//   )}`
// );

// //startsWith
// console.log(`Starting strings is present ${userName.startsWith("Dinakaran")}`);

// //EndsWith
// console.log(`Ending strings is present ${userName.endsWith("Dinakaran")}`);

// // Slice in String
// console.log(`Slicing thee Strings ${userName.slice(0,10)}`);
// /**
//  * Template Literals
//  * use backticks(``)
//  * add quotes He's often called "Danny"
//  * string interpolation and variable substitution
//  * toString() number as a string
//  */

// let chcName = "Dinakaran";
// let ohcName = `"Danny"`;
// let chcNumber= 39;
// console.log(chcName, ohcName);
// console.log(typeof(chcName));
// console.log(` Type of the chcNumber ${typeof(chcNumber)} and ${chcNumber.toString()} convert to string ${typeof(chcNumber)}`);

// // const str = {
// //   name:"Dinakaran",
// //   length:5,
// //   split:function(){
// //     console.log("Somethings is splited");
// //   }
// // }
// // console.log(str.name);
// // console.log(str.length);
// // console.log(str.split);

// /**
//  * Number and Important Methods
//  * num.toFixed(numofDecimalPlaces)
//  * number(valueToConvertToNumber)
//  * num.toString()->converts num to string
//  * parseInt(val)-> returns whole number
//  */

// let price = 3.567;
// let price1 = "4.656";
// console.log(price.toFixed(2));
// console.log(Number(price1), price);
// console.log(
//   `Convert number to string ${typeof price}${price.toString()} ${typeof price}`
// );
// console.log(parseInt(price));

// /**
//  * Object properties
//  * Accessing by dot notation
//  * Accessing by bracket notation
//  */
// const mentor = {
//   firstName: "Dinakaran",
//   lastName: "Yogidasan",
//   agePerson: 23,
//   location: "Chennai",
// };
// mentor.firstName = "Dev"; // Update
// console.log(mentor.firstName); //Access the values

// console.log(mentor["firstName"]); // Bracket notation

// mentor.role = "Developer"; // Add object with new values

// console.log(mentor);

// // object Behaviors or action

// const person = {
//   firstName: "Dinakaran",
//   lastName: "Yogidasan",
//   agePerson: 23,
//   location: "Chennai",

//   fullName: function () {
//     return this.firstName + "" + this.lastName;
//   },
// };
// console.log(person.fullName());
// console.log(person.fullName());

// // For in Loop
// // for (Key in object){

// //}

// const personNew = {
//   firstName: "Dinakaran",
//   lastName: "Yogidasan",
//   agePerson: 23,
//   location: "Chennai",
// };

// for (key in personNew) {
//   // console.log(key);
//   console.log(key + "=>" + personNew[key]);
// }

// // Object destructuring
// // const {name,age}= person

// const personNew1 = {
//   firstName: "Dinakaran",
//   lastName: "Yogidasan",
//   agePerson: 23,
//   location: "Chennai",
//   role: {
//     roleName: "Developer",
//     tech: "Reactjs",
//   },
// };

// function Message(personNewObj) {
//   const {
//     agePerson,
//     location,
//     role: { roleName, tech },
//   } = personNewObj;
//   console.log(`${agePerson},${location}${roleName}${tech}`);
//   console.log(`My Name ${personNew1.firstName}`);
// }
// Message(personNew1);

// //Object Keys and values
// // Object.keys(obj)
// // Object.values(obj)

// const personNew2 = {
//   firstName: "Dinakaran",
//   lastName: "Yogidasan",
//   agePerson: 23,
//   location: "Chennai",
// };
// console.log(Object.keys(personNew2));
// console.log(Object.values(personNew2));

// //Example

// //del obj.properyName
// function del(obj, keyToDel) {
//   let newObj = {};
//   // for (key in obj ){
//   //   if(key!=keyToDel) newObj[key] = obj[key]

//   // }
//   // return (newObj);
//   delete obj.keyToDel;
//   return newObj;
// }

// const newPerson = {
//   firstName: "Dinakaran",
//   lastName: "Yogidasan",
//   agePerson: 23,
//   location: "Chennai",
// };
// del(newPerson, "agePerson");
// console.log(del(newPerson, "agePerson"));
// console.log(del(newPerson));

// //Arrays
// const colors = ["red", "blue", "green"];
// console.log(colors);
// console.log(colors[0]);
// colors[0] = "yellow";
// console.log(colors[0]);
// console.log(colors);
// console.log(colors[1]);
// console.log(colors[2]);

// // Key Array methods
// // array.length property
// // array.push(el)
// // array.pop()
// // array.shift()
// // array.unshift(el)
// // Array.isArray(arr)

// const newBikes = ["BMW", "R15", "NS200", "MT15", "Ninja"];

// // array.length property
// console.log(newBikes.length);

// //Access first and lastdata in array
// console.log(newBikes[newBikes.length - 1]);

// // array.push(el)
// newBikes.push("KTM", "DUKE");
// console.log(newBikes);

// // array.pop()
// newBikes.pop();
// console.log(newBikes);

// // array.unshift(el)
// newBikes.unshift("Duke 300");
// console.log(newBikes);

// // array.shift(el)
// newBikes.shift("Duke 300");
// console.log(newBikes);

// const newBike = ["BMW", "R15", "NS200", "MT15", "Ninja"];
// const isAlive = true;
// const danny = {
//   name: "DevDanny",
//   age: 23,
// };
// const go = "Going on my way";
// consFole.log(Array.isArray(newBike));

// //Looping

// //For Loop
// for (let index = 0; index <= newBike.length; index++) {
//   console.log(index);
// }

// //ForEach
// newBike.forEach((element) => {
//   console.log(element);
// });

// // Array destructuring
// const newBiker = ["BMW", "R15", "NS200", "MT15", "Ninja"];
// // Array destructure
// // const [bike1,bike2] = newBiker
// // console.log(bike1,bike2);
// const [, , bike2] = newBiker;
// console.log(bike2);
// const calc = (a, b) => {
//   const add = a + b;
//   const sub = a - b;
//   const div = a / b;
//   const mul = a * b;
//   return [add, sub, div, mul];
// };
// console.log(calc(2, 3));

// const [, sub, div] = calc(2, 3);
// console.log(sub, div);

// //Key Array methods
// // -arr1.concat(arr2,arr3,...arrN) Adding arrays
// // -arr.join(seperator) //Converts to string and join by ("=>")
// // arr.includes(el,start) //Check the particular text is peresent or not and check by name and number(indexNumber)
// // arr.slice(start,end) remove the element in the arrays by indexnumber
// // arr.sort() Sort by alphabetically order
// // arr.reverse() Sort by desending order

// const fruits = ["Apple", "Orange", "Watermelon", "Banana"];
// const fruits2 = ["Banana"];
// const fruits3 = ["Greenapple", "Pineapple"];
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function sorting(a,b) {
//   return a-b
//   console.log(sorting);
// }

// )
// const allFruits = fruits.concat(fruits2, fruits3);
// console.log(allFruits);
// console.log(fruits.join("=>"));
// console.log(fruits.includes("Apple"));
// console.log(fruits3.slice(1));
// console.log(fruits.sort());
// console.log(fruits.reverse());

// // Mapping in Arrays
// // arr.map(function(el,index,arr){
// // Code Here
// // })

// const numberInteger = [201, 432, 21, 531, 254, 132];
// // console.log(numberInteger);
// // numberInteger.map(function (el, i, arr) {
// //   console.log(el, i, arr);
// // });
// // const newArr = numberInteger.map(multiply);
// // function multiply (num){
// //   return 2 * num;
// // };
// // multiply();
// // console.log(newArr);

// const Devs = [
//   { firstName: "King", lastName: "Kong" },
//   { firstName: "Remo", lastName: "Rio" },
//   { firstName: "Danny", lastName: "Don" },
// ];
// const fullNames = Devs.map((el) => el.firstName + "" + el.lastName);
// console.log(fullNames);

// // Array Filter Method
// // arr.filter(function(el,i,arr){
// // Code here
// // })

// const numberArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const greaterFive = numberArrays.filter((el) => el >= 5);
// console.log(greaterFive);
// const names = ["Danny", "Don", "Killer", "DarkNight"];
// const filterName = names.filter((el) => el.includes("D"));
// console.log(filterName);

// // Array.find
// // arr.find(function(el,i,arr){
// // Code Here
// // })

// const decimals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const findNumbers = decimals.find((decimal) => decimal > 5);
// console.log(findNumbers);
// const findNames = Devs.find((Dev) => Dev.firstName === "Danny");
// console.log(findNames);

// // Array reducer
// // arr.reducer (function(total,curvalue,curIndex,arr){
// // },initialValue);

// const numberReducer = [175, 50, 25];
// const aReducer = numberReducer.reduce((total, curValue, curIndex, arr) => {
//   console.log(total, curValue, curIndex, arr);
// });
// const bReducer = numberReducer.reduce((total, curValue) => {
//   console.log(total + "-->" + curValue);
//   return total - curValue;
// });
// console.log(bReducer);

// const newDate = new Date()
// console.log(newDate);

// const addFunction = (a,b) => a*b;
// addFunction(2,6)
// console.log(addFunction(2,6));

//ARRAY METHODS:
// const arr1 = [1, 2, 4, 5];
// arr1.push(40);
// console.log(arr1);
// arr1.pop();
// console.log(arr1);

// const threeArr = [1, 5, 8];
// const oneDown = threeArr.pop();
// console.log(oneDown);
// console.log(threeArr);

// const nextLine = (arr, item) => {
//   arr.push(item);
//   const result = arr.shift();
//   console.log(arr.push(item));
//   console.log(result);

//   return result;
// };

// let testArr = [1, 2, 3, 4, 5];

// // Display code
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// function logical(num) {
//   if (num > 5 && num > 10) {
//     return console.log("YES");
//   } else {
//     return console.log("NO");
//   }
// }
// logical(20);

// function myName() {
//     console.log("Hello");
//     return "World";
//     console.log("bye Bye");
// }
// myName();

// NEW JAVASCRIPT TECH:

// function prime() {
//   for (let i = 20; i <= 50; i++) {
//     console.log(i);
//   }
// }
// prime();

// let i = 10;
// function ifCondition() {
//   if (i !== 10) {
//     console.log("Value is equal to 10");
//   } else {
//     console.log("Not equal to 10");
//   }
// }
// ifCondition();

// function randomNumber() {
//   for (i = 1; i <= 100; i++) {
//     console.log(i);
//   }
// }

for (let i = 0; i <= 10; i--) {
  console.log(i);
}
