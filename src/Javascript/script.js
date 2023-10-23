// let currentDate = new Date();
// /**
//  * Creates a new Date.
//  * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
//  * @param monthIndex The month as a number between 0 and 11 (January to December).
//  * @param date The date as a number between 1 and 31.
//  * @param hours Must be supplied if minutes is supplied. A number from 0 to 23 (midnight to 11pm) that specifies the hour.
//  * @param minutes Must be supplied if seconds is supplied. A number from 0 to 59 that specifies the minutes.
//  * @param seconds Must be supplied if milliseconds is supplied. A number from 0 to 59 that specifies the seconds.
//  * @param ms A number from 0 to 999 that specifies the milliseconds.
//  */
// // new(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date;
// // (): string;
// console.log(currentDate);
// console.log(Date.length);

// function tria(l, b, h) {
//   const area = (l * b * h) / 2;
//   //   return area;
//   console.log(area);
// }
// tria(5, 6, 7);

// // const num = Math.ceil(Math.random() * 10);
// // console.log(num);
// // const guess = prompt("Guess the number");
// // if (guess === num) {
// //   console.log("You are good");
// // } else {
// //   console.log("Not Bad");
// // }

// function factorial(n) {
//   if (n == 0) {
//     return 1;
//   } else {
//     return factorial(n - 1) * n;
//   }
// }

// console.log(factorial(8));

// // let number = 0;
// // while (number <= 12) {
// //   console.log(number);
// //   number += 2;
// // }

// let a = 10;
// let b = 20;

// console.log(a || b);

// let result = 1;
// let counter = 0;
// while (counter <= 10) {
//   result *= 2;
//   counter += 1;
// }
// console.log(result);
// console.log(counter);

// console.log(`https://restcountries.com/v3.1/all`);

// if (false != false) {
//   console.log("That make some sense");
// } else {
//   console.log("No Suprise there.");
// }

// // for (let index = 2; index <= 10; index = index + 2) {
// //   console.log(index);
// // }
// for (let counter = 0; counter < 10; counter = counter + 1) {}
// console.log(counter);
// let data = "Dinakaran";
// console.log(data.length);

// function mul(x) {
//   return x * x;
// }
// console.log(mul(20));

// function power(base,exponent) {
//   let result = 1;
//   for(let count = 0 ; count<exponent; count++){
//     result*=base;
//   }
//   return result
// }

// console.log(power(2,10));
// console.log(power(4));

// var arr = [12,4,2,28,"Danny"];
// arr[8] = "Dev Danny";
// console.log(arr);
// console.log(arr.length);

// // Object is a key value pair :
// // Key:value

// // var data = {
// //   name: value
// // }

// function multiplier(factor) {
//   return (number) => number * factor;
// }
// let twice = multiplier(2);
// console.log(twice(5));

// let arr = ["234", "45", "467"];
// let num = parseInt(arr[0]);
// console.log(arr);
// console.log(num);

// function oddEven(n) {
//   if (n % 2 == 0) {
//     console.log("even" + n);
//   } else {
//     console.log("odd" + n);
//   }
// }
// console.log(oddEven(2));

// let mark = 37;
// if (mark >= 35) {
//   console.log("pass");
// } else {
//   console.log("fail");
// }
// const number = 10;
// for (let i = 1; i <= 10; i++) {
//   const result = i * number;
//   console.log(result);
// }

// let res = "Dinakaran";
// let out = res.split("");

// const number = 10;
// for (let i = 1; i <= 10; i++) {
//   const result = i * number;
//   console.log(result);
// }

// let res = "1234567890";
// let out = res.split("");
// let numArr = out.map(Number);
// console.log(out);
// console.log(numArr);

// let arrNew [ 121314151617181920 ];
// console.log(arrNew);
// for (let index = 0; index < arrNew.length; index++) {
//   if (arrNew[index] % 2 == 0) {
//     console.log(`Even Number ${arrNew[index]}`);
//   } else {
//     console.log(`Odd Number ${arrNew}`);
//   }
// }
// let x = "-50.6";
// console.log(typeof x);
// console.log(x);
// console.log(Number(x));
// console.log(typeof x);
// console.log(typeof []);
// console.log(typeof null);
// var text = "The ' character is called an apostrophe.";
// console.log(text);

// TYPE OF METHOD:- to check the datatype.
// var x =20;
// var y;
// console.log(typeof x !== "undefined");
// console.log(typeof y !== "undefined");

// // Swapping of two variables:
// var a = 20;
// var b = 30;
// // Swaping of variable with temp method.
// var temp = a;
// a = b;
// b = temp;
// console.log(a);
// console.log(b);

//Convert string to number.
// var a = prompt("Enter value A");
//         var b = prompt("Enter value B");
//         a = Number(a);
//         b = Number(b);
//         var result = a + b;
//         document.write(result);

// inches and centimeters
// var inches = Number(prompt("Inches?"));
// var centimeters = inches * 2.54;
// document.write("centimeters" + centimeters)

// // Array methods:
// var arr = [100, 20, 30, 45];
// console.log(arr);
// console.log(arr.length);
// console.log(arr.sort((a, b) => a - b));

