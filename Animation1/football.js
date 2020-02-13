init();
var devinhester = new Audio ("Devin hester audio.mp3")

function init(){
    startRace();
}

function startRace(){
        var diameter = 500 ; 
    TweenMax.to("#football", 2.5 ,{
        bezier:{curviness:1.5,values:[{x:0,y:0},{x:-diameter/2,y:-diameter/2},{x:-diameter,y:0}]}
        ,rotation:1080,delay:.1,ease:Power0.easeNone,onComplete:disappear});
    TweenMax.to("#player",5,{x:725,delay:2.5,ease:Power0.easeNone});
    TweenMax.to("#touchdown",1.5,{y:650,x:200,delay:7.5,ease:Power0.easeNone});
    devinhester.play();
    
    
    }
function disappear(){
    document.getElementById("football").style.display = "none";
}