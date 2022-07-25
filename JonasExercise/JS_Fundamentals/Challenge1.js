/*

Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

*/


// My solution


//  mark's info
    // version 1 
let markHeight1=1.69;
let markMass1= 78;
    // version 2
let markHeight2=1.88;
let markMass2= 95;


// john's info
  //version 1
let johnMass1= 92;
let johnHeight1=1.95;


   // version 2
let johnMass2= 85;
let johnHeight2=1.76;



// calling calculator functions   ( VERSION 1)
let marksBMI1= calculateBMI(  markMass1, markHeight1)
let JohnsBMI1= calculateBMI( johnMass1 , johnHeight1)

// calling calculator functions   ( VERSION 2)
let marksBMI2= calculateBMI(  markMass2, markHeight2)
let JohnsBMI2= calculateBMI( johnMass2 , johnHeight2)







let markHigherBMI1= marksBMI1 >JohnsBMI1
let markHigherBMI2= marksBMI2 >JohnsBMI2

console.log(`${markHigherBMI1? '(v1) Mark has higher BMI than John. 😅' : '(v1) John has higher BMI than Mark. 😎'}`)
console.log(`${markHigherBMI2? '(v1) Mark has higher BMI than John. 😅' : '(v2) John has higher BMI than Mark. 😎'}`)


//  _________ BMI CALCULATOR____________
function calculateBMI(mass,height){
    const BMI= mass/ (height**2)
    return BMI;

}




// __________________OUTPUT______________________


// (v1) Mark has higher BMI than John. 😅
// (v2) John has higher BMI than Mark. 😎




