var football = $("#football");

init();

function init(){
    startRace();
}

function startRace(){
}

$(document).keydown(
    function(e){
        var key_code=e.which;
        switch(key_code){
            case 37: 
                
                    football.finish().animate({
                        left: "-=10"
                    });
                break;
            case 38: 
                    football.finish().animate({
                        top: "-=10"
                    });
                break;
            case 39: 
                    football.finish().animate({
                        right: "-=10"
                    });
                break;
            case 40:
                    football.finish().animate({
                        top: "-=-10"
                    });
                break;						
        }
    }
			/*function moveLeft(){
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
			}	*/	
)