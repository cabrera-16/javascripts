const d= document;
const w =window;
export function scroll_btn(btn){
    
    const $btnScroll=d.querySelector(btn)
    w.addEventListener("scroll",(e)=>{
        let stopScroll = d.documentElement.scrollTop;
        if(stopScroll > 600){
            $btnScroll.classList.remove("hidden")
        }else{
            $btnScroll.classList.add("hidden");
        }
        console.log(stopScroll)

    })
    d.addEventListener("click",(e)=>{
      if(e.target.matches(btn)){
        w.scrollTo({
            behavior:"smooth",
            top:0
        })

      }

    })
}