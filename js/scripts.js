
var countTonumber;
var str='';
condition();


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
    
