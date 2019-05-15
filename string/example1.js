/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    var rs = '';
    if (typeof (s) == "string") {
        for (var i = s.length - 1; i >= 0; i--) {
            rs += s.substr(i, 1);
            //console.log(s.substr(i, 1));
            //console.log(i);
        }
    }
    else
    {
        console.log("s.split is not a function");
        console.log(s);
    }
    console.log(rs);
}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}
