let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Task #1: create a generateTarget() function that returns a random integer between 0 & 9.
const generateTarget = () => {
  return Math.floor(Math.random () * 10);
}

console.log(generateTarget());

// Task #2: create compareGuesses() function

const compareGuesses = (humanGuess, computerGuess, secretGuess) => {
  const humanDifference = Math.abs(secretGuess - humanGuess);
  const computerDifference = Math.abs(secretGuess - computerGuess);

  // shorthand for below if/else function: return humanDifference <= computerDifference;
  if (humanDifference <= computerDifference) {
    return true;
} else {
  return false;
}
};

// Task #3: create updateScore() function that increases winner's score by 1
const updateScore = winner => {
  if (winner === 'human') {
    humanScore ++;
  } else if (winner === 'computer') {
    computerScore ++;
  }
};

// Task #4: create advanceRound() function that increases value of currentRoundNumber by 1
const advanceRound = () => {
  currentRoundNumber++;
}

// Task #5: test the code & play the game

//Bonus Task #6: create getAbsoluteDistance() function that takes 2 numbers & returns the distance. Use getAbsoluteDistance() funtion inside the compareGuesses() function. Check if user guess is between 0 and 9 and add alert() if number is out of range.
/* const compareGuesses = (humanGuess, computerGuess, secretGuess) => {
  const getAbsoluteDistance = (humanDifference, computerDifference) => {
      return humanDifference = Math.abs(secretGuess - humanGuess);
      return computerDifference = Math.abs(secretGuess - computerGuess);
    }
  // shorthand for below if/else function: 
  return humanDifference <= computerDifference;
  if (humanGuess < 0 && humanGuess > 10) {
    alert('Number needs to be between 0 and 10.');
  }
}; */
