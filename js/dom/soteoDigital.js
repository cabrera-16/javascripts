const d = document;
 export default function sorteo_Ganador(id){
    const $div = d.getElementById(id)
    $div.innerHTML=`<ul>
    <li>javaScript</li>
        <li>PHP</li>
         <li>java</li>
            <li>python</li>
                <li>ruby</li> 
                <li>GO</li>
                <li>visual bASIC</li>
                <li>rust</li>  
                <li>perl</li>
                </ul> 
            <button id ="boton">Obtener Ganador</button>
                `
                const $boton = d.getElementById("boton")
                $boton.addEventListener("click",function(e){
                    const juego=["javascript","php","java","C","Python","Ruby","Go","visualbasic","rust","peal"];

                    const random = juego[Math.floor(Math.random()*juego.length)];

                    console.log( `El ganador es:${random}`);
                    alert( `el ganador es ${random}`)

                });


                        



 }