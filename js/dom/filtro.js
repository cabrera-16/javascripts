 const d = document;
 //input es donde va hacer la busquedA
 // Select es que va selecionar cada figuray tabm el va iterrar sobre cada tarjeta 
 export default function filtroBuqueda(input,select){
  // evento del teclado keyup
  //delegar evento al documentos entocence eso suceda mas pasar el elementos,
  //oye vamos decirle si obejecto que genero evento y su selector condice con lo q vine la variable input
  
    d.addEventListener("keyup",(e)=>{

        if(e.target.matches(input)){
            //console.log(e.key)
            //entonces quiero que busque en todos los selectores lo q lo usuario a escritos buscador
            //e.target.value esta que quiero q iterres
            //forEach por cada selector va tener q buscar el texto va buscar 
            // en su contenido de texto forzala se escriba mayucula este minuscula
            //include es un boleano le vamoc pasar el evento e .target.value 
              
           if (e.key === "Escape") e.target.value="";
        
            d.querySelectorAll(select).forEach((el)=>
              el.textContent.toLowerCase().includes(e.target.value)
            ? el.classList.remove("filter")
            : el.classList.add("filter")
          );     
        }
    });   


 }