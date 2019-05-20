/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let count = 0;
    for (var key in objects) {
        //const [firstkey, secondkey] = obj[Object.keys(obj);
        //if (obj[Object.keys(obj)[0]] == obj[Object.keys(obj)[1]])
        if (objects[key].x == objects[key].y)
            count++;

        //for (var i in obj) {
        //    count++;
        //}
    }
    //return obj.x;
    //return obj[Object.keys(obj)[0]];
    //return Object.keys(obj)[1];
    return count;
}

//---------------------------------------------------------------------------------------------------------

function main() {
    const n = +(readLine());
    let objects = [];
    
    for (let i = 0; i < n; i++) {
        const [a, b] = readLine().split(' ');
        
        objects.push({x: +(a), y: +(b)});
    }
    
    console.log(getCount(objects));
}
