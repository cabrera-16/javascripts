const d=document;
const ls =localStorage;
export  function dark_theme(btn,clalisDate){

    const $dark=d.querySelector(btn);
    const $selector =d.querySelectorAll("[data-dark]")
    let moon ="🌙", sun="⭐";
    const ligthMode =()=>{
        $selector.forEach(el=>el.classList.remove(clalisDate));
            $dark.textContent =moon;

            ls.setItem("theme","ligth");

    };
    const darkMode =()=>{
        $selector.forEach(el=>el.classList.add(clalisDate));
            $dark.textContent =sun;

            ls.setItem("theme","dark");

    }
   d.addEventListener("click",(e)=>{

    if(e.target.matches(btn)){
        
        console.log($dark.textContent);

        if($dark.textContent === moon){
            darkMode();
        }else{
            ligthMode();
           
        }
        
    }  
    
   });

   d.addEventListener("DOMContentLoaded",(e)=>{

    if(ls.getItem("theme")===null){
     ls.setItem("theme","ligth")

    }
    if(ls.getItem("theme")==="ligth"){
        ligthMode();
    }
    if(ls.getItem("theme")==="dark"){
        darkMode()
    }
});

}