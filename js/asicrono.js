/********ojo sicrono 
//entra hilo
console.log("sicrono");
//imprime este mensaje
console.log("inicio");
//de pasa al siguiente consle
function dos (){
    console.log("dos")

}
//depues q entra en uno le lo q hay en uno entra 2 le los hay en 2 y prime el console de uno q  es 3
function uno (){
    console.log("uno");
    dos();
    console.log("tres");
}
// entra la funcion llamada uno

uno();
// y sale  hilo final esto es sicrono
console.log("fin");

/********Asincrona*********
//entra en consle.
console.log("Asincrono");
console.log ("inicio");
// cuando termina su proceso me imprime esta parte
function doos (){
    setTimeout(()=>{
        console.log("dos")
    },3000)

    
}//entra deentro de la funcion evalua pero como asicronio se queda expera
//entra la funcion mi imprime la esperade su timpo 
function unos (){
    setTimeout(()=>{
        console.log("uno")

    },0)
    doos();
    //pase al 3 los imprime de tercero despues de la 2 funciones
    console.log("tres")
}
//sale por la llamada funcion
unos();
//pasa por fin los imprime ante la funciones 
console.log("fin");


*/

/*/Promesa
function Promesa(value){
    if(typeof value !== "number")return  Promise.reject(`error, el valor ${value} no es un numero`);
    
return new Promise ((resolve,reject)=>{
setTimeout(()=>{
    resolve({
        value:value,
       result: value*value
    });

},0) | Math.random()*100;

});
    
}
Promesa(0)
.then((obj)=>{
    console.log("inicio de la promesa");
    console.info(`promesa ${obj.value},${obj.value}`);
    return Promesa(1)
})
.then((obj)=>{
    console.info(`promesa ${obj.value}, ${obj.result}`);
    return Promesa(2);

})
.then((obj)=>{
    console.info(`promesa ${obj.value}, ${obj.result}`);
    return Promesa(3);
})
.then((obj)=>{
    console.info(`promesa ${obj.value}, ${obj.result}`);
    return Promesa("4")

})
.then((obj)=>{
    console.info(`promesa ${obj.value}, ${obj.result}`);
    return Promesa("5")

})
.then((obj)=>{
    console.info(`promesa ${obj.value}, ${obj.result}`);
    console.log('fin de la promesa')

})
.catch((err)=>{
    console.error(err)
});
*/
/*
//callback
function call (value,callback){
    setTimeout(()=>{
        callback(value,value*value)

    },0| Math.random()*100);
}
call(0,(value,result)=>{
    console.log("inicis callback");
    console.log(`callback ${value}, ${result}`)
    call(1,(value,result)=>{
        console.log(`callback ${value}, ${result}`)})
        call(2,(value,result)=>{
            console.log(`callback${value}, ${result}`)})
         call(3,(value,result)=>{
            console.log(`callback ${value},${result}`)})
            call(4,(value,result)=>{
                console.log(`callback ${value}, ${result}`)})
                call(4,(value,result)=>{
                    console.log(`callback ${value}, ${result}`)})

})
*/


function Promesa(value){
    if(typeof value !== "number")return  Promise.reject(`error, el valor ${value} no es un numero`);
    
return new Promise ((resolve,reject)=>{
setTimeout(()=>{
    resolve({
        value:value,
       result: value*value
    });

},0) | Math.random()*100;

});
    
}
async function funcionAsincrona(){
    try{
        console.log("inicio de Async funtion")
        let obj= await Promesa(0)
        console.log(`Async Function ${obj.value},${obj.result}`)

         obj= await Promesa(1)
        console.log(`Async Function ${obj.value},${obj.result}`)

        obj= await Promesa(2)
        console.log(`Async Function ${obj.value},${obj.result}`)

         obj= await Promesa("4")
        console.log(`Async Function ${obj.value},${obj.result}`)

        obj= await Promesa(4)
        console.log(`Async Function ${obj.value},${obj.result}`)

         obj= await Promesa(5)
        console.log(`Async Function ${obj.value},${obj.result}`)
        console. log("fin Async")

    }catch(err){
        console.error(err)

    }
}
funcionAsincrona();

const funcionExpresada = async()=>{
    try{
    console.log("inicio de Async funtion")
    let obj= await Promesa(6)
    console.log(`Async Function ${obj.value},${obj.result}`)

     obj= await Promesa(7)
    console.log(`Async Function ${obj.value},${obj.result}`)

    obj= await Promesa(8)
    console.log(`Async Function ${obj.value},${obj.result}`)

     obj= await Promesa("4")
    console.log(`Async Function ${obj.value},${obj.result}`)

    obj= await Promesa(10)
    console.log(`Async Function ${obj.value},${obj.result}`)
    console. log("fin Async")

}catch(err){
    console.error(err)

}

}
funcionExpresada();

console.log(JSON.parse("{}"));
console.log("[]");
console.log("null");
console.log("19");
 // JSON.stringify
 console.log(JSON.stringify({}));
 console.log(JSON.stringify([1,2,3]));