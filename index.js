numberOfDButtons= document.querySelectorAll(".drum").length ;

for( var i=0 ; i<numberOfDButtons ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML= this.innerHTML ;
            makesound(buttonInnerHTML)  ;
            addAnimation(buttonInnerHTML) ;
        }
        ) ;
}


document.addEventListener("keypress" , function(event)
{ makesound(event.key) ;
  addAnimation(event.key) ;
} ) ;


function makesound(key){

    switch(key){
            
        case "w":
            var crash =  new Audio("sounds\\crash.mp3") ;
            crash.play() ;
           break;
         
           case "a":
               var crash =  new Audio("sounds\\kick-bass.mp3") ;
               crash.play() ;
              break;  

              case "s":
               var crash =  new Audio("sounds\\snare.mp3") ;
               crash.play() ;
              break;             
       
              case "d":
               var crash =  new Audio("sounds\\tom-1.mp3") ;
               crash.play() ;
              break;      
       
       
              case "j":
               var crash =  new Audio("sounds\\tom-2.mp3") ;
               crash.play() ;
              break;      
       
       
              case "k":
               var crash =  new Audio("sounds\\tom-3.mp3") ;
               crash.play() ;
              break;      
       
       
              case "l":
               var crash =  new Audio("sounds\\tom-4.mp3") ;
               crash.play() ;
              break;      
        
           }
       

}


function addAnimation(currentkey)
{
var button = document.querySelector("." + currentkey) ;
    button.classlist.add("pressed") ;

 //setTimeout(function(){ button.classList.remove("pressed") ;} , 300) ;
}
