var box = document.querySelectorAll(".square");
var dis = document.querySelector("span");
var color = randomcgen(6);
var result = document.querySelector("#result");
var jumbp = document.querySelector("#jumbo");
var newcolor = document.querySelector("#newcolor");
var hard = document.querySelector("#hardlevel");
var easy = document.querySelector("#easylevel");
var colorpicked = pickcolor();




for (var i = 0 ; i < color.length ; i++){
    box[i].style.backgroundColor=color[i];
    
    box[i].addEventListener("click", function(){
        
   var cpick = this.style.backgroundColor;
     
        
   if( cpick === colorpicked)
       {
         result.textContent = "Congo"
           for(var j = 0 ; j < 6 ; j++){
           
         box[j].style.backgroundColor= cpick;
           }
           
           jumbo.style.backgroundColor = cpick;
           hard.style.backgroundColor = cpick;
           newcolor.textContent = "Play Again";           
        
       }
    else {
       this.style.backgroundColor= "#0a0a0a" ;
        result.textContent = "Try Again";
    }    
});
}
 
dis.textContent = colorpicked;

function pickcolor(){
   var random = Math.floor(Math.random() * color.length);
   return color[random];
    
}

function randomcgen(num){
    var arr = [];

    for(var i = 0 ; i < num ; i++){
        arr.push(generate());
        
    }
    
    return arr;
}

function generate(){
     var r = Math.floor(Math.random() * 256);
     var g = Math.floor(Math.random() * 256);
     var b = Math.floor(Math.random() * 256);
     
     return "rgb(" + r + ", " + g + ", " + b + ")";
    
    
}



newcolor.addEventListener("click",function(){
    
    
    newcolor.textContent = "New Colors";
    
    
    color = randomcgen(6);    
    
    for (var i = 0 ; i < color.length ; i++){
    box[i].style.backgroundColor=color[i];
    };
    
    colorpicked = pickcolor();
    
    dis.textContent = colorpicked;
    result.textContent=" ";
    
    
})