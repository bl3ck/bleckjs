/*
    Write a range function that takes two arguments, start and end , and
    returns an array containing all the numbers from start up to (and in-
    cluding) end .
*/
my_array = [];

function range(start, end, increment){
    if(increment > 0){
       for(var i = start; i <= end; i++){
            my_array.push(i);
        } 
    }else{
        for(var i = start; i >= end; i = i + increment){
            my_array.push(i);
        }
    }
    return my_array;
}

console.log(range(5,2,-1));

// Modification: Implementing the sum function which takes an array and returns its sum

function sum(array){
    var totSum = 0;
    for(var i = 0; i < array.length; i++){
        totSum += array[i];
    }
    return totSum;
}

console.log(sum(my_array));