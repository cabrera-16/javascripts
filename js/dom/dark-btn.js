const d=document;

export  function dark_theme(btn,clalisDate){

    const $dark=d.querySelector(btn);
    const $selector =d.querySelectorAll("[data-dark]")
    let moon ="🌙", sun="⭐";

   d.addEventListener("click",(e)=>{

    if(e.target.matches(btn)){
        
        console.log($dark.textContent);

        if($dark.textContent === moon){
            $selector.forEach(el=>el.classList.add(clalisDate));
            $dark.textContent =sun;
        }else{
            $selector.forEach(el=>el.classList.remove(clalisDate));
            $dark.textContent =moon;
        }
        
    }   
    
   });

}