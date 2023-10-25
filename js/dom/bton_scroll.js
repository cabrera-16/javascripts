const d= document;
const w =window;
export function scroll_btn(btn){
    let stopScroll = d.documentElement.scrollTop;
    const $btnScroll=d.querySelector(btn)
    w.addEventListener("scroll",(e)=>{
        if(stopScroll > 600){
            $btnScroll.classList.remove("hidden")
        }else{
            $btnScroll.classList.add("hidden");
        }
        console.log(stopScroll)

    })
    d.addEventListener("click",(e)=>{

    })
}