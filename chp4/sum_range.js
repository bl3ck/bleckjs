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

console.log(range(1,5));

// Modification: Implementing the sum function which takes an array and returns its sum

function sum(array){
    var totSum = 0;
    for(var i = 0; i < array.length; i++){
        totSum += array[i];
    }
    return totSum;
}

console.log(sum(my_array));