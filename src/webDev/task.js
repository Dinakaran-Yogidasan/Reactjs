// write a js code which gives the unique number in the arrayInput:
// var arr=[1,1,2,3,4,5,6,7,4,3,2,5,6];Ouput:7
var arr = [1, 1, 2, 3, 4, 5, 6, 7, 4, 3, 2, 5, 6];
var temp = arr[0];
for (var i = 1; i < arr.length; i++) {
  //   console.log(i);
  temp = temp ^ arr[i];
}
console.log(temp);
console.log(i);

// Program to Check whether a number is Palindrome or Not
// If Number is Palindrome Print True else Print False
// Sample Input 121 output True

// let number = [121];
// let numberReverse = number.reverse().join();
// let input = prompt("Please enter Palindrome Number");
// if (input === numberReverse) {
//   alert("True");
// } else {
//   alert("False");
// }

/**
 * Write JS code for Print the Prime Number between 1 to n
 * Input : 10
 * Output : 2,3,5,7
 */

var count = 0;
var i, j;
var n = 10;

// Generate number between the Range
for (let i = 2; i <= n; i++) {
  //   for Deniominter number
  for (let j = 1; j <= n; j++) {
    if (i % 2 == 0) {
      count++;
    } else {
      count--;
    }
  }
}
console.log(i);
