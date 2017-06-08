/*
    write two functions,reverseArray and reverseArrayInPlace . The first, reverseArray , takes an array
    as argument and produces a new array that has the same elements in
    the inverse order. The second, reverseArrayInPlace , does what the reverse
    method does: it modifies the array given as argument in order to reverse
    its elements. Neither may use the standard reverse method.
*/

function reverseArray(array){
    var newArray = [];
    for(var i = array.length - 1; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}
var a = [1,2,3,4,5]
console.log(reverseArray(a));

function reverseArrayInPlace(array){
    var j = array.length - 1;
    for(var i = 0; i <= j; i++){
        var tmp = array[i];
        array[i] = array[j]; 
        array[j] = tmp;
        
        j--;
    }
    return array;
}

console.log(reverseArrayInPlace(a));