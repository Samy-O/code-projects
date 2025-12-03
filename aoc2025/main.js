const fs = require('fs');
let dialValue = 50;
let zeros = 0;

const lines = fs.readFileSync('input.txt', 'utf8').split('\r\n');

lines.forEach((line) => {
    let inputDirection = String(line.slice(0,1));
    let inputValue = parseInt(line.slice(1));

    if (inputDirection === 'R') {
        let sum = dialValue + inputValue;
        if (sum > 100){
            zeros += Math.floor(sum/100);
        };
        dialValue = (sum % 100);
        
        
    }
    
        if (inputDirection === 'L') {
            let diff = dialValue - inputValue;
            if (diff < 0) {
                zeros += Math.ceil(Math.abs(diff) / 100);
                dialValue = ((diff % 100) + 100) % 100;
            } else {
                dialValue = diff;
            }
        }
console.log(`Zeros: ${zeros} - Dial Value: ${dialValue}`);

});

console.log(zeros);