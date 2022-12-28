'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can Drive');

// const interface = 'audio';
// const private = 534;



function logger() {
  console.log('Benim adım Halil');
}

// calling / runnig / invoking function
logger();
logger();
logger();

// meyve suyu sıkacağı makinesi - functions
function fruitProcessor(howmanyapple, howmanyoranges) {
  const juice = `Juice with ${howmanyapple} apples and ${howmanyoranges} oranges.`
  console.log(juice);
  return juice;
}

fruitProcessor(4, 4);

fruitProcessor(5, 5);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 64);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);



// function decleration - burada value'yu önceden tanımlayabiliyoruz, sonrasında da tanımlayabiliriz

const age1 = calcAge1(1991);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}



//function expression - burada value'yu sonrada tanımlamamız gerekiyor
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge1(1991);

console.log(age1, age2);



// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  // return ritirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1992, 'Halil'));


//function calling other function
function cutFruitPieces(fruit) {
  return fruit * 8;
}

function fruitProcessor(howmanyapple, howmanyoranges) {
  const applePieces = cutFruitPieces(howmanyapple);
  const orangePieces = cutFruitPieces(howmanyoranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
  return juice;
}

console.log(fruitProcessor(2, 3));


///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));





// Function olmadan sadece if ile part 2 coding challange 1
const avTakim1 = (takim1_1 + takim1_2 + takim1_3) / 3;
const avTakim2 = (takim2_1 + takim2_2 +takim2_3) / 3;

console.log(avTakim1);
console.log(avTakim2);

if (avTakim1 >= avTakim2*2 || avTakim2 >= avTakim1*2) {
  if (avTakim1 > avTakim2){
    console.log('1. Takım Yendi');
  } else {
    console.log('2. Takım Yendi');
  }
} else {
  console.log('Kimse Yenemedi');
}

// Function ve if ile part 2 coding challange 1
const [takim1_1, takim1_2, takim1_3] = [45, 67, 77];
const [takim2_1, takim2_2, takim2_3] = [45, 55, 77];

const avTakims = () => {
  const avTakim1 = (takim1_1 + takim1_2 + takim1_3) / 3;
  const avTakim2 = (takim2_1 + takim2_2 + takim2_3) / 3;
  if (avTakim1 >= avTakim2*2 || avTakim2 >= avTakim1*2) {
    if (avTakim1 > avTakim2){
      console.log('1. Takım Yendi');
    } else {
      console.log('2. Takım Yendi');
    }
  } else {
    console.log('Kimse Yenemedi');
  }
}

avTakims();


// Function ve if ile part 2 coding challange 1

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(56,55,89));

const scoreDolphin = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 459);
console.log(scoreDolphin, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win throphy (${avgDolphins}) vs. ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win throphy (${avgKoalas}) vs. (${avgDolphins})`);
  } else {
    console.log('kimse yenemedi');
  }
}
checkWinner(scoreDolphin, scoreKoalas);
checkWinner(2, 4);

// Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = ['Jonas', 'Halil', 2037 - 1991, 'teacher', friends];
console.log(jonas);

jonas[1] = 5;
jonas[2] = 'Halil';
console.log(jonas);

//
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age5 = calcAge(years[years.length - 1]);
console.log(age1, age2, age5);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);



// Basic Array Operations (Methods)
  // add elements to array
const friends = ['Michael', 'Steven', 'Peter'];
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);

friends.unshift('John');
console.log(friends);

  // remove elements from array
friends.pop(); // last element removed
const popped = friends.pop();
console.log(popped); 
console.log(friends);

friends.shift(); //first item removed
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));


friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven!');
}


// challange array
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

// const calcTip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

*/