let stop = function(){
    var stopped = false;
    document.body.onkeyup = function(e){
        if(e.keyCode == 32){
            if(!stopped){
                clearInterval(dance);
                stopped=true;
            }else{
                stopped=false;
                dance=setInterval(danceWorld,50);
            }
            
        }
    }
}
