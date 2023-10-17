import hamburgerMenu from "./menu_hambuguesa.js";
import {relojDigital,alarm} from "./relojDiguital.js";
 const d =document;
 d.addEventListener("DOMContentLoaded",(e)=>{
    /**codigo reutilisable de menus */
    hamburgerMenu(".panel-btn",".panel",".menu a");
    relojDigital("#reloj","#activar-reloj","#desativar-reloj");
});

