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

*/