const d=document;

export  function fechas (id,fechaDate,finalMessage){
    const $fe=d.getElementById(id);
    let anoMes= new Date (fechaDate).getTime();
    
    let countdownTiempo = setInterval(() => {
        let now = new Date().getTime();
        let limitTime = anoMes-now;
        let  day=Math.floor(limitTime/(1000*60*60*24));
        let hours=( "0" + Math.floor((limitTime%(1000*60*60*24))/(1000*60*60))).slice(-2);
        let minutes =( "0" + Math.floor((limitTime%(1000*60*60))/(1000*60))).slice(-2);
        let segundo =( "0" + Math.floor((limitTime%(1000*60))/(1000))).slice(-2);
      
        $fe.innerHTML = `<h3> faltan:${day} dias ${hours} horas ${minutes} minutos ${segundo} segundo</h3>`
    
        if (limitTime < 0) {
            clearInterval(countdownTiempo);
            $fe.innerHTML=  `<h3>${finalMessage}</h3>`
        }
        
        
       
    }, 1000);

}