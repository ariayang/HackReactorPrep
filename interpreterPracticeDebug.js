var numbers = [5, 3, 8, 6, 9, 1, 0, 2, 2];
/**var counts = {
    'odd': 0,
    'even': 0
};*/
//console.log(numbers.reduce());

var oddEvenCounts = numbers.reduce(function(counts, number) {
  if (isOdd(number)) {
    //console.log(number); // only ran twice
    if ('odd' in counts) { 
        counts['odd']++; 
    } else {
        counts['odd'] = 1;
    }
    
  } else {
    //console.log(number); 
    if ('even' in counts) { 
        counts['even']++; 
    } else {
        counts['even'] = 1;
    }
  }
  return counts;
}, {});

function isOdd(number) {
    return number % 2 === 1; 
}

console.log(oddEvenCounts);


