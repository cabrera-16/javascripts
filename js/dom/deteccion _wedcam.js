const d=document;
const n = navigator;
const w = window;
export default function wedCam(id){
   const $video = d.getElementById(id);
   if(n.mediaDevices.getUserMedia){
    //esto es una promesa 
    n.mediaDevices
    .getUserMedia({video:true,audio:true})
    .then((stream)=>{
        console.log(stream)
        $video.srcObject =stream;
        $video.play();     
    })
    .catch((err)=>{
        $video.insertAdjacentHTML("beforebegin",`<p><mark>${err}</mark></p>`)

        console.log(`fallo ${err}`)
   });
   }

}
