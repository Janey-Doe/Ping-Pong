//UI logic
var countTonumber=parseInt(prompt("Enter number:"));
var str='';
condition();


//Business Logic

function condition(){
 for(var i=1;i<=countTonumber;i++){
   if((i % 3==0) && (i % 5==0)){
    str+='pingpong';
   }
   else if(i % 5==0){
    str+='pong';
   }
    else if(i % 3==0){
    str+='ping';
   }
   else{
      str+=i.toString();
   }
   if(i!=countTonumber){
    str+=',';
   }

 }
    alert(str);
    str='';
}
