/*
    Write a range function that takes two arguments, start and end , and
    returns an array containing all the numbers from start up to (and in-
    cluding) end .
*/
my_array = [];

function range(start, end){
    for(var i = start; i <= end; i++){
        my_array.push(i);
    }
    return my_array;
}

console.log(range(4,9));