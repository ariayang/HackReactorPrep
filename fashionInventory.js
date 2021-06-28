function renderInventory(inventory) {
// inventory is [designer1, designer2, ...]
// obj: { name: ..., shoes: [shoe1, shoe2, ...]}
// shoe1: {name: , price}
// return string output, flatlist
// create a arr of lines, each line ends with \n (for loop)
    var resultArr = [];
    for (designer of inventory) {
        var shoesArr = designer['shoes'];
        for (shoe of shoesArr) {
            var line = designer.name + ', ' + shoe.name + ', ' + shoe.price;
            resultArr.push(line);
         }
    }
    var result = resultArr.join('\n');
    result += '\n';
    return result;
}

//Create helper functions if needed
var currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
];

console.log(renderInventory(currentInventory));
