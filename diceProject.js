"use strict";


// initiates the start of the game
function runGame() {
  alert("Welcome to the weirdest game of dice!");
}

// enter the player's name to keep track of whose turn it is
function getUserInput() {
  let playerOneName = prompt("Enter Player One's Name:");
  let playerTwoName = prompt("Enter Player Two's Name:");

  for(let i = 0; playerOneName === ""; i++) {
    if(i > 0) {
      alert("You must enter a name.");
      }
      playerOneName = prompt("You must enter a name for player one.");
    }
  for(let i = 0; playerTwoName === ""; i++) {
    if(i > 0) {
      alert("You must enter a name.");
    }
    playerTwoName = prompt("You must enter a name for player two.");
  }
  playerOneName = standardNameEntry(playerOneName);
  playerTwoName = standardNameEntry(playerTwoName);
  playGame(playerOneName, playerTwoName);
}

// keeps count of actions not performed to get to the end of the game
function playGame(playerOneName, playerTwoName) {
  let playerOneActionNotPerformed = 0;
  let playerTwoActionNotPerformed = 0;

  while(playerOneActionNotPerformed < 5 && playerTwoActionNotPerformed < 5) {
      turn(playerOneName);
      playerOneActionNotPerformed = checkActionPerformed(playerOneName, playerOneActionNotPerformed);
    if(playerOneActionNotPerformed < 5){
      turn(playerTwoName);
      playerTwoActionNotPerformed = checkActionPerformed(playerTwoName, playerTwoActionNotPerformed);
    }
  }

  if(playerOneActionNotPerformed === 5) {
    let playerOneGameOver = alert("Game Over! Player one lost! Take two sips of apple juice!");
    startPlayingAgain(playerOneName, playerTwoName);
  }
  else if(playerTwoActionNotPerformed === 5) {
    let playerTwoGameOver = alert("Game Over! Player two lost! Take two sips of apple juice!");
    startPlayingAgain(playerOneName, playerTwoName);
  }
}

// ask if players want to start a new game function
function startPlayingAgain(playerOneName, playerTwoName) {
    let input;

    for(let i = 0; input !== "y" && input !== "n"; i++){
      if(i > 0){
        alert("You must enter a 'y' or 'n'.");
        }
        input = prompt("Do you want to play again? (Enter 'y' for yes and 'n' for no)");
      }
      if(input === "y") {
        getUserInput();
      }
      else if(input === "n") {

      }
}

// updates the players name into proper noun form 'Name'
function standardNameEntry(playerName) {

  playerName = playerName.toLowerCase();
  let nameArray = playerName.split(" ");
  let capPlayerName = [];
  let capitalNamesArray = [];

  for (let i = 0; i < nameArray.length; i++) {
    let capitalizedLetter = nameArray[i].charAt(0).toUpperCase();
    let restOfName = nameArray[i].slice(1);
    let capitalizedName = capitalizedLetter + restOfName;

    capitalNamesArray.push(capitalizedName);
    //nameArray[] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1); //(does all the 'lets' in the ForLoop) ask mike about which loops to remove if used
    }
    capPlayerName = capitalNamesArray.join(" ");
    return capPlayerName;
}

// lets the player know they are starting their turn to get their next action
function turn(playerName){
  alert(playerName + "'s turn.");
  alert("Start your turn by rolling the 10-sided die to determine what action dice to roll.");
  let tenSidedRollResult = rollDie(10);
  tellThePlayer10Roll(tenSidedRollResult);
  pickNextDice(tenSidedRollResult);
}

// let's the player know what to do if an action was not performed and adds the number of actions in playGame
function checkActionPerformed(playerName, unperformedActions) {
  let input;

  for(let i = 0; input !== "y" && input !== "n"; i++){
    if(i > 0){
      alert("You must enter a 'y' or 'n'.");
      }
      input = prompt("Did the player complete the action? (Enter 'y' for yes and 'n' for no)");
    }
  if(input === "y") {

  }
  else if(input === "n") {
    alert("You did not perform the action. Take a sip of apple juice.");
    unperformedActions++;
    console.log(playerName + " has " + unperformedActions + " action(s) not performed. If you get to 5 actions not performed, you lose!");
  }
  return unperformedActions;
}

