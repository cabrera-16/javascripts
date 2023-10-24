const d=document;

export  function fechas (id,fechaDate,finalMessage){
    const $fe=d.getElementById(id);
    let anoMes= new Date (fechaDate).getTime()
    
    let countdownTiempo = setInterval((e) => {
        let ahora = new Date().getTime();
    
        console.log(anoMes,ahora)
        
       
    }, 1000);

}