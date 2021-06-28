// Skeleton

// FUNCTION DEFINITION(S)
function PhoneNumberFormatter(numbers) {
    this.numbers = numbers;
    
}

PhoneNumberFormatter.prototype.slice = function(start, end) {
    return this.numbers.slice(start, end).join('');
};
  
PhoneNumberFormatter.prototype.getAreaCode = function() {
    //this.areaCode = this.slice(0, 3);
    return this.slice(0, 3);
};
  
PhoneNumberFormatter.prototype.getExchangeCode = function() {
    //this.exchangeCode = this.slice(3, 6);
    return this.slice(3, 6);
};
  
PhoneNumberFormatter.prototype.getLineNumber = function() {
    //this.lineNumber = this.slice(6, 10);
    return this.slice(6, 10);
};
  
PhoneNumberFormatter.prototype.parenthesize = function(string) {
    return '(' + string + ')';
};
 
PhoneNumberFormatter.prototype.render = function() {
    var string = '';
    // your code here
    string = this.parenthesize(this.getAreaCode()) + ' ' + this.getExchangeCode() + '-' + this.getLineNumber();
    return string;
};
  
// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected) {
    if (actual === expected) {
        console.log('passed');
    } else {
        console.log('FAILED expected ' + expected + ' , but got ' + actual);
    }
}
  
// TESTS CASES
var inputNumber =  [6, 5, 0, 8, 3, 5, 9, 1, 7, 2];
var expected = '(650) 835-9172';
var myNumber = new PhoneNumberFormatter(inputNumber);
actual = myNumber.render();
//var expected = '6508359172';
assertEqual(actual, expected);