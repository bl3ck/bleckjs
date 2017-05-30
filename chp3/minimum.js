function min(x,y){
    var minVal = x;
    for(var i = 0; i < arguments.length; i++ ){
        if(arguments[i] < minVal){
            minVal = arguments[i];
        }
    }
    return minVal;
}

console.log("The minimum is: " + min(32,89,4,2));