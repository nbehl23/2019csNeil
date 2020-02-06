init();

function init(){
    startRace();
}

function startRace(){
        var diameter = 400 ; 
    TweenMax.to("#football", 2.5 ,{
        bezier:{curviness:1.5,values:[{x:0,y:0},{x:-diameter/2,y:-diameter/2},{x:-diameter,y:0}]}
        ,rotation:1080,delay:.1,ease:Power0.easeNone});
    TweenMax.to("player",3,{x:720,delay:2.5,ease:Power0.easeNone});
}