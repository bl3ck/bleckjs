var chessBoard = '';
var sizeOfChessBoard = 12;
for (var i=0; i < sizeOfChessBoard; i++){
    for (var j=0; j < sizeOfChessBoard; j++){
      if((i+1) % 2 === 0){
        if((j+1) % 2 === 0 ? chessBoard += ' ' : chessBoard += '#');  
      }
      else{
        if((j+1) % 2 === 0 ? chessBoard += '#' : chessBoard += ' ');
      }
    }
    
    chessBoard += "\n";
}

console.log(chessBoard);