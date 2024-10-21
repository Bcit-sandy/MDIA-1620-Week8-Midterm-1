const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.

- If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
- If the score is between 72 and 85, display "Great job! [Student Name] has a B."
- If the score is between 60 and 72, display "Good effort! [Student Name] has a C."
- If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
- If the score is below 50, display "Fail. [Student Name] has a F."

CHALLENGE (SAVE FOR LAST):
- If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
  -For example, 48 would give you "Almost there! [Student Name] is close to a D."
- If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
  -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."
*/

// Planning:
// Function name: GradingSystem
// Function will take a number (called score) and Student Name as inputs, identify whether it is in a range of numbers then output a sentence 
// StudentName is a let string for output use
// There are 5 conditions:
// Condition1: score>=86, display "Excellent! [Student Name] has an A".
// Condition2: score >=72 && score <86, display "Great job! [Student Name] has a B."
// Condition3: score>=60 && score<72,display "Good effort! [Student Name] has a C."
// Condition4: score>=50 && score<60, display "Needs improvement. [Student Name] has a D."
// Condition5: score<50; display "Fail. [Student Name] has a F."


//Challenge planning:
// 8 more conditions:
// If score within 2 points of the next grade bracket,display "Almost there! [Student Name] is close to a [next grade]."
// If student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."


//determine a proper function name and parameter variable name
function GradingSystem(score, StudentName){

  let Next_Previous_Grade = "ABCDF"
  if (score==84||score==85){
    console.log (`Almost there! ${StudentName} is close to a ${Next_Previous_Grade[0]}.`);      //close to A
  } else if (score==87||score==88){
    console.log(`Work Hard! ${StudentName} is almost falling to ${Next_Previous_Grade[1]}.`)    //almost falling B
  } else if (score>=86){
    console.log(`Excellent! ${StudentName} has an A.`)
  } else if (score==70||score==71){
    console.log (`Almost there! ${StudentName} is close to a ${Next_Previous_Grade[1]}.`);  //close to B
  } else if (score==73||score==74){
    console.log(`Work Hard! ${StudentName} is almost falling to ${Next_Previous_Grade[2]}.`)  //almost falling C
  }else if (score >=72 && score <86){
    console.log(`Great job! ${StudentName} has a B`)
  } else if  (score==58||score===59){
    console.log (`Almost there! ${StudentName} is close to a ${Next_Previous_Grade[2]}.`);    //close to C
  } else if (score==61||score==62){
    console.log(`Work Hard! ${StudentName} is almost falling to ${Next_Previous_Grade[3]}.`)    //almost falling D
  } else if (score>=60 && score<72){
    console.log(`Good effort! ${StudentName} has a C.`)
  } else if (score==51||score==52){
    console.log(`Work Hard! ${StudentName} is almost falling to ${Next_Previous_Grade[4]}.`)    //almost falling F
  } else if (score>=50 && score<60){
    console.log(`Needs improvement. ${StudentName} has a D.`)
  } else if (score==48||score==49){
    console.log (`Almost there! ${StudentName} is close to a ${Next_Previous_Grade[3]}.`);  //close to D
  } else if (score<50){
    console.log(`Fail. ${StudentName} has a F.`);
  }
}


/* if (score>=86){
    console.log(`Excellent! ${StudentName} has an A.`)
  } else if (score >=72 && score <86){
    console.log(`Great job! ${StudentName} has a B`)
  } else if (score>=60 && score<72){
    console.log(`Good effort! ${StudentName} has a C.`)
  } else if (score>=50 && score<60){
    console.log(`Needs improvement. ${StudentName} has a D.`)
  } else if (score<50){
    console.log(`Fail. ${StudentName} has a F.`)

*/


function StartApp(){
  readline.question("What is the Student's Name?", StudentName1 => {
    let StudentName=StudentName1 ;

    readline.question("What is the Student's score?", score1 => {
      let score=Number(score1);

      GradingSystem(score, StudentName)

      // readline.close();
      if(score1 !== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();