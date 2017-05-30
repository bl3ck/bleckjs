function countBs(text){
    var bCount = 0;
    for(var i = 0; i < text.length; i++){
        if(text[i] == 'B'){
            bCount++;
        }
    }
    return bCount
}

console.log(countBs('biBh'));