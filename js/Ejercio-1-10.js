/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/

const cadena_texto= (cadena="")=>{

    if(!cadena)return console.warn('Por Favor Ingrese una Cadena Texto.');
    
    if ( typeof cadena =="number")return console.warn("Esto No Es Un Texto");

    console.log(`La Cadena de Texto completa ${cadena} Tiene ${cadena.length}  Caracteres.`);
}

cadena_texto("")
cadena_texto(2)
cadena_texto("hola mundo");

/************************************************************************ */ 

2/*Programa una función que te devuelva el texto recortado según el número de caracteres 
indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola*/

 const cadena_recortado = (cadena="",longitud =undefined)=>{

    if(!cadena) return console.warn("Por Favor Ingrese una Cadena Texto.");

    if(longitud=== undefined) return console.error( "no ingresaste la longuitud recortar");

    //if (typeof cadena === "number") return console.warn("Esto no Es un Texto.");

    console.info(`La cadena completa es ${cadena} la cadena recortada ${cadena.slice(0,longitud)}`);   
 }

 cadena_recortado("");
 cadena_recortado("hol hola");
 cadena_recortado("hola mundo",4);

 /**************************************************************************************************/
 /*3) Programa una función que dada una String te devuelva un Array de textos separados
  por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

const texto_Array =(cadena="",separados=undefined)=>{

    if (!cadena) return console.warn("Por Favor Ingrese una Cadena texto");
    if (separados === undefined) return console.error("no ingresaste el separador");
    //if(typeof cadena === "number") return console.warn("Esto no es un texto");

    console.info(cadena.split(separados))

}

texto_Array("");
texto_Array(1);
texto_Array("hola que tal",",");

/*************************************************************************************************** */
/*4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo.
 */

const repetir_Texto =(cadena="",repetir=undefined)=>{
     if(!cadena) return console.warn("no ingresate ningun texto");
     if(repetir=== undefined) return console.error("no ingresaste el el texto repetir");
     console.info(cadena.repeat(repetir));

}
repetir_Texto("");
repetir_Texto("hola mundo");
repetir_Texto("hola mundo" , 3);

/********************************************************************************************************************** */
/**5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

const invetir_palabra=(cadena="" ,separador=undefined ,segundo2=undefined)=>{
    if(!cadena ) return console.warn("no ingresate ningun texto");
    if(separador === undefined) return console.error ("no ingresaste un separador"); 
    if(segundo2 === undefined ) return console.error("no ingresaste el segundo separador");

    console.info(cadena.split(separador).reverse().join(segundo2));

}
invetir_palabra("");
invetir_palabra("hola mundo");
invetir_palabra("hola mundo","")
invetir_palabra("hola mundo","","");

/***************************************************************************************************************************** */
/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
 pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

 const texto_Largo=(cadena="",repetir="")=>{ 
    if(!cadena) return console.warn("no ingresate ningun texto");
    if(!repetir) return console.error("no ingresate el parametro");

     let i=0,contador=0;

     while(i!==-1){
        i = cadena.indexOf(repetir,i);
        if(i!==-1){
            i++
            contador++
        }
     }
     return console.info(`la palabra ${repetir} se repite ${contador} veces`);
    
 }
 texto_Largo("");
 texto_Largo("hola");
 texto_Largo("hola mundo adios mundo mundo","mundo");

 /**************************************************************************************************************/
 /*7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
 (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

 const polidramo=(texto="")=>{
    if (!texto) return console.warn("No ingresaste un texto ");
     texto= texto.toLocaleLowerCase()
    let reverse = texto.split('').reverse().join("");
   /*
   //operador ternario
 return(texto === reverse)
   ? console.info(`si es palidromo la palabra original es ${texto} y alreves ${reverse}`)
   :    console.info(`No es palidromo la palabra original es ${texto} y alreves ${reverse}`)
   */
  if(texto === reverse){
    console.info(`si es palidromo la palabra original es ${texto} y alreves ${reverse}`)
  }else{
    console.info(`No es palidromo la palabra original es ${texto} y alreves ${reverse}`)
  }

 }
 polidramo("");
 polidramo("Salas")
 polidramo("reconocer");
 polidramo("Somos");
 polidramo("hola");
 /****************************************************************************************************************** */
