
const d = document;
 export default function sorteo_Ganador(btn,select){
   /* const $div = d.getElementById(id)
    $div.innerHTML=`<ul>
    <li>javaScript</li>
        <li class="player">PHP</li>
         <li class="player>java</li>
            <li class="player">python</li>
                <li class="player">ruby</li> 
                <li class="player'>GO</li>
                <li class="player">visual bASIC</li>
                <li class="player">rust</li>  
                <li class="player">perl</li>
                </ul> 
            <button id ="boton">Obtener Ganador</button>
                `
                const $boton = d.getElementById("boton")
                $boton.addEventListener("click",function(e){
                    const juego=["javascript","php","java","C","Python","Ruby","Go","visualbasic","rust","peal"];

                    const random = juego[Math.floor(Math.random()*juego.length)];

                    console.log( `El ganador es:${random}`);
                    alert( `el ganador es ${random}`)

                });*/

                const getWinner=(select)=>{
                    const $player = d.querySelectorAll(select),
                    random =Math.floor(Math.random()*$player.length),
                    winner =$player[random];
                    return `El ganador es:${winner.textContent}`
                    

                }
                d.addEventListener("click",(e)=>{
                    if(e.target.matches(btn)){
                        let resul = getWinner(select);
                        alert( resul);
                        console.log(resul);
                    }
                })


                        



 }