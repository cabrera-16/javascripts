import hamburgerMenu from "./menu_hambuguesa.js";
import {relojDigital,alarm,musicaPley} from "./relojDiguital.js";
import { moverBall,shortcuts } from "./teclado.js";
import { fechas } from "./fecha.js";
import { scroll_btn } from "./bton_scroll.js";
import { dark_theme } from "./dark-btn.js";
import responsiveMedia from "./objeto_reponsive.js";
import respTes from "./resposive_tester.js";
import det_disp from "../../deteccion_dipos.js";
import networkStatus from "./deteccion_red.js";
 const d =document;
 d.addEventListener("DOMContentLoaded",(e)=>{
    /**codigo reutilisable de menus */
    hamburgerMenu(".panel-btn",".panel",".menu a");
    relojDigital("#reloj","#activar-reloj","#desativar-reloj");
    alarm("assets/alarma-good-morning-5-5.mp3","#activar-alarma","#Detener-alarma");
    musicaPley("assets/musica.mp3","#musica","#quitar","#pausa","#volumen");
    fechas("countdown","dec 31,2023 00:00:00","feliz Fin de año")
    scroll_btn(".scroll-top-btn",".hidden");
    responsiveMedia("youtube","(min-width:1024px)",`<a href="https://www.youtube.com/watch?v=gqAOc7qrulM" target="_blank" rel="nooponer">
    ver video </a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/gqAOc7qrulM?si=r2yoP30ZBkrdX26Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia("mapps","(min-width:1024px)",`<a href="https://maps.app.goo.gl/77JijEhbHkgYyxYs5" target="_blank" rel="nooponer">
    ver mapa </a>`,`<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.
    1202037935686!2d-70.01180736790494!3d18.52346940568562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
    1s0x8eaf8a6f989014c9%3A0xc609435125210d46!2sServicios%20de%20Telecomunicaciones%20Techcomm%20S.R.
    L!5e0!3m2!1ses-419!2sdo!4v1700441227103!5m2!1ses-419!2sdo
    " width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
    respTes("resposive-tester");
    det_disp("user-divice");
});
d.addEventListener("keydown",(e)=>{
    shortcuts(e)
    moverBall(e,".ball",".stage");
});
dark_theme(".dark-theme-btn","dark-mode");
networkStatus();

