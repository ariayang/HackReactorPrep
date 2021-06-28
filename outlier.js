/* Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd */

function detectOutlierValue(numbers) {  //numbers is a string, separated by ' '
    // split the numbers into an array of numbers: numbers.split(' ')
    var numbersArray = numbers.split(' ');
    // detect if the number is odd or even, resultArray = [0(even), 1(odd), ...], var oddCount++, evenCount++
    //var oddEvenArray = [];
    var evenCount = 0;
    var oddCount = 0;
    var oddIndex = 0;
    var evenIndex = 0;
    //var resultIndex = 0;
    for (var i = 0; i < numbersArray.length; i++) {
        var currentNum = Number(numbersArray[i]);
        if ( currentNum % 2 === 0) {
            evenCount++;
            //console.log('evenCount = ' + evenCount);
            if (evenCount === 1) {
                evenIndex  = i + 1;
            }
        } else {
            oddCount++;
            //console.log('oddCount = ' + oddCount);
            if (oddCount === 1) {
                oddIndex  = i + 1;
                //console.log('oddIndex = ' + oddIndex);
            }
        }
    }
    // if oddCount == 1, find the index of 1(odd); else, find the index of 0(even)
    // index = index + 1; return index
    if (oddCount === 1) { 
        return oddIndex;
    } else {
        return evenIndex;
    }
}

////AssertEqual: actual vs expected
function assertEqual(actual, expected) {
    if (actual === expected) { 
        console.log('passed');
    } else {
        console.log('FAILED expected ' + expected + ', but got ' + actual);
    }
}

//Test case
var actual = detectOutlierValue("2 4 7 8 10");  // => 3
var expected = 3;
assertEqual(actual, expected); 

var actual = detectOutlierValue("1 10 1 1");  //=> 2
var expected = 2;
assertEqual(actual, expected); 