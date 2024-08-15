 const d = document;
 export default function filtroBuqueda(input,select){
    d.addEventListener("keyup",(e)=>{
        if(e.target.matches(input)){
            console.log(e.key)
          // d.querySelectorAll(select).forEach(el=>{

           // el.textContent.toLowerCase().include(e.target.value)
          // ? el.classlist 
          // });
        }
    })    


 }