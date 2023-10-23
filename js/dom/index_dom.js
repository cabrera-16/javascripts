import hamburgerMenu from "./menu_hambuguesa.js";
import {relojDigital,alarm,musicaPley} from "./relojDiguital.js";
import { moverBall,shortcuts } from "./teclado.js";
import { fechas } from "./fecha.js";
 const d =document;
 d.addEventListener("DOMContentLoaded",(e)=>{
    /**codigo reutilisable de menus */
    hamburgerMenu(".panel-btn",".panel",".menu a");
    relojDigital("#reloj","#activar-reloj","#desativar-reloj");
    alarm("assets/alarma-good-morning-5-5.mp3","#activar-alarma","#Detener-alarma");
    musicaPley("assets/musica.mp3","#musica","#quitar","#pausa","#volumen");
    fechas(co)
});
d.addEventListener("keydown",(e)=>{
    shortcuts(e)
    moverBall(e,".ball",".stage");
})

