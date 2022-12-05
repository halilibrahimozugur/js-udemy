/*console.log("Jonas");
console.log(23);

let firstName = "berk20075";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let $let = "asds";
console.log($let);
*/
/*
// Math Operators
const now = 2023;
const ageHalil = now - 1992;
const ageOzan = now - 1990;
console.log(ageHalil, ageOzan);

console.log(ageHalil * 2, ageOzan / 10, 2 ** 3);

const firstName = 'Halil';
const lastName = 'Ozan';
console.log(firstName + ' ' + lastName);

// Asignment Operators
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison Operators
console.log(ageHalil > ageOzan); // soruyoruz, true ya da false diye sonuç veriyor (>, <, >=, <=)
console.log(ageOzan >=18);

const isFullAge = ageOzan >= 18;

console.log(now - 1992 < now - 1990);
*/

/*const now = 2023;
const ageHalil = now - 1992;
const ageOzan = now - 1990;

console.log(now - 1992 < now - 1990);
*/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
/*
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

let markBMI = (massMark / heightMark ** 2);
let johnBMI = (massJohn / heightJohn ** 2);

console.log (markBMI, johnBMI);
console.log (markBMI > johnBMI);
*/

const firstName = 'Halil';
const job = 'psychologist';
const birthYear = 1992;
const year = 2022;

const halil = "I am " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(halil);
const halilNew = `I am ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(halilNew);

console.log(`Just a regular string...`)

console.log(`String with \n\
multiple \n\
line`)

console.log(`String with
multiple
line`)


