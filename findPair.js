/** Given a list of non-negative integers and a target sum, 
 * find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]*/
function findPairForSum(arrayNums, targetSum) {
    // for each number in array, we want to find if sum - number exists in the array
    for (var i = 0; i < arrayNums.length; i++) {
        var numberToFind = targetSum - arrayNums[i];
        if (numberToFind in arrayNums) {
            return [parseInt(arrayNums[i]), parseInt(numberToFind)];
        }
    }
    return 'No pair found that sums to target';
}

////AssertEqual: actual vs expected
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
    console.log('sameLength: ' + sameLength);
    console.log('sameValue: ' + sameValue);

    if (sameLength && sameValue) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '] expected ' + expected + ', but got ' + actual);
    }
}

//Test case
var inputArray = [3, 34, 4, 12, 5, 2];
var terget = 9;
var actual = findPairForSum([3, 34, 4, 12, 5, 2], 9);  // => 3
var expected = [4, 5];
assertArraysEqual(actual, expected, 'Expected pair sums to the target');

//if no pair, output 'No pair found that sums to target'?