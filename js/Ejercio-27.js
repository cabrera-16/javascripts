/*27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB,
 titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
- Todos los datos del objeto son obligatorios.
- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
  7 restantes números.
- Valida que el título no rebase los 100 caracteres.
- Valida que el director no rebase los 50 caracteres.
- Valida que el año de estreno sea un número entero de 4 dígitos.
- Valida que el país o paises sea introducidos en forma de arreglo.
- Valida que los géneros sean introducidos en forma de arreglo.
- Valida que los géneros introducidos esten dentro de los géneros 
aceptados*.
- Crea un método estático que devuelva los géneros aceptados*.
- Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
decimal de una posición.
- Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/

class Pelicula {
    constructor({id,titulo,director,estreno,paises,generos,clasificacion}){
        this.id = id;
        this.titulo= titulo;
        this.director= director;
        this.estreno=estreno;
        this.paises= paises;
        this.generos= generos;
        this.clasificacion= clasificacion; 

        // intancias el metodo 
        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarpaise(paises);
        this.validarGeneros(generos);
        this.validarClasificacion(clasificacion)
    }//metodo estatico
    static get generoListaGenero(){
        return ["Action","Adult", "Adventure", "Animation", "Biography", "Comedy"," Crime"," Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi","Short, Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    static generoAcetado(){
        return console.info(`los genero aceptado son ${Pelicula.generoListaGenero.join(",")}`)
    }
    // validacion los caracteres
    validarCadena(propiedad,valor){
        if(!valor)return console.warn(`${propiedad} "${valor}" esta vacio`);

        if(typeof valor !="string")return console.error(`${propiedad} "${valor}", ingresado, no es una cadena texto`);

        return true;
    }
    //validacion pde los caracteres
    validarLonguitudCadena(propiedad,valor,longuitud){
        if (valor.length > longuitud) return console.error ( `${propiedad} "${valor}" excede el numero de caracteres permitido
        ${longuitud}`)
        return true;
    }// validacion de los numeros
    validadNumero (propiedad,valor){

        if(!valor)return console.warn(`${propiedad} "${valor}" esta vacias`);
        if (typeof valor !=="number") console.error(`${propiedad} "${valor}" ,ingresado, no es un numero`);
        return true;

    } 
    //validacion de los areglo
    
    validarArreglo(propiedad,valor){
         if(!valor) return console.warn(`${propiedad} "${valor}" esta vacia`);

         if(!(valor instanceof Array )) return console.error(`${propiedad} "${valor}", ingresado no es un un areglo`);

         if (valor.length === 0) return console.warn(`${propiedad} "${valor}" el arreglo esta vacio`);

         for(const num of valor){
            if(typeof num !== "string") return console.error(`${propiedad} "${valor}"ingresado no es una cadena de texto`);
         }
         return true;
    }
    /************************************************************************************************************************** */
    // validacion del id
     validarIMDB(id){
        if(this.validarCadena("IMDB id",id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
                return console.error(`IMDB id "${id}" no es valido, debe tener
                9 caracteres, y los 2 primero letra, y los 7 restante numero. `);
            }
        }    
     }
     //validacion de titulo
     validarTitulo(titulo){
        if(this.validarCadena("Titulo",titulo))
           this.validarLonguitudCadena("titulo",titulo,100)
            

     } 
     //validacion director
     validarDirector(director){
        if (this.validarCadena("director",director))
            this.validarLonguitudCadena("director",director,50);
        

     }
     //validacion de los año
     validarEstreno(estreno){
        if(this.validadNumero("año de estreno",estreno)){
            if(!(/^([0-9]){4}$/.test(estreno))){
                return console.error(`año de estreno "${estreno}"  solo de permite 4 digitos`);
            }
        }    

     } 
     // validacion de los paises
     validarpaise(paises){
        this.validarArreglo("paises",paises);
        
        
     }
     //metodo validacion de los generos static 

     validarGeneros(generos){
       if (this.validarArreglo("Genero",generos)){
        // for of esta recoriendo los metodos estatico de lista de genero
        for (let  genero of generos) {
           // prueba de  los q hace for of console.log(genero,Pelicula.generoListaGenero.includes(genero));
            if(!Pelicula.generoListaGenero.includes(genero)){
                console.info(`Generos incorrecto "${generos.join(",")}"`);
                Pelicula.generoAcetado()
            }
            
            
        }
       }   
     }
     // metodo de validacion de la clasificacion
     validarClasificacion(clasificacion){
        if(this.validadNumero("Clasificaion",clasificacion)){
            if(clasificacion <0 ||clasificacion >10){
            console.error(`La clasificacion tiene q estar entre 0-10`);
            }else{
                this.clasificacion =clasificacion.toFixed(1)

            }
        }
     }
     fichaTernica(){
        console.info(`ficha ternica\ntitulo: ${this.titulo}\ndirector: ${this.director}\naño de estreno: ${this.estreno}\npaises: ${this.paises.join('-')}\ngeneros: ${this.generos.join(",")}\nclasificacion: ${this.clasificacion}\nIMDB=${this.id}`);
     }
}

//const miPelicula = new Pelicula();
const Peli=[
    {
        id:"tt1234567",
        titulo:"spideman",
        director:" Sam Raimi",
        estreno:2002,
        paises: ["estado unido"],
        generos: ["Action","Fantasy"],
        clasificacion:7.4
    },
    {
        id:"tt1234563",
        titulo:"Thor",
        director:"Alan Taylor",
        estreno:2013,
        paises: ["estado unido"],
        generos: ["Action","Adventure"],
        clasificacion:6.8

    },
    {     
        id:"tt1235478",
        titulo:"Iron man 3",
        director:"Shane Black",
        estreno:2013,
        paises: ["estado unido"],
        generos: ["Action","Adventure"],
        clasificacion:8.7

    }
]
Peli.forEach(el=> new Pelicula(el).fichaTernica())

