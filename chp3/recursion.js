function isEven(x){
    if(x === 0){
        return true;
    }else if(x === 1){
        return false
    }
       return x = isEven(x - 2);
}

console.log(isEven(50));