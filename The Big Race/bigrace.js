init();

function init(){
    for(var r=0; r<10; r++)
        for(var c=0; c<4; c++){
            var color = (r+c)%2===0?' black': ' white';
            $('#finishLine').append("<div class='checker " + color + "'></div>");
        }
    startRace();
}

function startRace(){
    TweenMax.to("#car1",2,{x:520,ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{x:520, y:-320,delay:1.7, ease:Sine.easeOut});
    TweenMax.to("#car1",2,{x:-50, y:-300,delay:3, ease:Sine.easeOut});
}
function startRace(){
    TweenMax.to("#car2",3,{x:696,ease:Sine.easeOut});
    TweenMax.to("#car2",2,{x:540, y:-360,delay:1.7, ease:Sine.easeOut});
    TweenMax.to("#car2",3,{x:-100, y:-350,delay:3.3, ease:Sine.easeOut});
    TweenMax.to("#car2",3,{x:0, y:360,delay:5.3, ease:Sine.easeOut});
}
