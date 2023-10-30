/*11) Programa una función que calcule el factorial de un número (El factorial de un 
    entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n)
    , pe. miFuncion(5) devolverá 120.
 */
const factorial=(n=undefined,unidad=1)=>{

    if(n === undefined) return console.warn("no ingresaste un numero");
    if(typeof n !== "number") return console.error("esto no es un numero")
    if(Math.sign(n)===-1)return console.error("el numero no puede ser negativo");
    
     for(let i=n;i>1;i--){
     unidad*=i;
    
    }return console.info(`el factorial ${n} es ${unidad}`);
}
factorial();
factorial("5");
factorial(-1);
factorial(4);

/*Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) 
o no, pe. miFuncion(7) devolverá true.*/
const primo =(n=undefined)=>{
    if(n=== undefined) return console.warn("no ingresaste un numero");
    if (typeof n !=="number") return console.warn("solamente se permite numero");
    if (Math.sign(n)===-1) return console.error("no se puede ingresar numero negativo");

    if((n%2)==1){
        console.info(`${n} es un numero primo`)
    }else{
        console.error(`${n} no es primo`)
    }

}
primo();
primo("4");
primo(-5);
primo (7);
/*13) Programa una función que determine si un número 
es par o impar, pe. miFuncion(29) devolverá Impar.*/
const par_Impares=(n=undefined)=>{
    if (n === undefined) return console.warn("ingresaste el numero");

    if(typeof n !== "number")return console.error(`el valor "${n}" ingresado, no es un numro `);

    if(Math.sign(n)===-1)return console.error("el numero no puede ser negativo");

    if((n%2)==0 ){
        console.info(`${n} es Par`)}
         else {console.info(`${n} es Impar`);
    }
    }
    par_Impares();
    par_Impares(-1);
    par_Impares("5");
    par_Impares(29);

    /*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
    pe. miFuncion(0,"C") devolverá 32°F. */

    const grado =(g=undefined,unidad=undefined)=>{

        if (g===undefined)return  console.warn("no ingresaste unidad ");

        if (typeof g!=="number") return console.error(`el valor ${g} no es un numero es una cadena Texto`);

        if(unidad===undefined)return  console.warn("no ingresaste la unidades ");

        if (typeof unidad !=="string") return console.error(`el valor ${unidad} no es  una cadena texto`);

        if (unidad.length !==1 || !/(C|F)/.test(unidad)) return console.warn("el valor de la unidad no es reconocida");

        if(unidad ==="C"){

            return console.info(`${g}°C = ${Math.round((g*(9/5))+32)}°F`);

        }else if( unidad === "F"){
            return console.info(`${g}°F = ${Math.round(((g-32)*(5/9)))}°C`);
        }else{
            return console.error("este tipo de grado no es permitido")
        }


        

    }
    grado();
    grado("2");
    grado(4);
    grado(4,true);
    grado(4,"e");
    grado(2,"hola")
    grado(100,"C");
    grado(100,"F");
    
    /*
15) Programa una función para convertir números de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10.*/
const binario_Decimal=(n=undefined,base=undefined)=>{
   
    if (n=== undefined)return console.warn("no ingresaste un numero");
    if (typeof n !=="number")console.error(` esto no es un numero `);
    if (base === undefined)return console.warn(" no ingresaste la base");
    if (typeof base !=="number")return console.error("esto no un numero");
    // binario en base 2
    if (base===2 ){
        console.info(`${n} base ${base} = ${parseInt(n,base)} en base 10  `);
        // decimal en base 1
    }else if(base ===10){
        console.info(` ${n} base ${base} = ${(n.toString(2))} en base 2 `);
    }else{
         return console.info(`${base} No es base 10 ó 2...`);
    }
}
binario_Decimal();
binario_Decimal("")
binario_Decimal(4,"")
binario_Decimal(111111,2);
binario_Decimal(63,10);

    /*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada,
     pe. miFuncion(1000, 20) devolverá 800.*/


    if (typeof monto !=="number")return console.error("solo se permite numero");

    if (typeof monto !=="number")return console.error("solo se permite numero");

     /*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy,
      pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */
      const fecha_Valida=(fecha=undefined)=>{
        if(fecha === undefined) return console.warn("no ingresate la fecha");

        if(!( fecha instanceof Date))return console.error("el valor q ingresaste no es una fecha valida");

        let hoyMenosFecha= new Date().getTime()-fecha.getTime();

        let aniomda =1000*60*60*24*365;

        let aniohumano =Math.floor(hoyMenosFecha/aniomda)

        return (Math.sign(aniohumano)===-1)

        ? console.info(`faltan ${Math.abs(aniohumano)} para el ${fecha.getFullYear()}`)

        :(Math.sign(aniohumano)===1)

        ? console.info( `Han pasado ${aniohumano} año desde ${fecha.getFullYear()}`)

        : console.info(`Estamos en año actual ${fecha.getFullYear()}`);
    }
    fecha_Valida();
    fecha_Valida([]);
    fecha_Valida(new Date(1991,5,16));
    fecha_Valida(new Date (2091,5,16));
    fecha_Valida(new Date());

