const massMark = 98;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// ** used for exponential or expo operator
const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** 2);
console.log(BMIJohn, BMIMark);

console.log("use string literal to decorate output")

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI is (${BMIMark}) is heigher than John's (${BMIJohn})!`);
}else{
    console.log(`John's BMI is (${BMIJohn}) is heigher than Mark's (${BMIMark})!`);
}