// let's the player know what action die to roll
function tellThePlayer10Roll(roll) {
  if(roll === 1 || roll === 6) {
    alert("You rolled a 1 or 6 and got Facial Expression Action! Now lets see what you will roll next!");
  }
  else if(roll === 2 || roll === 7) {
    alert("You rolled a 2 or 7 and got Physical Action! Now lets see what you will roll next!");
  }
  else if (roll === 3 || roll === 8) {
    alert("You rolled a 3 or 8 and got Drawing Action! Now lets see what you will roll next!");
  }
  else if (roll === 4 || roll === 9) {
    alert("You rolled a 4 or 9 and got Sports Action! Now lets see what you will roll next!");
  }
  else if (roll === 5 | roll === 10) {
    alert("You rolled a 5 or 10 and got Exercise Action! Now lets see what you will roll next!");
  }
}

// let's the player know which action die they are rolling and then what action to perform after the die is rolled
function pickNextDice(roll) {
  //use if/else because of the "or" condition -- with individual results, try using a switch case
  if(roll === 1 || roll === 6) {
    alert("You are rolling the 4-sided Facial Expression Action die.");
    //add tellThePlayer10Roll(roll) to each else if statement
    //tellThePlayer10Roll(roll);
    let fourSidedRollResult = rollDie(4);
    chooseFacialAction(fourSidedRollResult);
  }
  else if(roll === 2 || roll === 7) {
    alert("You are rolling the 6-sided Physical Action die.");
    //tellThePlayer10Roll(roll);
    let sixSidedRollResult = rollDie(6);
    choosePhysicalAction(sixSidedRollResult);
  }
  else if(roll === 3 || roll === 8) {
    alert("You are rolling the 8-sided Drawing Action die.");
    //tellThePlayer10Roll(roll);
    let eightSidedRollResult = rollDie(8);
    chooseDrawingAction(eightSidedRollResult);
  }
  else if (roll === 4 || roll === 9) {
    alert("You are rolling the 12-sided Sports Action die.");
    //tellThePlayer10Roll(roll);
    let twelveSidedRollResult = rollDie(12);
    chooseSportsAction(twelveSidedRollResult);
  }
  else if (roll === 5 | roll === 10) {
    alert("You are rolling the 20-sided Excercise Action die.");
    //tellThePlayer10Roll(roll);
    let twentySidedRollResult = rollDie(20);
    chooseExerciseAction(twentySidedRollResult);
  }
}


function chooseFacialAction(roll) {
  if (roll === 1) {
    alert("You rolled a 1! Make an angry face!");
  }
  else if (roll === 2) {
    alert("You rolled a 2! Make a sad face.");
  }
  else if (roll === 3) {
    alert("You rolled a 3! Make a funny face!");
  }
  else if (roll === 4) {
    alert("You rolled a 4! Make a constipated face.");
  }
  //use a switch statment for the roll result if you want
}


function choosePhysicalAction(roll) {
  if (roll === 1) {
    alert("You rolled a 1! Give the other player a high five!");
  }
  else if (roll === 2) {
    alert("You rolled a 2! Give the other player a fist bump!");
  }
  else if (roll === 3) {
    alert("You rolled a 3! Give the other player a hand shake.");
  }
  else if (roll === 4) {
    alert("You rolled a 4! Give the other player a hug.");
  }
  else if (roll === 5) {
    alert("You rolled a 5! Kick the other player in the shin.");
  }
  else if (roll === 6) {
    alert("You rolled a 6! Lightly slap the other player in the face.");
  }
  //use a switch statment for the roll result if you want
}


