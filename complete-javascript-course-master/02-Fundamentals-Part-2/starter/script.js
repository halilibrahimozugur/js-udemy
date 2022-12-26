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
*/

