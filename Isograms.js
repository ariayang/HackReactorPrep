// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
    if (text === '') {
        return true;
    }
    text = text.toLowerCase();
    var charSet = new Set();
  // add each char to a set
  for (char of text) {
      charSet.add(char);
  }
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set
  if (charSet.size === text.length) { 
      return true;
  } else {
      return false;
  }
}

// ASSERTION FUNCTION(S) TO BE USED
// test function to return if actual === expected
function assertEqual(actual, expected) {
    if (actual === expected) {
        console.log('pass');
    } else {
        console.log('isIsogram FAILED');
    }
}

// TESTS CASES
assertEqual(isIsogram(''), true);
assertEqual(isIsogram('Abcd'), true);
assertEqual(isIsogram('aa'), false);
assertEqual(isIsogram('aA'), false);