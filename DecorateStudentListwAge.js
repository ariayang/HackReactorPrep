// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList, low, high) {
  // creates an object for each string in the input array, with an age of 10 or 11
  // returns an array of these objects
  var result = [];
  for (var name of classList) {
      var obj = {};
      obj['name'] = name;
      obj['age'] = getRandomIntInclusive(low, high);
      result.push(obj);
  }
  return result;
}

// ASSERTION FUNCTION(S) TO BE USED
// actual name array should be the same as expected name array
// iterate the result/actual array, check each age is between 10 and 11
function assertFunction(actual, expected, testName, low, high) {
    var sameName = true;
    var rightAge = true;
    for (var name in expected) {
        if (!(name in actual)) { 
            sameName = false; 
            break; 
        }
        if (actual['age'] < low || actual['age'] > high) {
            rightAge = false;
            break;
        }
    }
    if (sameName && rightAge) {
        console.log('pass');
    } else {
        console.log('FAILED [' + ']');
    }
}

// TESTS CASES
// Sample Input
var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

// Sample Output
/**var classListWithAges = [{"name":"Joe","age":11},{"name":"Jack","age":10},
{"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
{"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
{"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
{"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
{"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
{"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
{"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
{"name":"Dora","age":10}];*/

var actual = decorateClassListWithAges(classList, 10, 11);
var expected = classList;
assertFunction(actual, expected, 'Age between 10 and 11', 10, 11);