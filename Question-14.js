/*
    A person needs a simple tip calculator for restaurent. If bill value is between 50 and 300 then tip is 15% otherwise 20%.
*/

const bill = 275;
const tip = bill <=300 && bill >=50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${bill + tip}.`);
/*
    Adding this line for testing github actions.
*/