const d=document;
const w=window;
const n=navigator;

export default function networkStatus(){
    const isOneLine=()=>{
        const $div =d.createElement("div");

        if(n.onLine){
            $div.textContent="conexion  Restablecida";
            $div.classList.add("online");
            $div.classList.remove("offline")
        }else{
            $div.textContent ="Conexion Perdida";
            $div.classList.add("offline");
            $div.classList.remove("online")
        }
        d.body.insertAdjacentElement("afterbegin",$div)

    }
    w.addEventListener("online",(e)=>isOneLine());
    w.addEventListener("offline",(e)=>isOneLine())
}