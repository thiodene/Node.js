'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

// ----------------------------------------------------------------------------------

function getMaxLessThanK(n, k) {
    // loop from min n to upper
    let i; 
    let j;
    let max = 0;
    let inter = 0;
    for (i = 1; i <= n - 1; i++){
        for (j = i + 1; j <= n; j++){
            inter++;
            if ((i & j) < k && (i & j) > max)
                max = i & j;
        }
    }
    return max;
}

// ----------------------------------------------------------------------------------

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}
