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
    constructor({id,titulo,director,ano_Estreno,paísesOr,géneros,calificación}){
        this.id = id;
        this.titulo= titulo;
        this.director= director;
        this.año_estreno= ano_Estreno;
        this.paisesorigen= paísesOr;
        this.generos= géneros;
        this.calificacion= calificación; 

        // intancias el metodo 
        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(ano_Estreno);
    }

    validarCadena(propiedad,valor){
        if(!valor)return console.warn(`${propiedad} "${valor}" esta vacio`);

        if(typeof valor !="string")return console.error(`${propiedad} "${valor}", ingresado, no es una cadena texto`);

        return true;
    }
    validarLonguitudCadena(propiedad,valor,longuitud){
        if (valor.length > longuitud) return console.error ( `${propiedad} "${valor}" excede el numero de caracteres permitido
        ${longuitud}`)
        return true;
    }
    validadNumero(propiedad,valor){
        if(!valor)return console.warn(`${propiedad} "${valor}" esta vacias`);
        if (typeof valor !=="number") console.error(`${propiedad} "${valor}" ,ingresado, no es un numero`);
        return true;

    }

     validarIMDB(id){
        if(this.validarCadena("IMDB id",id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
                return console.error(`IMDB id "${id}" no es valido, debe tener
                9 caracteres, y los 2 primero letra, y los 7 restante numero. `);
            }
        }    
     }
     validarTitulo(titulo){
        if(this.validarCadena("Titulo",titulo))
           this.validarLonguitudCadena("titulo",titulo,100)
            
        

     }
     validarDirector(director){
        if (this.validarCadena("director",director))
            this.validarLonguitudCadena("director",director,50);
        

     }
     validarEstreno(ano_Estreno){
        if(this.validadNumero("año de estreno",ano_Estreno)){
            if(!(/^([0-9]){4}$/.test(ano_Estreno))){
                return console.error(`año de estreno "${ano_Estreno}"  solo de permite 4 digitos`);
            }
        }    

     }
}
const miPelicula = new Pelicula({
    id:"tt1234567",
    titulo:"asssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    director:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ano_Estreno:{1234}
});


