console.log("loaded js");

$(".thing").click(
    function(){
        var myColor = $(this).css('background-color');
        $('#longbox').css('background-color', myColor);
        console.log("works")
    }   
)       

$(".type1").click(
    function(){
        $("#longbox").text($(this).text())
        $("#longbox").css('color', $(this).css('color'))
        document.getElementById("longbox").style.fontSize = "50px";
        document.getElementById("longbox").style.textAlign = "right";
    }
)