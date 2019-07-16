

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = [];
    
    for (let i=0;i<A.length;i++){
        if (0 <= A[i]){
            result[A[i]] = true;
        }
    }

    for (let i=1; i<=result.length; i++){
        if (undefined === result[i]){
            return i;
        }
    }
    
    return 1;
}

