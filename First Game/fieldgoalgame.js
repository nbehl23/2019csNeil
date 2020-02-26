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
                        left: "-=10",
                    });
                break;
            case 38: 
                    football.finish().animate({
                        top: "-=10"
                    });
                break;
            case 39: 
                    football.finish().animate({
                        left: "-=-10"
                    });
                break;
            case 40:
                    football.finish().animate({
                        top: "-=-10"
                    });
                break;						
        }
    }
)
function getPositions(football) {
  var $box = $("#football");
  var pos = $box.position();
  var width = $box.width();
  var height = $box.height();
  return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
}
        
function comparePositions(p1, p2) {
  var x1 = p1[0] < p2[0] ? p1 : p2;
  var x2 = p1[0] < p2[0] ? p2 : p1;
  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}

function checkCollisions(){
  var box = $("#toscore")[0];
  var pos = getPositions(box);

  var pos2 = getPositions(this);
  var horizontalMatch = comparePositions(pos[0], pos2[0]);
  var verticalMatch = comparePositions(pos[1], pos2[1]);            
  var match = horizontalMatch && verticalMatch;
  if (match) { $("body").append("<p>COLLISION !!!</p>"); }
}
