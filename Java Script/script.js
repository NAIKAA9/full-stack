/*
//  variables are containers for storing values or data
//  in js we can define varaiables in 3 ways
// 1.Var
// 2.let
//  3.const
var name = "Luffy";
console.log(name);
// problems with var
//1.
var name = "Luffy";
console.log(name);
var name = "Luffy";
console.log(name);
// 2.
name = "Monkey";
console.log(name);
//let
let country = "india";
console.log(country);
// let country = "india";
country = "bharat";
console.log(country, typeof country);

const age = 25;
// const age = 25;
console.log(age);
// age = 50;

// Data types :- data type represents type of data present inside varaibles

//_ Primitive data type:- number, strings, boolean, undefine, null (immutable or non changeable)
// _ non-primitive data types: array,objects,dict,,,(mutable or changeable)

let a = 10;
console.log(a, typeof a);

let b = 20;
console.log(b, typeof b);
// b = 90.5;
// console.log(b, typeof b);

console.log(typeof true);
console.log(typeof false);

let job;
console.log(typeof job);

const n = null;
console.log(typeof n);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(2 ** 4);

console.log(a > b);
console.log(a < b);
console.log(10 >= 10);
console.log(10 <= 10);

const x = Number(prompt("Enter x value: "));
const y = +prompt("Enter y value: ");
console.log(x, typeof x);
console.log(y, typeof y);


// * Assignment operators
//* 1.Loose equality (==) double
// type coercion – it converts the operands to the same type before comparing.
//* 2.strict equality (===) trible
// No type coercion – it checks both value and type. Safer and preferred in most cases to avoid unexpected bugs.
console.log(10 == 10); // t
console.log(10 == "10"); //t
console.log(10 === "10"); //f
console.log("20" == 20); //t
console.log(+"20" === 20);

console.log("10" == 10);
console.log("10" === 10);
console.log(true === "true");
console.log(false == "false");
console.log(true == 1);
console.log(true === 1);
console.log("25" == 2 + "5");
console.log("25" == 2 + 5);
console.log(25 + "25");
console.log(25 - "25");
console.log(false == "false"); //  0 == true

// increment and decrement operators
let x = +prompt("Enter x value: "); //5
console.log("current x value:", x);
x++;
x--;
console.log("current x value:", x); // 6
// if you want to increment x by use this way
// x = x + 2 //x = 5 + 2
x += 2;
console.log("current x value:", x);


// // _ logical operators
// _ and(&&) or(||)
// _ true value :- 0, ""
// _ false values empty string,undefine,null,NAN,zero
console.log(true && true); //t
console.log(true && false); //f
console.log(1 && 0);
console.log(0 && "");
console.log(1 || 0); //1
console.log(0 || ""); // ""

console.log("problems");
console.log(10 && 10);
console.log(10 && 0);
console.log(0 && true);
console.log(false && true);
console.log("20" && "india");
console.log("" || 20);
console.log("a" || 0);
console.log(true || false);
console.log(false || 0);
console.log(20 && "10" == "10"); // true ==
console.log(20 && "10" == ""); // true == false -- false

// not operator
// ==  != and === !==
console.log(10 != "10"); //  t - f
console.log(10 !== "10"); //  f - t


//Statements
// 1.if

const n = +prompt("Enter a number");

if (n > 0) {
  console.log("n is greater than zero", n);
} else {
  console.log("n is equal to zero or less than zero ", n);
}

if (n == 0) {
  console.log("n is not even or odd number");
} else if (n % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}


const n = +prompt("Enter a number");

if (n > 0) {
  console.log("n is a postive number");
} else {
  console.log("n is negative number");
}
// \* Ternary Operator _\*\*ES6
//_ The ternary operator is a simplified conditional operator like if / else.
//\* Syntax: condition ? <expression if true> : <expression if false></expression>
const result = n > 0 ? "postive number" : "negative number";
console.log(result);
const r = n % 2 === 0 ? "even" : "odd number";
console.log(r);
*/

// const Person = "kittu";
// console.log(Person);

// const 12person = undefined;
// const _person  ;
// const $person;
// const firstName ;
// const class = "cse"

