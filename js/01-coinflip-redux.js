
var chance = window.prompt('Select number of times you are going to flip the coin:');
for(let i=1; i <= chance; i++) {
    var coinFlip = Math.round(Math.random());
    if (coinFlip == 0) {
        console.log(`Head`);
    } 
    else {
        console.log(`Tail`);
    }
}