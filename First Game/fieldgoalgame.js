init();

function init(){
    startRace();
}

function startRace(){
        /*var diameter = 500 ; 
    TweenMax.to("#football", 2.5 ,{
        bezier:{curviness:1.5,values:[{x:0,y:0},{x:-diameter/2,y:-diameter/2},{x:diameter/4,y:-diameter}]}
        ,rotation:1080,delay:.1,ease:Power0.easeNone});*/
    getKeyAndMove();
    }
    function getKeyAndMove(e){				
				var key_code=e.which||e.keyCode;
				switch(key_code){
					case 37: 
						moveLeft();
						break;
					case 38: 
						moveUp();
						break;
					case 39: 
						moveRight();
						break;
					case 40:
						moveDown();
						break;						
				}
			}
			function moveLeft(){
				objImage.style.left=parseInt(objImage.style.left)-5 +'px';
			}
			function moveUp(){
				objImage.style.top=parseInt(objImage.style.top)-5 +'px';
			}
			function moveRight(){
				objImage.style.left=parseInt(objImage.style.left)+5 +'px';
			}
			function moveDown(){
				objImage.style.top=parseInt(objImage.style.top)+5 +'px';
			}			
				