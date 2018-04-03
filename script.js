  var createPolitician = function(name) {
    var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;

    return politician;
};
var jane = createPolitician("Jane Doe");
var john = createPolitician("John Doe");

var winner = "";

jane.electionResults = [5, 1, 7, 2, 33,  6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

john.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

// change votes for specific index (relates to state from excel spreadsheet- votes counted incorrectly)
jane.electionResults[9] = 1;
john.electionResults[9] = 28;

jane.electionResults[4] = 17;
john.electionResults[4] = 38;

jane.electionResults[43] = 11;
john.electionResults[43] = 27;

console.log(jane.electionResults);
console.log(john.electionResults);

// method to get the total sum of votes for each politician
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
