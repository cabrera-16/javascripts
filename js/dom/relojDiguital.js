const d = document;
export function relojDigital(relojbtn,btnpley,bntclock){
    let clocKTiempo;
   d.addEventListener("click",(e)=>{
    if(e.target.matches(btnpley)) { 
        clocKTiempo = setInterval(() => {  /*delegacion de evento botones reloj*/
            let hora= new Date().toLocaleTimeString();
            d.querySelector(relojbtn).innerHTML=`<h3>${hora}</h3>`;
            
        },1000);
        /*este boton q origina elevento para q la usurio le den par de veces */
        e.target.disabled =true;
    }     

    if(e.target.matches(bntclock)){
        clearInterval(clocKTiempo); /*para  borrar mi reloj*/ 
        d.querySelector(relojbtn).innerHTML=null; 
        d.querySelector(btnpley).disabled =false /** para que boton apareca de nuevo */
    
       }
   });

   
}
export  function alarm(sound,btnplay,btnstop){
    let alarmaTiempo;
    const $alarm =d.createElement("audio"); /**creee un elemento audio guarda en la variable $alarm */
    $alarm.src=sound; /*agregano .src el sound */

    d.addEventListener("click",(e)=>{
        if(e.target.matches(btnplay)){
            alarmaTiempo =setTimeout(()=>{
                $alarm.play();

            },2000);
            e.target.disabled =true;
        }
        if(e.target.matches(btnstop)){
            clearTimeout(alarmaTiempo);
            $alarm.pause();
            $alarm.currentTime=0;
            d.querySelector(btnplay).disabled =false;

        }
    });

}
export function musicaPley(music,btnpley,btnstop,btnrepetir,bntvolumen){
    let musicatimeout;
    const $musica =d.createElement("audio");/**crear un elemento audio y lo guardamos en la varibale $mus*/
    $musica.src=music;/*agregado src a la mus*/
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btnpley)){
            musicatimeout =setTimeout(()=>{
                $musica.play();
                
            },500);
        }
        if(e.target.matches(btnstop)){
            clearTimeout(musicatimeout);
            $musica.currentTime=0;
            d.querySelector(btnpley).disabled =false

        }
        if(e.target.matches(btnrepetir)){
            $musica.pause();
        
        }
        if (e.target.matches(bntvolumen)){
            $musica.volume()
        }
       
    })
     
    
}   