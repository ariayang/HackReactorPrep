function splitPairs(input) {
    // // if odd size, for the last char, adds a '_' to the end of the string
    // slice the string to pair of chars, then gets added to a result array
    var stringLength = input.length;
    var result = [];
    if (stringLength === 0) {
        return result;
    }
    if (stringLength % 2 === 1) {
        input = input + '_';
        stringLength++;
    }
    for (i = 0; i < stringLength; i = i + 2) {
        var currentslice = input.slice(i, i + 2);
        result.push(currentslice);
    }
    return result;
}

//assertArraysEqual
function assertArraysEqual(actual, expected, testName) {
    //assertEqual array length, same value
    var sameLength = false;
    var sameValue = true;
    if (actual.length === expected.length) { 
        var sameLength = true;
    } 

    for (var i = 0; i < expected.length; i++) {
        if (expected[i] !== actual[i]) {
            sameValue = false;
        } 
    }

    if (sameLength && sameValue) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '] expected ' + expected + ', but got ' + actual);
    }
}

//test cases
var inputString = 'hello ';
var actual = splitPairs(inputString);
var expected = ['he', 'll', 'o '];
assertArraysEqual(actual, expected, 'Split string into pairs of characters');

var inputString = 'hello';
var actual = splitPairs(inputString);
var expected = ['he', 'll', 'o_'];
assertArraysEqual(actual, expected, 'Split string into pairs of characters');

var inputString = '';
var actual = splitPairs(inputString);
var expected = [];
assertArraysEqual(actual, expected, 'Split string into pairs of characters');
