const d = document;
const w = window;
export default function responsiveMedia(id,mq,mobileContex,destokContex){
    let breakPoint= w.matchMedia(mq);

    const resposivo=(e)=>{
    if (e.matches) {
       d.getElementById(id).innerHTML = destokContex;
    }
    else{
        d.getElementById(id).innerHTML = mobileContex;
    }
    console.log(e.matches,breakPoint)
  };
  breakPoint.addListener(resposivo);

  //Para q a parzaca contenido 
  resposivo(breakPoint);

}

