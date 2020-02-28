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
    console.log(results);
    return results;
}
        
function comparePositions(p1, p2) {
  var x1 = p1[0] < p2[0] ? p1 : p2;
  var x2 = p1[0] < p2[0] ? p2 : p1;
  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}

function checkCollisions(){
    console.log("checking collision");
  var box = $("#toscore")[0];
  var pos = getPositions(box);

  var pos2 = getPositions(football);
  var horizontalMatch = comparePositions(pos[0], pos2[0]);
  var verticalMatch = comparePositions(pos[1], pos2[1]);            
  var match = horizontalMatch && verticalMatch;
  if (match) {disappear;}
}

function disappear(){
    document.getElementById(football).style.display = "none";
}