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
                    },checkCollisions);
                break;
            case 38: 
                    football.finish().animate({
                        top: "-=10",
                    },checkCollisions);
                break;
            case 39: 
                    football.finish().animate({
                        left: "-=-10",
                    },checkCollisions);
                break;
            case 40:
                    football.finish().animate({
                        top: "-=-10",
                    },checkCollisions);
                break;						
        }
    }
)
function getPositions(element) {
    console.log("getting position");
    var elementObj = $(element);
    var pos = elementObj.position();
    var width = elementObj.width();
    var height = elementObj.height();
    var results = [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
    //console.log(results);
    return results;
}
        
function comparePositionsx() {
    if (pos[0]>pos2[0]) true
}
function comparePositionsy(){
    if (pos[1]>pos2[1]) true
}

function checkCollisions(){
    console.log("checking collision");
  var box = $("#toscore")[0];
  var pos = getPositions(box);

  var pos2 = getPositions(this);
  var horizontalMatch = comparePositionsx(pos[0], pos2[0]);
  var verticalMatch = comparePositionsy(pos[1], pos2[1]);            
  var match = horizontalMatch && verticalMatch;
  if (match) {disappear();}
}

function disappear(){
    document.getElementById(football).style.display = "none";
}