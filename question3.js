const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a lunch money management system for students. The function will take in a student's name, the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.

- If the student has enough money to buy lunch, display "[student name] purchased [lunch item] purchased!"
- If the student does not have enough money, display "[student name] does not have sufficient funds to buy [lunch item]!"

CHALLENGE (SAVE FOR LAST):
- Show the remaining balance if the student has enough money to buy lunch
  - "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"

- Show the amount of money still needed balance if the student does not have enough money
  - "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
  
- If the student's remaining balance is less than $5, display "Warning: Low balance!"
- If the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds."

*/

// Planning:
// Function Name: BuyLunch
// There are 4 inputs in this function: StudentName (String), LunchMoney(Number), LunchItem(String), LunchCost(Number)
// Use LunchMoney compare to LunchCost and output the statement with corresponding StudentName and LunchItem
// 2 conditions: 
// Condition 1: if LunchMoney >= LunchCost(Number), output "[student name] purchased [lunch item]! Remaining Balance [balance]"
// Condition 2: if LunchMoney < LunchCost(Number), output "[student name] does not have sufficient funds to buy [lunch item]!"


// Planning Challenge:
// 4 new conditions:
// LunchMoney>=LunchCost, Balance == LunchMoney - LunchCost;  "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"
// LunchMoney<LunchCost, Balance == LunchMoney - LunchCost; "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
// If Balance == LunchMoney - LunchCost < 5, display "Warning: Low balance!"
// If Balance == LunchMoney - LunchCost <0, Balance depleted! Please add more funds.


//determine a proper function name and parameter variable name



function BuyLunch(StudentName, LunchMoney, LunchItem, LunchCost){
  if ((LunchMoney>=LunchCost) && (LunchMoney - LunchCost)<5){
    console.log(`${StudentName} purchased ${LunchItem}! Remaining Balance: $ ${LunchMoney - LunchCost}`);
    console.log("Warning: Low balance!");
  } else if ((LunchMoney<LunchCost) && (LunchMoney - LunchCost)<0){
    console.log (`${StudentName} does not have sufficient funds to buy ${LunchItem}! Needs $ ${Math.abs(LunchCost-LunchMoney)}!`)
    console.log("Balance depleted! Please add more funds");
  }
}

/*

//determine a proper function name and parameter variable name
function BuyLunch(StudentName, LunchMoney, LunchItem, LunchCost){
  if (LunchMoney>=LunchCost){
    console.log(`${StudentName} purchased ${LunchItem}!`);
  } else if (LunchMoney<LunchCost){
    console.log (`${StudentName} does not have sufficient funds to buy ${LunchItem}!`)
  }
}

*/


function StartApp(){
  readline.question("What is your Student Name?", StudentName1 => {
    let StudentName=StudentName1;

    readline.question('How much are you paying for lunch?', LunchMoney1=> {
      let LunchMoney=Number(LunchMoney1);

      readline.question('What lunch item would you like to purchase?', LunchItem1 => {
      let LunchItem=LunchItem1;

        readline.question('How much is the lunch item that you would like to purchase?', LunchCost1 => {
        let LunchCost=Number(LunchCost1);

          //call your function here.
          BuyLunch(StudentName, LunchMoney, LunchItem, LunchCost)

          // readline.close();
          if(LunchCost1== "quit"){
            StartApp();
          } else {
            readline.close();
          }
        })
      })
    });
  });
}

StartApp();