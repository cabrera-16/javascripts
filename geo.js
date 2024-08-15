const d = document;
const w = window;
const n=navigator;
export default function gps(id){
    const $gps =d.getElementById(id)
    const option ={
        enableHighAcurracy:true,
        timeout:5000,
        maximmumAge:0
    }
    const success = (position)=>{
        const coords =position.coords;
        $gps.innerHTML= `<p> tu posicion actual es: </p>
        <ul>
        <li>latitud:<b>${coords.latitude}</b></li>
        <li>longuitu:<b>${coords.longitude}</b></li>
        <li>precision:<b>${coords.accuracy} metro </b> </li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude} ,${coords.longitude} ,${coords.accuracy},
        10z "target"="_blank" rel"=noopener" >ver google mapas </a>`;
        console.log(position)

    }
    const error =(err)=>{
    $gps.innerHTML= `<p><mark>error ${err.code} ${err.message}</mark></p>`;
        console.log(`error ${err.code}${err.message}`)

    }
    n.geolocation.getCurrentPosition(success,error,option)

    
}