/**
 * Binary search is a technique for very rapidly searching a sorted collection 
 * by cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).
 */

function binarySearch(inputArray, target) {
    // pick the midpoint index: Math.floor(inputArray_current_Range / 2)
    // current range: start, end
    // compare target to the inputArray[midpoint]
    // if higher, start moves to the midpoint + 1
    // if lower, end moves to the midpoint - 1
    var startIndex = 0;
    var endIndex = inputArray.length - 1;
    while(startIndex <= endIndex) {
        var midIndex = Math.floor((startIndex + endIndex) / 2);
        if (inputArray[midIndex] < target) {
            startIndex  = midIndex + 1;
        } else if (inputArray[midIndex] > target) {
            endIndex = midIndex - 1;
        } else {
            return midIndex;
        }
    }
    return null;
}

// assertEqual: compare result string and expected string
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '] expected ' + expected + ', but got ' + actual);
    }
}

// Test cases
var inputArray = [1, 3, 16, 22, 31, 33, 34];
var actual = binarySearch(inputArray, 31); // => 4
var expected = 4;
assertEqual(actual, expected, 'Binary search for target number 31');

//var inputArray = [1, 3, 16, 22, 31, 33, 34];
var actual = binarySearch(inputArray, 30); // => 4
var expected = null;
assertEqual(actual, expected, 'Binary search for target number 31');

var actual = binarySearch(inputArray, 1); // => 4
var expected = 0;
assertEqual(actual, expected, 'Binary search for target number 31');