/*
* Looping Triangles
* --- Eugen-Bleck
*/
for (var i = 0;  i < 7; i++){
    for(var j = 0; j < 7; j++){
        if(i === j){
            console.log('*'.repeat(i+1));
        }
    }
}