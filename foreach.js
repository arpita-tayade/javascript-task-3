//1. Print Each Element

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log(num));


//2.Multiply each element by 2

let numb = [1, 2, 3, 4, 5];

numb.forEach(num => console.log(num * 2));


//3.peint index of each element

let fruits = ['apple', 'banana', 'mango', 'orange'];

fruits.forEach((fruit, index) => console.log(`Index ${index}: ${fruit}`));

//4.sum of all elements

let arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(num => sum += num);

console.log(sum);

//5. convert array to uppercase

let names = ['arpita', 'chetan', 'pranav', 'tejaswini'];
names.forEach((name, index, arr) => arr[index] = name.toUpperCase());
console.log(names);

//6. Count Even and Odd Numbers

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = 0; odd = 0;

numbers.forEach(num => num % 2 === 0 ? even++ : odd++);
console.log(`even: ${even}, odd: ${odd}`);


//7. Add a Property to Objects

let students = [
    { name: "Amit", marks: 80 },
    { name: "Sara", marks: 90 },
    { name: "John", marks: 85 }
];


students.forEach(student => student.passed = student.marks >= 50);


console.log(students);


//8. Count Occurrences of a Word

let words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'mango', 'apple', 'orange', 'apple'];
let count = {};

words.forEach(word => count[word] = (count[word] || 0) + 1);
console.log(count);


//9. create a new array manually

let number = [1, 2, 3, 4, 5];
let squared = [];

numbers.forEach(num => squared.push(num * num));
console.log(squared);


//10. find the maximun number 

let nums = [4, 7, 5, 3, 2, 6];
let max = nums[0];

nums.forEach(num =>{
    if (num > max) max = num
});

console.log(max);
 

//10 tasks on the `forEach` method without using DOM.

//1.Double the numbers

let numbers = [2, 4, 6, 8];
let double = [];

numbers.forEach(num => double.push(num * 2));
console.log(double);


//2.count even and odd numbers

let number = [1, 2, 3, 4, 5, 6, 7, 8];
let even = 0, odd = 0;
number.forEach(num =>{
    if (num % 2 === 0) even++;
    else odd++;
});
console.log(`even: ${even}, odd: ${odd}`);


//3. convert names to Uppercase

let names = ["alice", "bob", "charlie"];
let upper = [];

names.forEach(name => upper.push(name.toUpperCase()));
console.log(upper);


//4. find the maximun number 

let nums = [3, 9, 2, 12, 7];
let max = nums[0];

nums.forEach(num =>{
    if (num > max) max = num;
});
console.log(max);


//5. sum of all numbers

let arr = [10, 20, 30, 40];
let sum = 0;

arr.forEach(num => sum += num);
console.log(sum);


//6. count word occurances

let words =["apple", "banana", "apple", "orange", "banana", "apple"];

let count = {};
words.forEach(word => {
    count[word] = (count[word] || 0) + 1;
});

console.log(count);


//7. Extract Emails from an Object Array

let users = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" }
  ]
let emails = users.map(user => user.email);

console.log(emails);


//8. Check if All Users Have Camera ON

let users1 = [
    { name: "Alice", cam: true },
  { name: "Bob", cam: false },
  { name: "Charlie", cam: true }
]
let allCamOn = users1.every(user => user.cam);

console.log(allCamOn); 


//9. Remove Duplicates Without Using `Set`


let numbers = [1, 2, 2, 3, 4, 4, 5];
let unique = [];

numbers.forEach(num => {
    if (!unique.includes(num)) unique.push(num);
});

console.log(unique);


//10. Find Users Above a Certain Age

let users = [
    { name: "Alice", age: 22 },
  { name: "Bob", age: 28 },
  { name: "Charlie", age: 26 }
]
let above25 = users.filter(user => user.age > 25);

console.log(above25);