/*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes,
 pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

 const contarVocalConso =(cadena=undefined)=>{
    if(!cadena) return console.warn(" no ingresaste un texto.");
    if (typeof cadena !=="string") return console.error(`el valor ${cadena} ingresado, no es un texto`)

/*
    let vocales = "aáeéiíoóuú";
    let consonantes= "bcdfghjklmnpqrstvwxyz";
    let cantidadVocales =0;
    let cantidadConsonante =0;
    let resul
    for(const letra of cadena){
        if(vocales.includes(letra.toLocaleLowerCase())){
            cantidadVocales++
          
        }
         if(consonantes.includes(letra.toLocaleLowerCase())){
          cantidadConsonante++
            }
        }
        return console.info(`el texto ${cadena} tiene  ${cantidadVocales} vocales y ${cantidadConsonante} consonantes`)
    }*/
    // expresiones regulares
    let vocales =0;
    let consonantes =0;
    for(const letra of cadena){
      if (/["aáeéiíoóuú"]/.test(letra.toLocaleLowerCase())) {
        vocales ++

      }if(/["bcdfghjklmnñpqrstvwxyz"]/.test(letra.toLocaleLowerCase())){
        consonantes++
      }

    }//return console.info(`el texto ${cadena} tiene  ${vocales} vocales y ${consonantes} consonantes`)
    return console.info({
        cadena,
        vocales,
        consonantes
    })

}
contarVocalConso();
contarVocalConso(3);
 contarVocalConso("hola mundo");

/*19) Programa una función que valide que un texto sea un nombre válido, pe. 
miFuncion("Jonathan MirCha") devolverá verdadero.*/
const validar_Texto =(cadena="")=>{
    if (!cadena) return console.warn("no ingresate el texto.");
    if (typeof cadena !=="string") return console.error(`el valor ${cadena} ingresado, no es un texto`);

     //return console.info(cadena.includes("jonathan mircha"));

     // expresesiones regulares
        let expreReg = /^[a-zñaáeéiíoóuú\s]+$/g.test(cadena.toLocaleLowerCase());
       // evalúe.test(cadena.toLocaleLowerCase())
        /*
        if (expreReg){
            console.info(`${cadena}, es un Nombre Valido.`);
        }else{
            console.info (`${cadena}, No es un Nombre Válido `)
        }return (expreReg)*/
        return (expreReg)
        ?console.info(`${cadena},es un Nombre Valido`)
        :console.info( `${cadena},No es un Nombre Valido` )



}
validar_Texto();
validar_Texto(3)
validar_Texto("JOSE MIGUEL CABRERA,*")


/*20) Programa una función que valide que un texto sea un email válido, pe.
 miFuncion("jonmircha@gmail.com") devolverá verdadero.*/

 const valiar_email=(cadena="")=>{
    if (!cadena)return console.warn("no ingresaste el texto");
    if (typeof cadena !=="string")return console.error(`el valor ${cadena} ingresado, no es un texto`);
    if (typeof monto !=="number")return console.error("solo se permite numero");

        //return console.info(cadena.includes("jonmircha@gmail.com"));
        let expreReg =/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(cadena);
        return (expreReg)
        ? console.info(`${cadena}, es un Email Valido`)
        :   console.info(`${cadena}, No es un Email Valido`)

 }
 valiar_email();
 valiar_email("JONMIRCHA@GMAIL.COM");