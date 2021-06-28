// To flip every chunk of n characters
function flipEveryNChars(input, n) {
    //input is a string, break it into chunks of n characters, in an array
    var size = input.length;
    var numOfChunks = Math.ceil(size / n); 
    //Better way, split the input into character array: characters 
    //operate on every n charcters, currentSlice = characters.slice(i, i+n), 
    // reversedSlice = currentSlice.reverse(), then join reversedSlice.join('')
    // result: flipped += joinedSlice
    var arr = [];
    for (var i = 0; i < numOfChunks - 1; i++) {
        arr[i] = input.slice(i * n, (i + 1) * n );
        //console.log(arr[i]);
        arr[i] = flip(arr[i]);
    }
    //last chunk
    arr[numOfChunks -1] = input.slice((numOfChunks -1) * n, input.length);
    arr[i] = flip(arr[i]);
    // use helper function to flip the chunk, return the string
    // put the reversed string back to the array
    // join strings together with ' '
    var result = arr.join('');
    return result;
}

function flip(input) {
    var result = '';
    var n = input.length;
    for (var i = n - 1; i >= 0; i--) {
        result += input[i]; 
        //result = result.concat(input[i]);
        //console.log('result: ' + result + ' input: ' + input[i]);
    }
    return result;
}




//AssertEqual: actual vs expected
function assertEqual(actual, expected) {
    if (actual === expected) { 
        console.log('passed');
    } else {
        console.log('FAILED expected ' + expected + ', but got ' + actual);
    }
}

//Test case
/*var input = 'love';
var actual = flip('love', input.length);
var expected = 'evol';
ssertEqual(actual, expected); */

var input = 'a short example';
var actual = flipEveryNChars(input, 5);
var expected = 'ohs axe trelpma';
assertEqual(actual, expected); // --> ohs axe trelpma
