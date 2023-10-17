const d = document;
export function relojDigital(relojbtn,btnpley,bntclock){
   d.addEventListener("click",(e)=>{
    if(e.target.matches(btnpley)) { 
        setInterval(() => {  /*delegacion de evento botones reloj*/
            let hora= new Date().toLocaleTimeString();
            d.querySelector(relojbtn).innerHTML=`<h3>${hora}</h3>`;
            
        },1000);
        /*este boton q origina elevento para q la usurio le den par de veces */
        e.target.disabled =true;
    }     
   });
   if(e.target.matches(bntclock)){

   }
}
export  function alarm(){

}