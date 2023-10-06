/********ojo sicrono */
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

/********Asincrona*********/
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


