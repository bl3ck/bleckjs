function countChar(text,letter){
    var bCount = 0;
    for(var i = 0; i < text.length; i++){
        if(text[i] == letter){
            bCount++;
        }
    }
    return bCount
}

console.log(countChar('biBh','h'));