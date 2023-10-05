
/* 21) Programa una función que dado un array numérico devuelve otro array con los
 números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/
 const validar_array=(aray=undefined)=>{
    if (aray === undefined) return console.warn("no ingresaste un arreglo de numero");

    if (!(aray instanceof Array)) return console.warn("no ingresaste un array");

    if (aray.length===0) return console.warn("el arreglo esta vacio");

    for (const num of aray) {
        if(typeof num !=="number") return console.error(`el valor ${num}, no es un numero `); 
        
    }
         const neArey = aray.map(el=>el*el);
        return console.info(`arreglo original ${aray}\n el arreglo elevado al cuadrado ${neArey}`)
 }
 validar_array();
 validar_array({});
 validar_array([]);
 validar_array(["1,2,5"])
 validar_array([1,4,5]);

/*22) Programa una función que dado un array devuelva el número mas
 alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/

 const numero_Alto =(arr=undefined)=>{
     if (arr === undefined) return console.warn("no ingresaste un arreglo de numero");

    if (!(arr instanceof Array)) return console.warn("no ingresaste un array");

    if (arr.length===0) return console.warn("el arreglo esta vacio");
    for (const num of arr) {
        if(typeof num !=="number")return console.error(`${num} , no es un numero`);
    
    }
    const valorMax =Math.max(...arr);
    const valorMin = Math.min(...arr);

    return console.info(`Arreglo principal ${arr}\n valor maximo ${valorMax} \n valor minimo ${valorMin}`);

 }
numero_Alto([1, 4, 5, 99, -60]);

/*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero 
almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0])
 devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/
 const pares_ImparARay=(arr=undefined)=>{

     if (arr === undefined) return console.warn("no ingresaste un arreglo de numero");

    if (!(arr instanceof Array)) return console.warn("no ingresaste un array");

    if (arr.length===0) return console.warn("el arreglo esta vacio");
    for (const num of arr) {
        if(typeof num !=="number")return console.error(`${num} , no es un numero`);
    }
    return console.info({
        pares :arr.filter(num => num % 2 === 0 ) ,
        impares:arr.filter(num => num % 2 ===1)

    })

 }
 pares_ImparARay([1,2,3,4,5,6,7,8,9,0]);
/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
 el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
  pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/
  const ordinario_des=(arr=undefined)=>{
     if (arr === undefined) return console.warn("no ingresaste un arreglo de numero");

    if (!(arr instanceof Array)) return console.warn("no ingresaste un array");

    if (arr.length===0) return console.warn("el arreglo esta vacio");
    for (const num of arr) {
        if(typeof num !=="number")return console.error(`${num} , no es un numero`);
    }
    return console.info({
        asc : [...arr].sort((a,b)=> a- b),
        desc: arr.sort((a,b)=> b- a)
    })
    
}
ordinario_des([7, 5,7,8,6]);
/*25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
 pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/
 const duplicado=(arr=undefined)=>{

     if (arr === undefined) return console.warn("no ingresaste un arreglo de numero");

    if (!(arr instanceof Array)) return console.warn("no ingresaste un array");

   /* if (arr.length===0) return console.warn("El arreglo esta vacio");
    for (const num of arr) {
        if(typeof num !=="number")return console.error(`${num} , no es un numero`);
    }*/
  /* let arregloSinRepetidos = arr.filter(function(elemento,inidice,arreglo){
     return arreglo.indexOf(elemento) === inidice
   }) 
       console.info(arregloSinRepetidos); */
       
       let setSinRepetir = new Set(arr);
      
       return console.info(setSinRepetir);

 }

 duplicado(["x", 10, "x", 2, "10", 10, true, true]);

 
/*26) Programa una función que dado un arreglo de números obtenga el promedio,
 pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/
 const promedio_array=(arr=undefined)=>{
    if (arr === undefined) return console.warn("No ingresaste un arreglo de numeros");
    if (!(arr instanceof Array)) return console.warn("No ingresaste un array");
    if(arr.length === 0) return console.error("el arreglo esta vacio ");
    for(const num of arr){
        if (typeof num !=="number") return console.warn(`${num}, no es un numero`);
    } 
        let total = arr.reduce((a,b)=> a+b)/arr.length;

    console.info({
        total:arr,
        promedio:total

    });
   // console.info(promedioMin);
 }
 promedio_array();
 promedio_array({});
 promedio_array([]);
 promedio_array([9,8,7,6,5,4,3,2,1,0]);
