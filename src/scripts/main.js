// My favourite colour is blue

var AnagramGame;

AnagramGame = function() {

this.randomString = "areallylongword";

this.wordBase = [];

this.highScore = [];

this.loadWordBase = function() {
  $.get( 'http://www.bonzagaming.com/codetest/wordlist.txt', function( data ) {
    this.wordBase = data.split('\n');
  });
};

/**

* Submit a word on behalf of a user. A word is accepted if its letters are

* contained in the base string used to construct the game AND if it

* is in the word list at http://www.bonzagaming.com/codetest/wordlist.txt.

* If the word is accepted and its score is high enough, the submission

* should be added to the high score list. If there are multiple submissions

* with the same score, all are accepted, but the first submission with that

* score should rank higher.

*

* @parameter word User's submission. All submissions may be assumed to be

* lowercase and containing no whitespace or special

* characters.

*/

this.submitWord = function (word) {
  var tmpRandomString = this.randomString.split(''),
      score = 0;
  if(!word || typeof word === 'string' && (word.length <= this.randomString.length)) {
    for (var i=0; i<word.length; i++) {
      var letterIndex = tmpRandomString.indexOf(word.charAt(i));
      if(letterIndex > 0) {
        score++;
        tmpRandomString = tmpRandomString.splice(letterIndex);
      } else {
        return false;
      }
    }
    this.postHighscore = this.postHighscore({'score' : score, 'word' : word});
    return true;
  } else { 
    return false;
  }
};


this.postHighscore = function(result) {
  var newHighscore = this.highScore;
  if(result && (newHighscore.length < 10 || newHighscore[9].score < result.score)) {
    for (var i=0; i<newHighscore.length; i++) {
      if(result.score > newHighscore[i].score) {
        var head = newHighscore.slice(0,i);
        var tail = newHighscore.slice(i);
        head.push(result);
        newHighscore = head.concat(tail);
      }
    }
    if(newHighscore.length > 10) {
      newHighscore.length = 10;
    }
  }
  return newHighscore;
};
/**

* Return word entry at given position in the high score list, 0 being the

* highest (best score) and 9 the lowest. You may assume that this method

* will never be called with position > 9.

*

* @parameter position Index on high score list

* @return word entry at given position in the high score list, or null if

* there is no entry at that position

*/

this.getWordEntryAtPosition = function (position) {

return this.highScore[position] ? this.highScore[position].word : null;

};

/**

* Return score at given position in the high score list, 0 being the

* highest (best score) and 9 the lowest. You may assume that this method

* will never be called with position > 9.

*

* @parameter position Index on high score list

* @return score at given position in the high score list, or null if there

* is no entry at that position

* What is your favourite color? Please put

* your answer in your submission (this is for testing if you have read the

* comments).

*/

this.getScoreAtPosition = function (position) {

return this.highScore[position] ? this.highScore[position].score : null;

};

};

var game = new AnagramGame();

game.loadWordBase();