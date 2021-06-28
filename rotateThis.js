/** Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

Extra hint: (click the drop down to ROT7 to see hint)
If you double the string, you'll be able to find another string inside the doubled string using familiar String methods.

Doubled string: 'hello worldhello world'
Search w/in it: '       orldhello w    ' */
function isRotate(string1, string2) {
    // construct a string with string1 + string1
    var doubleString1 = string1 + string1;
    //search if string2 inside doubleString1
    // check string2.length; check if doubleString1.slice(start, end) (loop the start) equals to string2
    var str2Length = string2.length;
    for (var i = 0; i < doubleString1.length - str2Length; i++) {
        var sliceStr1 = doubleString1.slice(i, i + str2Length);
        if (string2 === sliceStr1) {
            return true;
        }
    }
    return false;
}

//assertEqual: compare result string and expected string
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log('FAILED [' + testName + '] expected ' + expected + ', but got ' + actual);
    }
}

// Test cases:
var string1 = 'hello world'; 
var string2 = 'orldhello w'
assertEqual(isRotate(string1, string2), true, 'The two strings are rotated versions of each other?');
var string3 = 'orldhello';
assertEqual(isRotate(string1, string3), false, 'The two strings are rotated versions of each other?');