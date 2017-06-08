/*  Write a function arrayToList that builds up a data structure like the
    previous one when given [1, 2, 3] as argument, and write a listToArray
    function that produces an array from a list.
*/

function arrayToList(array){
     var list = null;
    for(var i = 0; i < array.length; i++){
        list = {'value': array[i],'rest':list};
    }return list;
    
}

console.log(arrayToList([1,2,3]));
// i am expecting {value:1 , rest:{value:2, rest:{value:3, rest:null}}} but got this instead
// { value: 3, rest: { value: 2, rest: { value: 1, rest: null } } }
// i think my logic is right but don't know y. its inserting from 3 - 1 instead.

function listToArray(list){
    var myArray = [];
    for (var item = list; item ;item = item.rest){
        myArray.push(item.value);
    }
    return myArray;
}
console.log(listToArray(arrayToList([1,2,3])));
