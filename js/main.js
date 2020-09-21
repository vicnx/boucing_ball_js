
   let speed = 15; //1 to 100
   var dance;
   
   let incX = speed * (Math.round(Math.random())?1:-1);
   let incY = speed * (Math.round(Math.random())?1:-1);
   let ball=document.getElementById("ball");
   
   function danceWorld(){

       x =  ball.style.left?parseInt(ball.style.left,10):0;
       y =  ball.style.top?parseInt(ball.style.top,10):0;
   
       ball.style.left =  x + incX +"px";
       ball.style.top = y + incY+"px";
       
       //Detect if we reach X coordinates limits
       if (((x+incX) > (window.innerWidth-40)) || ((x+incX)<=0))
          incX = (-1)*incX
          
       //Detect if we reach Y coordinates limits
       if (((y+incY) > (window.innerHeight-40)) || ((y+incY) <= 0))
          incY = (-1)*incY
   
       //box
       document.getElementById("box").innerHTML = "<b>x:</b> "+ball.style.left+" <br><b>y:</b> "+ball.style.top+"<br><b>incx:</b> "+incX+"<br><b>incy:</b> "+incY;   
   }
   dance=setInterval(danceWorld,50);



