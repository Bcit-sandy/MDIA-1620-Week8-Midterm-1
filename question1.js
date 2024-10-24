const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, display "Access Granted!"
- If the user's input does not match, display "Access Denied!"
- If the user's input is "forgot", display "Here is a hint"
- If the user's input is "reset", display "Let's reset your account"

CHALLENGE (SAVE FOR LATER)
- if the password set is "forgot" or "reset", and the user's input matches the password exactly. Aside from Access Granted, also display, "This password you set should not be used because it glitches the system".
- the password set needs to be 5 characters or more, if it is below 5 characters, display "Password is inadequate"
*/

// Planning:
// Function name: CheckPassword --> Compare 2 input variables
// This function requires 2 input variables: UserInput (string), Password (string)
// There are 4 conditions in total: 
// Condition1 : UserInput is exactly the same as Passowrd; UserInput === Passowrd, display "Access Granted!"
// Condition2: UserInput === "forgot",  display "Here is a hint"
// Condition3: UserInput === "reset", display "Let's reset your account"
// Condition4: If none of the above case, return "Access Denied!"


// Challenge Planning (add 2 more conditions):
// If  Password==="forgot" || Password=== "reset" && UserInput === Passowrd; return "This password you set should not be used because it glitches the system".
// If Password.length <5; return "Password is inadequate";

//determine a proper function name and parameter variable name
function CheckPassword(UserInput, Password){
  if (Password.length <5){
    console.log ("Password is inadequate.");
  } else if ((Password ==="forgot" || Password=== "reset") && (UserInput === Password)){
    console.log ("This password you set should not be used because it glitches the system.");
  } else if (UserInput === Password){
    console.log("Access Granted!");
  } else if (UserInput === "forgot"){
    console.log("Here is a hint");
  } else if (UserInput === "reset"){
    console.log("Let's reset your account.");
  } else {
    console.log ("Access Denied!");
  }
}

//CHALLENGE FUNCTION


function StartApp(){
  readline.question("Set a passowrd:", Password1=> {
    let Password=Password1;

    readline.question("What is your passowrd? Please enter: ", UserInput1 => {
      let UserInput=UserInput1;

      //call your function here.

      CheckPassword(UserInput, Password)

      // readline.close();
      if(UserInput1== "quit"){
        StartApp();
      } else {
        readline.close();
      }
    });
  });
}

StartApp();