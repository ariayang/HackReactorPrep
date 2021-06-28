/*You will be given an array that contains two strings. 
Your job is to create a function that will take those two strings 
and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W  
e o  
l r  
l l  
o d */
function transposeTwoStrings(inputArray) {
    // output string: columns: 1, number of characters in inputArray, 2 + ' ' 
    //               rows: number of characters in the longest word
    // resultArray = []; numOfRows = word.length; word is one of the strings (longer)
    // resultArray[i] = word1[i] + ' ' + word2[i];
    var resultString = [];
    var firstString = inputArray[0];
    var secondString = inputArray[1];
    var stringLength = 0;
    if (firstString.length > secondString.length) {
        stringLength = firstString.length;
        shorterLength = secondString;
    } else {
        stringLength = secondString.length;
        shorterLength = firstString.length;
    }


    for (var i = 0; i < stringLength; i++) {
        if (i < shorterLength) {
            resultString += firstString[i] + ' ' + secondString[i] + '\n';
        } else {
            resultString += (firstString[i] || ' ')  + ' ' + (secondString[i] || ' ') + '\n';
        }
        
    }
    return resultString;
}

//Test case
console.log(transposeTwoStrings(['Hello','World']));
console.log('\n');
console.log(transposeTwoStrings(['Hell!!!','World']));
console.log('\n');
console.log(transposeTwoStrings(['Hello','World!!!']));

var testArray = [[1,2], [2,3]];
console.log(testArray.toString());