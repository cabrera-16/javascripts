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
/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/
const eliminar_Patron=(texto="",patron="")=>{
   
  if (!texto) return console.warn("No ingresate el texto");
  if (!patron) return console.error(" no ingresaste un patron");
  /*ojo Para una búsqueda global que no distinga entre mayúsculas y 
  minúsculas, utilice el modificador "i" junto con el modificador g. */
  console.info(texto.replace (new RegExp (patron ,"ig"),""));
  console.log (patron);
  console.log(texto)
}
eliminar_Patron("");
eliminar_Patron("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminar_Patron("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz");

/************************************************************************************ */

/**9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */

const numero_Aleatorio=()=> {return console.info(Math.round(Math.random()*100+500))}
numero_Aleatorio();

/*10) Programa una función que reciba un número y evalúe si es capicúa o 
no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/

const numero_Capicua = (numero=0)=>{
  if (!numero)return console.warn("No ingresaste el numero");
  if (typeof numero ==="string") return console.error("esto no es un numero es una cadena");
// toString te devuelve una representación en cadena de texto del objeto sobre el cual lo invoque
let numero_Cambiado=numero.toString();
let alreves = numero_Cambiado.split("").reverse().join("")


if (numero_Cambiado === alreves){
  console.info(`si es capicua numero original ${numero_Cambiado} numero al reves ${alreves} Es Capicúa`)
}else {
  console.info (`No es capicua el numero original ${numero_Cambiado}, numero al revés ${alreves}`);
}
console.log(numero_Cambiado)
console.log(alreves)
}
numero_Capicua( 2002)

