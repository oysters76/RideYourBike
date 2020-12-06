
let x = 60;
let topElem = document.getElementById('map');
let containerElem = document.getElementById('holder');
let y = 1;
let flag = false;
window.addEventListener('wheel', function(e) {
  if (event.deltaY < 0)
 {
   if (flag){
     y += 10;
     containerElem.style.top = y + "px";
     if (y > 29){
       flag = false;
     }
     return;
   }else{

     y += 20;
     if (y > 530){
       y = 530;
     }
     containerElem.style.top = y + "px";

   }
   x += 2;
   if (x > 60){
     x = 60;
   }
   topElem.style.height = x + "vh";
 }
 else if (event.deltaY > 0)
 {
   x -= 5;
   if (x < 10){
     flag = true;
     x = 10;
     y -= 10;
     containerElem.style.top = y + "px";
   }else{
     containerElem.style.top = "";
     y = -10;
   }
   topElem.style.height = x + "vh";
 }


});
