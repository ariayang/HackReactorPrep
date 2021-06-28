// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj['lastName'];

  //if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  //}

  return obj;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual (actual, expected, testName) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
    
    if (actual === expected) { 
        console.log('passed'); 
    } else {
        console.log('FAILED [' + testName + '] expected ' + expected + ', but got ' + actual)
;    }
}


// TESTS CASES
var inputObj = {
    firstName: 'John',
    lastName: 'Smith'
};
var expected = {
    firstName: 'John',
    lastName: 'Smith',
    fullName: 'John Smith'
};
actual = addFullNameProp(inputObj);
assertObjectsEqual(actual, expected, 'Add Full name');