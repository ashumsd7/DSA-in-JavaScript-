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
    


    // _______________________v1___________________   using if else as directed in pdf

    if(markHigherBMI1){
         console.log(`(v1) Mark has  higher BMI ${marksBMI1} than John's BMI ${JohnsBMI1}. 😅`)
      
    }else{
        console.log(`(v1) John has  higher BMI ${JohnsBMI1} than Mark's BMI ${marksBMI1}. 😅`)
    }


    // ______________________v2____________________
    
    if(markHigherBMI2){
         console.log(`(v1) Mark has  higher BMI ${marksBMI2} than John's BMI ${JohnsBMI2}. 😅`)
      
    }else{
        console.log(`(v1) John has  higher BMI ${JohnsBMI2} than Mark's BMI ${marksBMI2}. 😅`)
    }
    
    
    //  _________ BMI CALCULATOR____________
    function calculateBMI(mass,height){
        const BMI= mass/ (height**2)
        return BMI;
    
    }
    
    
    
    
    // __________________OUTPUT______________________
    
    
    // (v1) Mark has  higher BMI 27.309968138370508 than John's BMI 24.194608809993426. 😅
    // (v1) John has  higher BMI 27.44059917355372 than Mark's BMI 26.87867813490267. 😅
    
    
    
    