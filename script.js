var createPolitician = function(name, partyColor) {
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;

  return politician;
};
var jane = createPolitician("Jane Doe", [132, 17, 11]);
var john = createPolitician("John Doe", [245, 141, 136]);

var winner = "";

// Election results by state
jane.electionResults = [5, 1, 7, 2, 33,  6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

john.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

// change state results that were initially miscounted
jane.electionResults[9] = 1; //Florida
jane.electionResults[4] = 17; //California
jane.electionResults[43] = 11; //Texas

john.electionResults[9] = 28; //Florida
john.electionResults[4] = 38; //California
john.electionResults[43] = 27; //Texas

//console.log(jane.electionResults);
//console.log(john.electionResults);

// State Results
var setStateResults = function(state) {
  theStates[state].winner = null;

  if(jane.electionResults[state] > john.electionResults[state]) {
    theStates[state].winner = jane;
  } else if (jane.electionResults[state] <
    john.electionResults[state]) {
      theStates[state].winner = john;
  } else {
    winner = draw;
  }

  var stateWinner = theStates[state].winner;

    if(stateWinner !== null) {
      theStates[state].rgbColor = stateWinner.partyColor;
    } else {
      theStates[state].rgbColor = RGB[11, 32, 57];
    }
};

// method to tally the votes for each politician
politician.addTotalVotes = function() {
  this.totalVotes = 0;
  for (var i = 0; i < this.electionResults.length; i++) {
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
};

jane.addTotalVotes();
john.addTotalVotes();

console.log(jane.totalVotes);
console.log(john.totalVotes);

// declares the winner
if(jane.totalVotes > john.totalVotes) {
  winner = jane.name;
} else if (jane.totalVotes < john.totalVotes) {
  winner = john.name;
} else {
  winner = "We have a tie!";
}
winner();

console.log("The winner is " + winner + "!!!");

// assign a party color to each politician
// var jane = createPolitician("Jane Doe", [132, 17, 11]);
// var john = createPolitician("John Doe", [245, 141, 136]);

console.log("Jane's color is: " + jane.partyColor);
console.log("John's color is: " + john.partyColor);
