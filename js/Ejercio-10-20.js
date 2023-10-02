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
            return console.info(`${g}°C = ${Math.round((g*(9/5))+32)}°F`)
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
    grado(100,"F")
    
    