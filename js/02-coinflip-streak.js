
let coinFlip1;
do {
    coinFlip1 = Math.round(Math.random());  
    if (coinFlip1 == 1) {
        console.log('Heads');  
        continue; 
    } else {
        console.log('Tails');
        break;
    }
} while (coinFlip1){
    console.log(`Game is ended!`)  
}
            