function chooseDrawingAction(roll) {
  if(roll === 1) {
    alert("You rolled a 1! Draw a picture of a dog.");
  }
  else if (roll === 2) {!
    alert("You rolled a 2! Draw a picture of a cat.");
  }
  else if (roll === 3) {
    alert("You rolled a 3! Draw a picture of a bird.");
  }
  else if (roll === 4) {
    alert("You rolled a 4! Draw a picture of a mouse.");
  }
  else if (roll === 5) {
    alert("You rolled a 5! Draw a picture of a bicycle.");
  }
  else if (roll === 6) {
    alert("You rolled a 6! Draw a picture of a car.");
  }
  else if (roll === 7) {
    alert("You rolled a 7! Draw a picture of a truck.");
  }
  else if (roll === 8) {
    alert("You rolled an 8! Draw a picture of a plane.");
  }
  //use a switch statment for the roll result if you want
}


function chooseSportsAction(roll) {
  if(roll === 1) {
    alert("You rolled a 1! Act like you're getting tackled.");
  }
  else if (roll === 2) {
    alert("You rolled a 2! Act like you're throwing a fastball.");
  }
  else if (roll === 3) {
    alert("You rolled a 3! Act like you're juggling a soccer ball.");
  }
  else if (roll === 4) {
    alert("You rolled a 4! Perform the Lambeau Leap!");
  }
  else if (roll === 5) {
    alert("You rolled a 5! Act like you're swinging a golf club.");
  }
  else if (roll === 6) {
    alert("You rolled a 6! Perform a last second basketball buzzer beater shot.");
  }
  else if (roll === 7) {
    alert("You rolled a 7! Act like you're arguing with an umpire.");
  }
  else if (roll === 8) {
    alert("You rolled an 8! Perform a tennis rally with you winning the set as a result.");
  }
  else if (roll === 9) {
    alert("You rolled a 9! Act like you're tackling someone!");
  }
  else if (roll === 10) {
    alert("You rolled a 10! Act like you sank a 70ft putt!");
  }
  else if (roll === 11) {
    alert("You rolled an 11! Act like you float like a butterfly and sting like a bee!.");
  }
  else if (roll === 12) {
    alert("You rolled a 12! Act like you're playing catch with someone.");
  }
  //use a switch statment for the roll result if you want
}


function chooseExerciseAction(roll) {
  if(roll === 1) {
    alert("You rolled a 1! Do 5 jumping jacks!");
  }
  else if (roll === 2) {
    alert("You rolled a 2! Do 10 jumping jacks!");
  }
  else if (roll === 3) {
    alert("You rolled a 3! Do 5 sit-ups!");
  }
  else if (roll === 4) {
    alert("You rolled a 4! Do 10 sit-ups!");
  }
  else if (roll === 5) {
    alert("You rolled a 5! Do 5 lunges!");
  }
  else if (roll === 6) {
    alert("You rolled a 6! Do 10 lunges!");
  }
  else if (roll === 7) {
    alert("You rolled a 7! Do 5 squats!");
  }
  else if (roll === 8) {
    alert("You rolled an 8! Do 10 squats!");
  }
  else if (roll === 9) {
    alert("You rolled a 9! Do 5 sumo squats!");
  }
  else if (roll === 10) {
    alert("You rolled a 10! Do 10 sumo squats!");
  }
  else if (roll === 11) {
    alert("You rolled an 11! Perform a 10 second plank!");
  }
  else if (roll === 12) {
    alert("You rolled a 12! Perform a 20 second plank!");
  }
  else if (roll === 13) {
    alert("You rolled a 13! Run in place for 15 seconds!");
  }
  else if (roll === 14) {
    alert("You rolled a 14! Run in place for 30 seconds!");
  }
  else if (roll === 15) {
    alert("You rolled a 15! Do 5 push-ups!");
  }
  else if (roll === 16) {
    alert("You rolled a 16! Do 10 push-ups!");
  }
  else if (roll === 17) {
    alert("You rolled a 17! Do 5 '8-counts'!");
  }
  else if (roll === 18) {
    alert("You rolled an 18! Do 10 '8-counts'!");
  }
  else if (roll === 19) {
    alert("You rolled a 19! Do 5 crunches!");
  }
  else if (roll === 20) {
    alert("You rolled a 20! Do 10 crunches");
  }
  //use a switch statment for the roll result if you want
}

// generates a random number from the die
function rollDie(numberOfSides) {
    return Math.floor(Math.random() * numberOfSides) + 1;
}

runGame();
getUserInput();
