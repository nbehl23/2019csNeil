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
    TweenMax.to("#car2",3,{ x:696,ease:Sine.easeOut});
    TweenMax.to("#car2",.5,{rotation:90, delay:1.5, ease:Sine.easeOut});
    TweenMax.to("#car2",2,{x:540, y:-345,delay:1.7, ease:Sine.easeOut,});
    TweenMax.to("#car2",.5,{rotation:270, delay:2.6, ease:Sine.easeOut});
    TweenMax.to("#car2",3,{x:-70, y:-350,delay:2.8, ease:Sine.easeOut});
    TweenMax.to("#car2",3,{x:-75, y:10,delay:5, ease:Sine.easeOut});
    TweenMax.to("#car2",.5,{rotation:180,repeat:0, delay: 7, ease:Sine.easeOut});
    TweenMax.to("#car2",2,{x:120, y:0,delay:7.1, ease:Sine.easeOut});
    TweenMax.to("#car1",2,{x:520, y:-10, ease:Sine.easeOut});
    TweenMax.to("#car1",.5,{rotation:90, delay:1.5, ease:Sine.easeOut});
    TweenMax.to("#car1",1.5,{x:520, y:-360, delay:2, ease:Sine.easeOut});
    TweenMax.to("#car1",.5,{rotation:180, delay:3, ease:Sine.easeOut});
    TweenMax.to("#car1",2,{x:-50, y:-300,delay:3, ease:Sine.easeOut});
    TweenMax.to("#car1",.5,{rotation:270, delay:5, ease:Sine.easeOut});
    TweenMax.to("#car1",2,{x:-50, y:0,delay:5.5, ease:Sine.easeOut});
    TweenMax.to("#car1",.5,{rotation:180, delay:6.5, ease:Sine.easeOut});
    TweenMax.to("#car1",2,{x:120, y:0,delay:6.5, ease:Sine.easeOut});
}