init();

function init(){
    startRace();
}

function startRace(){
        var diameter = 500 ; 
    TweenMax.to("#football", 2.5 ,{
        bezier:{curviness:1.5,values:[{x:0,y:0},{x:-diameter/2,y:-diameter/2},{x:diameter/4,y:-diameter}]}
        ,rotation:1080,delay:.1,ease:Power0.easeNone});
  }
