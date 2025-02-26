var btn = document.querySelector("button");

function makebable(){   
var cluter = "";
for(var i = 0; i<=134; i++ ){

   var rn = Math.floor(Math.random()*10)
 cluter += `<div id="bables">${rn}</div>`;
 
}
 document.querySelector("#bablecon").innerHTML = cluter

}


function babletime(){

    var timer  = 30;
    var gg = setInterval(() => {
        
        if(timer>0){
    
            timer--
            document.querySelector("#time").innerHTML = timer
            
        }else{
    
            clearInterval(gg)
            document.querySelector("#bablecon").innerHTML = ""

            document.querySelector("#bablecon").innerHTML = `<h1 id="scorebord">GAMES OVER ${scores}</h1>`
            btn.style.display = "block"

        }
    
    
    }, 1000);


}


var scores = 0;
function bablescores(){


    scores += 10;
    document.querySelector("#score").innerHTML = scores



}

var rn  = "";

function bablern(){


    rn  = Math.floor(Math.random()*10)
   
   document.querySelector("#hit").innerHTML = rn;

}



document.querySelector("#bablecon").addEventListener("click", function(dets){

    var hits = Number(dets.target.innerHTML)

   if(hits == rn){

       bablescores();
       makebable();
       bablern();
       

   }


   
})

btn.addEventListener("click",function(){

    

        bablern();
        makebable();
        babletime();
        btn.style.display = "none"
        
   
    

})