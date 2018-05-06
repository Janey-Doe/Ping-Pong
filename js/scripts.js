
var output = "";
var num ;
function getResponse(play){
    if (play % 5 ===0 && play % 3 === 0) {
            output = "Pingpong"
    } else if (play % 5 === 0) {
        output = "Pong"
    } else if (play % 3 === 0) {
        output = "Ping"
    } else {
        output = play;}
    return output;
}

$(document).ready(function(){
    $("form#pingp").submit(function (event) {
      $("ul#list-1").text('');
        num = parseInt($("#in").val());
        for(var counter =1;counter <=num; counter ++ ) {
            var result = getResponse(counter)
            $("ul#list-1").append("<li>"+result+"</li>")
        }
        $("#list-1").show();
        $("#in").val("");
        event.preventDefault();
    });

});
