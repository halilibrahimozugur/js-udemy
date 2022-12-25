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

/*
const firstName = 'Halil';
const job = 'software dev.';
const birthYear = 1992;
const year = 2098

const me = "Ben " + firstName + ', software developer ' + (year - birthYear) + ' yaşındayım ' + job + '!';

console.log(me);

const meNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(meNew)



const age = 16;
const isOldEnough = age >= 18;

if(isOldEnough) {
  console.log('🚚🚛🚚tekerine taş değmesin!🚚🚛🚚')
} else {
  const yearsLeft = 18 - age;
  console.log(`${yearsLeft} yıl bekle`)
}

const birthYear = 2001;

let century;
if(birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);



const markBmi = 28.3;
const johnBmi = 29.9;

if( markBmi > johnBmi) {
  console.log(`Mark's BMI ${markBmi} is higher than John's ${johnBmi}`)
} else {
  console.log(`Mark's BMI (${markBmi}) is lower than John's ${johnBmi}`)
}

// type conversion
const inputYear = '1991';

console.log(Number(inputYear));
console.log(Number(inputYear) + 19);

console.log(String(15), 15);

//type coercion

const age = 15;
const age2 = ' on beş';

console.log(age + age2); //15 on beş

console.log('23 - 10');

let n = '1' + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + '5' + 4)
console.log(2 + 3 + 4 + '5')

let x = '1';
console.log(+x);



const age = '18';
if (age === 18) console.log('reşit birey');
else console.log ('18 değil');

if (age == 18) console.log('reşit birey');
else console.log ('18 değil');

const favorite = +prompt("What's your favorite number?");
console.log(favorite);
console.log(typeof favorite);

if (favorite == 4) {
  console.log('cool! 4 is amazing number')
} else if (favorite == 3) {
  console.log('3 bok gibi bir sayı')
} else {
  console.log('tuturamadın')
}

if (favorite !== 4) console.log('4ten iyisi yok');



const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);


const shouldDrive = hasDriverLicense && hasGoodVision && !isTired;

if(shouldDrive) {
  console.log('you can drive');
} else {
  console.log('someone else should drive..');
}

console.log(hasDriverLicense && hasGoodVision && isTired);

if(shouldDrive) {
  console.log('you can drive');
} else {
  console.log('someone else should drive..');
}



const jimDolphins1 = 0.1;
const jimDolphins2 = 0.1;
const jimDolphins3 = 0.1;

const jimKoalas1 = 0.1;
const jimKoalas2 = 0.1;
const jimKoalas3 = 0.1;


const avDolphins1 = (jimDolphins1 + jimDolphins2 + jimDolphins3) / 3;
console.log(avDolphins1)
const avKoalas1 = (jimKoalas1 + jimKoalas2 + jimKoalas3) / 3;
console.log(avKoalas1)

let avDolphins1 = prompt('yunusların ortalamasını gir')
let avKoalas1 = prompt('koalaların ortalamasını gir')

if ((avDolphins1 > avKoalas1) && (avDolphins1 > 100)) {
  console.log('yunuslar kazandı ve kupayı aldı')
} else if ((avDolphins1 < avKoalas1) && (avKoalas1 > 100)) {
  console.log('koalalar kazandı ve kupayı aldı')
} else {
    if ((avDolphins1 > avKoalas1) && (avDolphins1 < 100)) {
      console.log('yunuslar kupasız kazandı')
    }
    else if ((avDolphins1 < avKoalas1) && (avKoalas1 > 100)) {
      console.log('koalalar kupasız kazandı')
    }
    else {
      console.log('kupayı kimse almadı, kardeşlik kazandı')
    }
  }


let avDolphins1 = Number(prompt('yunusların ortalamasını gir'))
let avKoalas1 = Number(prompt('koalaların ortalamasını gir'))
  
if ((avDolphins1 > avKoalas1) && (avDolphins1 > 100)) {
    console.log('yunuslar kazandı ve kupayı aldı');
} else if ((avDolphins1 > avKoalas1) && (avDolphins1 <= 100)) {
    console.log('yunuslar kazandı ve babayı aldı');
} else if ((avDolphins1 < avKoalas1) && (avKoalas1 > 100)) {
    console.log('koalalar kazandı ve kupayı aldı');
} else if ((avDolphins1 < avKoalas1) && (avKoalas1 <= 100)) {
    console.log('koalalar kazandı ve babayı aldı');
} else  {
    if (avDolphins1, avKoalas1 > 100) { 
      console.log('iki takım da kupayı kazandı');
    }
    else {
      console.log('kupayı kimse almadı, babalar kazandı');
    }
  }



const day = 'pazar';

switch(day) {
  case 'pazartesi': // day === 'pazartesi'
    console.log('ilk iş günü');
    console.log('haftalık planını yap');
    break;
  case 'salı':
    console.log('x toplantısına girmeyi unutma');
    break;
  case 'çarşamba':
    console.log('haftanın ortası az kaldı dayan');
    break;
  case 'perşembe':
    console.log('1 gün daha');
    break;
  case 'cuma':
  case 'cumartesi':
  case 'pazar':
    console.log('eğlence başlasın');
    break;
  default:
    console.log('doğru gün girmedin')
}


// haftanın günleri
const day = prompt('bir gün gir');

if (day === 'pazartesi') {
  console.log('first day of the week');
} else if (day === 'salı') {
  console.log('second day of the week');
} else if ((day === 'çarşamba') || (day === 'perşembe')) {
  console.log('third or fourth day of the week');
} else if (day === 'cuma') {
  console.log('fifth day of the week');
} else if (day === 'cumartesi') {
  console.log('sixth day of the week');
} else if (day === 'pazar') {
  console.log('last day of the week');
} 
else {
  console.log('haftanın bir gününü girmen lazım!')
}



// if else kısa yazma = The Conditional (Ternary) Operator
const age = 17
age >= 18 ? console.log('sürebilirim') : console.log('süremem');

const drive = age >= 18 ? 'sürebilirim' : 'süremem';
console.log(drive);

let drive2;
if (age >= 18) {
  drive2 = 'sürebilirim';
} else {
  drive2 = 'süremem';
}
console.log(drive2);

console.log(`Araba ${age >= 18 ? 'sürebilirim' : 'süremem'}`);

// Alıştırma: if else kısa yazma = The Conditional (Ternary) Operator
const bill = 386;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

let lastbill;
if (bill >= 50 && bill <= 300) {
  lastbill = ((bill*15) / 100) + bill;
} else {
  lastbill = ((bill*20) / 100) + bill;
}
console.log(lastbill);

console.log(`Bill ${bill}, tip ${tip}, total ${bill + tip}`);

*/




