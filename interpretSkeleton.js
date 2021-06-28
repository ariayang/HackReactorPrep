// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual word into individual letters.
  //Not sure if I need to include word = word.toLowerCase();
  var arr = word.split('');
  // Count the instances of each letter
  var obj = {};
  for (char of arr) {
      if (char in obj) {
          obj[char]++;
      } else {
          obj[char] = 1;
      }
  }
  // Iterate all the counts and find the highest
  var highestCount = 0;
  for (key in obj) {
      if (obj[key] > highestCount) {
          highestCount = obj[key];
      }
  }
  // Return this word's max repeat count
  return highestCount;
}

function findFirstWordWithMostRepeatedChars(text) {
  var maxRepeatCountOverall = 0;
  var wordWithMaxRepeatCount = '';

  // Break up input text into words (space-delimited).
  var arr = text.split(' ');
  // For each word...
  for (word of arr) {
    var repeatCountForWord = findMaxRepeatCountInWord(word);
    // If that max repeat count is higher than the overall max repeat count, then
      // update maxRepeatCountOverall
      // update wordWithMaxRepeatCount
    if (repeatCountForWord > maxRepeatCountOverall) {
        maxRepeatCountOverall = repeatCountForWord;
        wordWithMaxRepeatCount = word;
    }
  }
  return wordWithMaxRepeatCount;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected) {
    if (actual === expected) {
        console.log('pass');
    } else {
        console.log('FAILED expected ' + expected + ' but got ' + actual);
    }
}

// TESTS CASES
/*
var word = 'maximum';
var actual = findMaxRepeatCountInWord(word);
assertEqual(actual, 3);

var word = 'm';
var actual = findMaxRepeatCountInWord(word);
assertEqual(actual, 1);

var word = '';
var actual = findMaxRepeatCountInWord(word);
assertEqual(actual, 0);
*/


var inputText = "I have a dream, to count maximum word";
assertEqual(findFirstWordWithMostRepeatedChars(inputText), 'maximum');

var inputText = 'I';
assertEqual(findFirstWordWithMostRepeatedChars(inputText), 'I');
