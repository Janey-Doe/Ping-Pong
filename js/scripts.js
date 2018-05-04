
var countTonumber;
$(document).ready(function(){

$('form.pingp').submit(function(){
countTonumber=parseInt($("#in").val());
for(var i=1;i<=countTonumber;i++){
if((i % 3==0) && (i % 5==0)){
$(".list").append('<li>pingpong</li>');
}
else if(i % 5==0){
$(".list").append('<li>pong</li>');
}
else if(i % 3==0){
$(".list").append('<li>ping</li>');
}
else{
  $(".list").append('<li>'+i.toString() + '</li>');
}
}
$("#in").val('')
event.preventDefault();
});
});
