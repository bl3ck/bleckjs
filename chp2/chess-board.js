var chessBoard = '';

for (var i=0; i < 8; i++){
    for (var j=0; j < 8; j++){
      if((i+1) % 2 === 0){
        if((j+1) % 2 === 0 ? chessBoard += '*' : chessBoard += '#');  
      }
      else{
        if((j+1) % 2 === 0 ? chessBoard += '#' : chessBoard += '*');
      }
    }
    
    chessBoard += "\n";
}

console.log(chessBoard);