// var url = {
//   protocol: "https",
//   domain: "www.codeguage.com",
//   path: "/",
//   //return the full url as a string
//   getUrl: function () {
//     return url.protocol + "://" + url.domain + url.path;
//   },
// };

// //Adding two properties :
// url: queryString = null;
// url["hash"] = null;
// console.log(url);
// console.log(url.getUrl());

// // Sorting of an array
// var a = prompt("Enter value A");
// var b = prompt("Enter value B");
// var c = prompt("Enter value C");
// a = Number(a);
// b = Number(b);
// c = Number(c);
// const sortArr = [a, b, c];
// document.write(sortArr.sort((a, b,) => a - b));
// let number = 30;
// if (number <= 30) {
//   console.log("30 is higher");
// } else {
//   console.log("30 is lower");
// }
// console.log(number);
// let code = Number(prompt("Enter HTTP Response code:"));
// let response;
// switch (code) {
//   case 100:
//     response = "Informational";
//     break;
//   case 200:
//     response = "Success";
//     break;
//   case 300:
//     response = "Redirection";
//     break;
//   case 400:
//     response = "Client Errors";
//     break;
//   case 500:
//     900;
//     response = "Server Errors";
//     break;
//     200;

//   default:
//     response = "HTTP Status Codes Unknown";
//     break;
// }
// document.write(code + " " + response);

// for (let i = 1; i <= 10; i++) {
//   console.log("Number of looing" + i);
// }

// const arr = [30, 23, 5, 89, 90, 923, 6732, 3, 1, 209, 900];
// console.log(arr);
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
// for (let i = 0; i < arr.length; i++) {
//   console.log("Array index" + " " + i + "Array value" + " " + arr[i]);
//   console.log(arr[i].toString());
//   console.log(arr.sort((a, b) => a - b));
// }

// var lang = prompt("Enter a programming language:");

// while (!lang) {
//   alert("Invalid input.");
//   lang = prompt("Enter a programming language:");
// }

// document.write("You know " + lang + ".");

// function logSum(a, b) {
//   if (a === undefined || b === undefined) {
//     console.log("logSum() requires at least two arguments");
//   } else {
//     console.log(a + b);
//   }
// }
// logSum(10);
// logSum();
// logSum(20, 50);

// function linearSearch(array, target) {
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (element === target) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(linearSearch([1, 5, 7], "4"));
// console.log(linearSearch([1, 5, 7], 1));
// console.log(linearSearch(["1", "5", "7"], "4"));

// function factorial(n) {
//   if (typeof n !== Number) {
//     return null;
//   }
//   var result = 1;
//   for (let index = 2; index <= n; index++) {
//     result = result * index;
//   }
//   return result;
// }
// // factorial(6);
// console.log(factorial(6));

// function factorial(n) {
//   if (typeof n !== 'number') {
//      return null;
//   }

//   var result = 1;
//   for (var i = 1; i <= n; i++) {
//      result = result * i;
//   }
//   return result;
// }
// console.log(factorial(6));

// function factorial(n) {
//   if (typeof n !== "number") {
//     return null;
//   }

//   let result = 1;
//   for (let index = 1; index <= n; index++) {
//     result = result * index;
//   }
//   return result;
// }
// factorial(6);
// console.log(factorial(6));

// console.log("" || "Hello");
// console.log("Hello" || "");
// console.log("Hello" || "Hello");
// console.log("" || "");

// console.log("" && "Hello");
// console.log("Hello" && "");
// console.log("Hello" && "Hello");
// console.log("" && "");

// console.log(10 ?? 100);
// console.log(100 ?? 10);
// console.log("hi" ?? false);
// console.log(false ?? "Hello World!");

// const x= 10;
// function f(){
//   const x = 500;
//   console.log("From F()"+ x);
// }
// f();
// console.log("Outside " + x);

// function min(array) {
//   let minValue = Infinity;
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] < Infinity) {
//       Infinity = array[index];
//     }
//   }
//   return minValue;
// }
// min();
// console.log(min([-4, 3, 5, 9]));
// let str = "Dinakaran";
// // console.log(str.length);
// console.log([...str].length);

// function getAllIndexes(str,substr){
//   let i = str.indexOf

// }

// var num = "one-by-one";
// console.log(num.split("-"));

// var score = Number(prompt("Enter the score:"));
// var grade;
// if (90 <= score && score <= 100) {
//   grade = "A";
// } else if (75 <= score && score <= 89) {
//   grade = "B";
// } else if (60 <= score && score <= 74) {
//   grade = "C";
// } else if (50 <= score && score <= 59) {
//   grade = "D";
// } else if (40 <= score && score <= 49) {
//   grade = "E";
// } else {
//   grade = "Invalid value";
// }
// alert(grade);

let str = JSON.stringify({ dog: true, events: ["Playing"] });
let str1 = (JSON.parse(str).events);
document.write(str.toUpperCase());
document.write(str1);

const arrDate = [3,60,39,50,60];
const newArray = [...arrDate,59,90,79]
document.write(newArray);


