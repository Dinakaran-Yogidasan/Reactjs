var x = 20;
var y = 20;
let z = x + y;
console.log(z);

function add(a, b) {
  return a + b;
}
add();
console.log(add(2, 4));

let catDetails = {
  model: 21312,
  value: 52352352,
  name: "SUV",
  carsData: function (model, value) {
    return model + "" + value;
  },
};
console.log(catDetails);

let person = ["Dinakaran", 28, 1999];
console.log(person.length);

let veg = "Apple, Orange, Watermelon, banana";
let fruits = "Grapes,";
console.log(veg.length);
console.log(veg.slice(-10, -1));
console.log(veg.substring(7));
console.log(veg.toLocaleLowerCase());
console.log(veg.toLocaleUpperCase());
console.log(veg.concat(",", "Grapes"));
console.log(veg.split(" "));
console.log(veg.search("Orange"));
const cars = ["Saab", "Volvo", "BMW", "Swift", "RDX"];
console.log(cars.sort());
let car = cars[cars.length - 2];
console.log(car);
for (i = 0; i < cars.length; i++) {
  console.log(`How many iteration ${i} with ${cars}`);
}
cars.forEach((element) => {
  console.log(element);
});
cars.forEach((data) => {
  console.log(data);
});

cars.push("Lambo");
console.log(cars);
cars.pop("Lambo");
console.log(cars);
cars.splice(4, 0, "DON");
console.log(cars);
cars.splice(4);
console.log(cars);
const points = [40, 100, 1, 5, 25, 10];
console.log(
  points.sort(function (a, b) {
    return b - a;
  })
);
const carsd = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
console.log(
  carsd.sort(function (a, b) {
    return a.year - b.year;
  })
);

console.log(
  carsd.sort(function (a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  })
);

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 10);
console.log(newArr);
const newMapArr = myArr.map((x) => x * 10);
console.log(newMapArr);
const newFilterArr = myArr.filter((x) => x > 5);
console.log(newFilterArr);

let student = [
  {
    name: "Dinakaran",
    age: 30,
    role: "Developer",
  },
  {
    name: "Dinakaran",
    age: 30,
    role: "Developer",
  },
  {
    name: "Dinakaran",
    age: 30,
    role: "Developer",
  },
];
console.log(student);
console.log(student.forEach((element) => element.age * 29));
console.log(student.map((element) => element.name));
console.log(student.flatMap((element) => element.age * 20));
console.log(student.filter((element) => element.age > 20));

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
console.log(sum);

const data = new Date();
console.log(data);
var age = 2;
let votable = age < 20 ? "Good" : "Not ";
console.log(votable);

const number = [45, 4, 9, 16, 25, 90];
for (i = 0; i < number.length; i++) {
  console.log(number[i] * 2);
  console.log(
    number.sort(function (a, b) {
      return a - b;
    })
  );
}
let a = 10;
let b = 20;

if (a > b || b < a) {
  console.log("A Is Bigger");
}

let d = new Date();
console.log(d);

let regex = new RegExp("A");
let res = regex.test("ell the Best");
console.log(res);