// Loops are used to repeat a block of code untill condition get false
/*
1.for loop 
2.while loop
3.do while loop
4.for in loop
5.for of loop
6.forEach loop


for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("even number", i);
  }
}

for (let i = 1; i <= 10; i++) {
  const odd = i % 2 !== 0 ? i : "";
  console.log(odd);
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
  // sum = sum + i
}
console.log(sum);


// i want to print sum of n numbers
const n = +prompt("Enter n value:");

let sum = 0;
let i = 0;
while (i <= n) {
  sum += i;
  i++;
}
console.log(sum);


// let i = 0;
// while (i <= 10) {
//   if (i === 3) {
//     console.log("out of loop");
//     break;
//   }
//   console.log(i);
//   i++;
// }

let k = 0;
while (k < 10) {
  k++;
  if (k === 3) {
    console.log("skip iteration");
    continue;
  }
  console.log(k);
}
What is a Function?
A function in JavaScript is a reusable block of code designed to perform a specific task. Instead of repeating code, you can call the function whenever you need it.
Why Use Functions?
Reusability: Write once, use many times.
Modularity: Break code into smaller parts.
Maintainability: Easier to manage and debug.
// 3 type of functions in js
// 1.function declaration
// 2.function expression
// 3.Arrow functions

// 1.function declaration without parameters
function message() {
  console.log("Welcome to js functions");
}
message();
message();
message();
// 1.function declaration with parameters
function greetings(name) {
  console.log("Hello", name);
}
const greet = greetings("luffy");
console.log(greet);

function addition(a, b = 2) {
  const sum = a + b;
  return sum;
}
const result = addition(5, 2);
console.log(result);
const result_2 = addition(10);
console.log(result_2);
//2. function expression
const sub = function (a, b) {
  return a - b;
};
const s = sub(10, 5);
console.log(s);

// 3. Arrow function
// if arrow function have single line no need brackets and return statements it will automatically return the value

const mess = () => console.log("hello");
mess();
// if arrow function have multiple lines you have to write {} and return staements
const square = (n) => {
  return n * n;
};
const res = square(5);
console.log(res);


// IIFE (Immediately Invoked Function Expression)
// An IIFE is a function that is defined and executed immediately.
(function () {
  console.log("This is IIFE function");
})();

(function (name) {
  console.log("Welcome", name);
})("Zoro");

(function (a, b) {
  console.log(a + b);
})(5, 6);
/*
A callback function is a function that is passed as an argument to another function and executed later.

A function can accept another function as a parameter.
Callbacks allow one function to call another at a later time.
A callback function can execute after another function has finished


const greetings = function (name, callbackFn) {
  console.log("hello ", name);
  callbackFn(); // calling callback fn
};

const message = () => console.log("i'm call back fn");

greetings("luffy", message);

const calculator = (a, b, fn) => {
  return fn(a, b);
};

const add = (a, b) => a + b;

const result = calculator(10, 5, add);
console.log(result);


// What are Arrays in JS?
// Array is an ordered collection of elements (which can be of any type). It can store multiple values in a single variable and can be accessed using an index.

// creating arrays in 2 ways
// 1 type of creating array using []
// array starts with 0 index and ends with array.length -1

const a = [10, 20, 30, 40];
console.log(a[0]);
console.log(a[a.length - 1]);
console.log(a[2]);

// modify the array by using index value
a[1] = "luffy";
console.log(a);
a[a.length - 1] = true;
console.log(a);
// a = [10, "sai"];
// console.log(a);
// 2nd way to create arrays by using Contructor fuction
const languages = new Array();
console.log(languages);
// to add elements
languages[0] = "html";

languages.push("python"); //last position
languages.unshift("javascript"); // start position
console.log(languages);
// to delete elements
console.log(languages.pop()); //last position
console.log(languages.shift()); // start position
console.log(languages);
// to get substring
const array = [10, 20, 30, 40, 50];

const newArray = array.slice(1, array.length);
console.log(newArray);
console.log(array.slice(2, 4));
console.log(array.slice(3, 4));
console.log(array.slice(3));

// splice will modify the original array
array.splice(1, 2, "luffy", "rk");
console.log(array);
array.splice(2, 1, undefined);
console.log(array);
// to know the length of array
console.log(array.length);

languages.push("css");
languages.push("js");
languages.push("css");
languages.push("python");
console.log(languages);


const array = [10, 20, 30, 20, 10];
console.log(array);
// to access array elements
console.log(array[array.length - 1]);
array[3] = 30;
console.log(array);

//methods
const newArray = new Array();
console.log(newArray.length);
newArray.push(10);
newArray.unshift("luffy");
console.log(newArray.pop());
console.log(newArray.shift());

let languages = ["python", "javascript", "java", "javascript", "c"];
console.log(languages.indexOf("javascript"));
console.log(languages.lastIndexOf("javascript"));
languages.push("ejs");

if (languages.includes("ejs")) {
  console.log("Index position ", languages.indexOf("ejs"));
} else {
  console.log("ejs is not present");
}
console.log(languages.indexOf("c++"));

languages = languages.concat(["go", "c++"]);
console.log(languages);

console.log(languages.join("?:"));
console.log(languages.sort().reverse());
// push,pop,indexOf,lastIndexOf,includes,slice,splice,join,concat,sort,reverse,for-in,for-of,for-each,map,filter,reduce
const n = [10, 20, 30, 40];
console.log(n.slice(1, 3));
console.log(n.slice(1, 2));
console.log(n.splice(1, 2, "luffy"));
console.log(n);
// template literal ``

const array = [10, 20, 30, 40];
// 1st
for (let i = 0; i < array.length; i++) {
  console.log(`${array[i]} present at index position ${i}`);
  document.writeln(`${array[i]} present at index position ${i} <br>`);
}
//  for in
console.log("for in");
for (const i in array) {
  document.writeln(`${array[i]} present at index position ${i} <br>`);
}
for (const i of array) {
  document.writeln(i, "<br>");
}

// in general for loop and for-in you will get index value if you want to access elements we have to write array[index number]
// if you want direct values you have to use for of loop

const lang = ["py", "js"];

for (const element of lang) {
  document.writeln(`${element} <br>`);
}

forEach() method
forEach() method is used to iterate over the elements of an array and perform a specific  action on each element.
It doesn't return a new array, it applies the callback function to each element in the original array.


const num = [10, 20, 30, 40];
num.forEach((element, index) => {
  console.log(element * 2);
  document.writeln(`${element} at index position ${index} <br>`);
});
// map() method
// map() method in JavaScript is used to iterate over each element of an array and create a new array with the results of applying callback function to each element.
const newNew = num.map((element) => element * element);
console.log(newNew);

//without using map fun
const emptyArr = [];
num.forEach((element) => {
  emptyArr.push(element * element);
});
console.log(emptyArr);

const filterArr = num.filter((element) => element > 30);
console.log(filterArr);

const result = num.reduce((acc, curr, i, num) => acc + curr);
console.log(result);

What is an object in JavaScript?
An object in JavaScript is a collection of key-value pairs, where each key is a string and the value can be any data type, including functions and other objects.

const student = {
  firstName: "Monkey D",
  lastName: "Luffy",
  dob: 2000,
  address: {
    town: "Wind mill village",
    city: "East blue",
  },
  friends: ["zoro", "red hair", "tony"],
  greetings: function () {
    console.log("Welcome to object methods", this.firstName);
  },
  //latest way of methods
  calcAge() {
    return 2025 - this.dob;
  },
};
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

student.greetings();
console.log(student.calcAge());
//Accessing Object Properties
//1. Dot Notation (Recommended)
console.log(student.firstName);
// 2. Bracket Notation (For Dynamic Keys)
console.log(student["lastName"]);
console.log(student.address.city);
console.log(student.friends[student.friends.length - 1]);
console.log(student.friends[1]);
// modifying property
student.dob = 1990;
console.log(student);
// adding property
student["job"] = "caption";
// delete property of object
delete student.job;
console.log(student);
// we create functions inside object are called as object methods and use function expressions

for (const i in student) {
  console.log(i);
}

// Set is collection of elements (just like array) with unique values
const a = {};
console.log(typeof a);

//to create set we have to use
const element = new Set();
// add elements
element.add(10);
element.add(20);
element.add(10);
element.add(30);
element.add(30);
console.log(element);
// to delete elements
element.delete(20);
console.log(element);

// to check if the give element present or not
console.log(element.has(20));
console.log(element.has(30));
// to know how many elements present
console.log(element.size);
// to remove all the propery we have to use
element.clear();
console.log(element);


document.title = "Dom Operation";

// document.body.style.backgroundColor = "#e0e";

const main = document.getElementById("main");
console.log(main);

main.style.backgroundColor = "orangered";
main.style.textAlign = "center";

// class
const lang = document.getElementsByClassName("lang");
console.log(lang);

lang[lang.length - 1].style.backgroundColor = "green";

for (const i of lang) {
  i.style.backgroundColor = "green";
}

// lang.forEach((ele) => {
//   ele.style.textTransform = "uppercase";
// });
Array.from(lang).forEach((ele) => {
  ele.style.textTransform = "uppercase";
});

const h4Element = document.getElementsByTagName("h4");
console.log(h4Element);

h4Element[1].style.backgroundColor = "grey";

Array.from(h4Element).forEach((ele) => (ele.style.backgroundColor = "grey"));

const ulElement = document.querySelectorAll("ul");
console.log(ulElement);

for (let i of ulElement) {
  i.style.listStyle = "none";
  i.style.backgroundColor = "brown";
}

ulElement.forEach((ele) => (ele.style.backgroundColor = "yellow"));


const fe = document.getElementById("fe");
console.log(fe);

fe.firstElementChild.style.backgroundColor = "blue";
fe.lastElementChild.style.backgroundColor = "green";

const be = document.querySelector("#be");

be.firstElementChild.style.textAlign = "center";

const children = be.children;
console.log(children);
for (const ele of children) {
  ele.style.fontSize = "150px";
}

// siblings
const html = document.querySelector(".h");

html.nextElementSibling.style.backgroundColor = "violet";
html.parentElement.style.textTransform = "uppercase";

const go = document.querySelector(".g");
go.previousElementSibling.style.backgroundColor = "cyan";

const py = document.querySelector(".py");

py.parentElement.style.backgroundColor = "lightgreen";


const h1 = document.getElementById("main");
console.log(h1);
h1.textContent = "This JS";

const p = document.querySelector("p");
p.textContent = "<i>this is p tag</i>";
const h2 = document.querySelector("h2");

h2.innerHTML = "<i>this is h2 tag</i>";

// read the content
console.log(h1.textContent);
console.log(p.textContent);

const h3 = document.querySelector("h3");
h3.innerText = "<span>this is h3</span>";
console.log(h3.innerText);

// to create element
const h1 = document.createElement("h1");
// set attributes
h1.setAttribute("class", "main");
console.log(h1);
h1.style.fontSize = "100px";
// adding content
h1.textContent = "Welcome to JS";
document.body.append(h1);

// adding image
const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRFpRe_pRpLoh_vGVB_RPmzttUVeMuAbzo09_K8TtwrKmYXaBuBrk-0o-ad26Whr_wklgV6xWqzbBu-yOp4h92tHFBo-2L8m1Fdh4lPMvYX_A"
);
img.setAttribute("alt", "Zoro img");
console.log(img);
const container = document.querySelector(".container");
container.appendChild(img);


// events
const btn = document.getElementById("btn");
console.log(btn);

function btnEvent() {
  document.body.style.backgroundColor = "orangered";
  btn.style.backgroundColor = "blue";
  btn.textContent = "🎬";
}
btn.addEventListener("click", btnEvent);

btn.addEventListener("dblclick", () => {
  btn.textContent = "double click";
});
const span = document.querySelector("span");
console.log(span);
span.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "green";
  span.style.fontSize = "100px";
  span.textContent = "REACT";
});

span.addEventListener("mouseout", (event) => {
  event.target.textContent = "react concept";
});

const key = document.querySelector("#key");
console.log(key);

key.addEventListener("keyup", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = `the key you enter is ${event.key}`;
  console.log(event.target);
});
key.addEventListener("keydown", (event) => {
  event.target.style.backgroundColor = "grey";
  event.target.textContent = `the key you enter is ${event.key}`;
  console.log(event.target);
});

const input = document.querySelector(".input");

const inputBtn = document.getElementById("inputbutton");
inputBtn.addEventListener("click", () => {
  console.log(input.value);
});

input.addEventListener("input", () => console.log(input.value));


const value = document.querySelector(".value");
const increment = document.getElementById("in");
const reset = document.getElementById("res");
const decrement = document.getElementById("dec");

let count = 0;
increment.addEventListener("click", () => {
  count++;
  value.textContent = count;
});

decrement.addEventListener("click", () => {
  count--;
  value.textContent = count;
});
reset.addEventListener("click", () => {
  count = 0;
  value.textContent = count;
});

const js = "javascript";
console.log(js.slice(4, 7));
console.log(js.split());
const s = "    js    ";
console.log(s.trimStart());
console.log(s.trimEnd());
console.log(s.trim());
console.log(js[0]);
console.log(js[js.length - 1]);
// update values by using index
js[0] = "J";
console.log(js);

const newJs = js.replace("j", "J");
console.log(newJs);
console.log(js.replaceAll("javascript", "React"));

const n = [10, 20];
n[0] = "kk";
console.log(n);
// methos of string
console.log(js.length);
console.log(js.indexOf("i"));
console.log(js.lastIndexOf("a"));
console.log(js.includes("v"));
console.log(js.at(-1));
console.log(n.at(-1));
console.log(js.toUpperCase());
console.log(js.toLowerCase());
// * ES6
// Destructuring = destructuring is a way of unpacking values from an array or objects into separate variables
let num = [10, 20, 30, 40];
// storing array elements into variables  with out destructuring
const a = num[0];
const b = num[1];
const c = num[2];
const d = num[num.length - 1]; // num.at(-1)
console.log(a);
console.log(b);
console.log(c);
console.log(d);
// [] = to perform array destructuring
const [p, q, r, s] = num;
console.log(p);
console.log(q);
console.log(r);
console.log(s);
// skip values
const [x, , y, z] = num;
console.log(x);
console.log(y);
console.log(z);
const array = ["js", "java", "c"];
let [js, , clang] = array;
console.log(js);
console.log(clang);

// swap the values of 2 values without help of 3rd variable
// with 3rd
let a1 = 10;
let b1 = 20;
// let temp = b1;
// b1 = a1;
// a1 = temp;
// console.log(a1);
// console.log(b1);
// with destructuring
[b1, a1] = [a1, b1];
console.log(a1);
console.log(b1);

// nested destructuring

const lang = ["html", "css", ["js", "python"]];
const [ht, , [, py]] = lang;
console.log(ht);
console.log(py);

const n = ["cse", "ece", ["mec", "it"], "Al"];
const [cs, , [, i], al] = n;
console.log(cs);
console.log(i);
console.log(al);

const student = {
  firstName: "monkey d",
  lastName: "luffy",
  isMarried: false,
  job: true,
};

// destructuring of objects
// const { firstName, isMarried,job } = student;
// console.log(firstName);
// console.log(isMarried);
// variables is different property name(key name)
const { firstName: surname, lastName: name, isMarried: status } = student;
console.log(surname, name, status);

// using destructuring of objects for functions
const fullName = (student) => {
  console.log(student.firstName + student["lastName"]);
};
fullName(student);

const nameStudent = ({ firstName, lastName }) => {
  // console.log(student.firstName + student["lastName"]);
  console.log(firstName + lastName);
};
nameStudent(student);

const checkStatus = ({ isMarried }) => {
  if (isMarried) {
    console.log("married");
  } else {
    console.log("single");
  }
};

checkStatus(student);



// / The spread operator (...) in JavaScript allows you to unpack elements from an array or object, and spread them into another array, object, or function call. It can be used in various contexts

const n1 = [10, 20];
console.log("n1 elements", n1);
const n2 = ["luffy", true];
console.log("n2 elements", n2);

//copying of array
const newN1 = [...n1];
console.log("copy of n1 array: ", newN1);
// combining multiple array
const n = [...n1, ...n2, ...n1, ...n2];
console.log(n);
// using spread for arugments
const display = (m, n) => {
  console.log(m, n);
};
display(...n);

const person = {
  firstName: "ravi",
  lastName: "teja",
  study: "bsc",
  //old way
  fullName: function () {
    console.log(this.firstName + this.lastName);
  },
  //latest way
  name() {
    console.log(this.firstName + this.lastName);
  },
};
person.fullName();
person.name();

//copy object
const student = { ...person };
console.log(student);
// Rest is used to collect multiple values into an array
const languages = ["python", "js", "java", "c++"];
console.log(languages);

const [py, j, ...c] = languages;
console.log(py);
console.log(j);
console.log(c);

// Synchoronous will execute our code line by line and each line waits for previous line to complete or finish

console.log("Start");
const message = (name) => {
  console.log("hey", name);
};
message();
console.log("end");
message("kittu");

// asynchronous code will execute after background task is completed

// setTimeout() is a built-in JavaScript function that allows you to schedule the execution of a function after a specified delay asynchronously
console.log("start");
setTimeout(() => {
  console.log("asynchronous function");
}, 5000);
console.log("end");

const message = (name) => {
  console.log("hey", name);
};
setTimeout(() => message("rk"), 4000);
// setInterval() is a built-in JavaScript function that allows you to repeatedly execute a function at a specified interval asynchronously.

// setInterval(() => {
//   console.log("luffy");
// }, 3000);


const h1 = document.getElementById("main-one");
const h2 = document.getElementById("main-two");
const h3 = document.getElementById("main-three");
const btn = document.querySelector("button");
// callback hell
btn.addEventListener("click", () => {
  setTimeout(() => {
    h1.style.backgroundColor = "red";
    setTimeout(() => {
      h2.style.backgroundColor = "blue";
      setTimeout(() => {
        h3.style.backgroundColor = "green";
      }, 4000);
    }, 1000);
  }, 2000);
});

function task1(callback) {
  setTimeout(() => {
    console.log("task-1 completed");
  }, 2000);
  callback();
}
function task2(callback) {
  setTimeout(() => {
    console.log("task-2 completed");
  }, 1000);
  callback();
}
function task3(callback) {
  setTimeout(() => {
    console.log("task-3 completed");
  }, 3000);
  callback();
}
function task4(callback) {
  setTimeout(() => {
    console.log("task-4 completed");
  }, 4000);
  callback();
}
call back  hell 
task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("completed");
      });
    });
  });
});


// Promise is container for future or upcoming value
// States of a Promise:
// Pending – Initial state.
// Fulfilled  resolve– Operation completed successfully.
// Rejected – Operation failed.

// building promises
const promise = new Promise((resolve, reject) => {
  let a = 4;
  if (a === 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});
// console.log(promise.value);

promise.then((response) => console.log(response));

function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("task-1 completed");
      resolve();
    }, 2000);
  });
}
function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("task-2 completed");
      resolve();
    }, 1000);
  });
}
function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("task-3 completed");
      resolve();
    }, 3000);
  });
}
function task4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("task-4 completed");
      resolve();
    }, 4000);
  });
}

// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => {
//         console.log("completed");
//       });
//     });
//   });
// });

task1()
  .then(task2)
  .then(task3)
  .then(task4)
  .then(() => console.log("completed"));
const tableBody = document.querySelector("#t-body");
const apiCall = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.email}</td>
      `;
        tableBody.appendChild(tr);
      });
    });
};

apiCall();

const randomJoke = async () => {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any");
  const data = await response.json();
  const p = document.getElementById("joke");
  p.textContent = data.setup;
};

const jokeBtn = document.querySelector(".btn-rn");

jokeBtn.addEventListener("click", randomJoke);

const productBtn = document.querySelector(".btn-pro");
const productcard = document.querySelector(".product-card");

const product = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
  data.forEach((ele) => {
    const div = document.createElement("div");
    div.innerHTML = `
  <img src="${ele.image}"/>
  <p>${ele.title}</p>
  <p>${ele.price}</p>
  `;
    productcard.prepend(div);
  });
};

productBtn.addEventListener("click", product);
*/

import message from "./async";

console.log(message.name);
