// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
    var newArray = [];
  
    for (var i = 0; i < array.length; i++) {
      element = array[i];
      var result = callbackFunction(element);
      newArray.push(result);
    }
  
    return newArray;
  }
  
  function cubeAll(numbers) {
    return map(numbers, function(n) {
      return n ** 3;
    });
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  function assertArraysEqual(actual, expected, testName) {
      var sameLength = actual.length === expected.length;
      var sameValue = true;
      for (var i = 0; i < expected.length; i++) {
          if (actual[i] !== expected[i]) {
              sameValue = false;
              break;
          }
      }
      if (sameLength && sameValue) { 
          console.log('passed');
      } else {
          console.log('FAILED [' + testName + '] expected ' + expected + ', but got ' + actual);
      }
  }

  function addOne(val) {
    return val + 1;
  }
  
  // TESTS CASES
  /**var array = [1, 2];
  var expected = [2, 3];
  var actual = addOne(array);
  assertArraysEqual(actual, expected, 'Add one to every element');
*/
  var array = [1, 2];
  var actual = map(array, addOne);
  var expected = [2, 3];
  assertArraysEqual(actual, expected, 'Add one, map');

  var array = [1, 2, 3];
  var expected = [1, 8, 27];
  var actual = cubeAll(array);
  assertArraysEqual(actual, expected, 'Cube every array element');
  
  var expected = [1, 8, 27, 64];
  assertArraysEqual(actual, expected, 'Cube every array element');