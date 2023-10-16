/*document.write("esto es javascripts");
console.log(document.doctype);
console.log(document.images);
console.log (document.links);
console.log(document.title);
console.log(document.URL);
console.log(document.forms);
console.log(document.scripts);
console.log(document.location)*/
/*
const $menu =document.getElementById("menu");
const $nav= document.getElementById("menus");
const $figura =document.querySelectorAll("cards")

console.log($menu);
console.log($nav);
console.log($figura);
*/
/*
const $linkDom = document.querySelector(".link-dom");
console.log($linkDom.style);
console.log($linkDom.getAttribute(""));
// css
$linkDom.style.setProperty("text-decoration","none");
$linkDom.style.setProperty("display","block");
$linkDom.style.width="50%";
$linkDom.style.textAlign ="center";
$linkDom.style.marginLeft ="auto";
$linkDom.style.marginRight ="auto";
$linkDom.style.padding="1rem";
$linkDom.style.borderRadius=".5rem"

// variable CSS-Custom properties
const $html= document.documentElement;
const $body=document.body;

let varDakColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellow = getComputedStyle($html).getPropertyValue("--yelow-color");

console.log(varDakColor,varYellow);

$body.style.backgroundColor=varDakColor
$body.style.color = varYellow;
*/
// clases en css
/*
const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
//agregar una clase
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"))
//para saber nombre de la clase
console.log($card.className);
//lista de clase
console.log($card.classList);
// remove e para remover clase
$card.classList.remove("rotate-45");
//clase lista q contiene
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
const  $v = document.querySelector(".card2");
console.log($v)
console.log($v.className)
$v.classList.add("rotate-135");
console.log($v.className)
console.log($v.classList);
$v.classList.remove("rotate-135");
console.log($v.className)
// toggle q hace saca la classe esta hilden o escondida
$v.classList.toggle("rotate-135");
console.log($v.className);
console.log($v.classList)

//replazar una clase 
$v.classList.replace('rotate-135','rotate-45');
console.log($v);



*/

//console.log($card.children[2].toggle("rotate-135"))
//fragmento
/*
mese=[
    "enero",
    "febrero",
    "marzo",
    "abril",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
]
const $ul=document.createElement("ul");
const $fragment = document.createDocumentFragment();
mese.forEach((el)=>{
 const $li =document.createElement("li");
 $li.textContent =el;
 $fragment.appendChild($li)
})
document.write("<h3>Meses del AñO</H3>");
$ul.appendChild($fragment);
document.body.append($ul);//aqui se agrega el fragment al body
*/

const $prueba= document.createElement("p");
const text="crenado texto dinamicamente"
$prueba.innerText=text;
document.body.append($prueba);


const $ul = document.createElement("ul");
const estaciones =["primavera","verano","otono","invierno"];
const fragment = document.createDocumentFragment()
estaciones.forEach(el=>{
    const $li=document.createElement("li");
    $li.textContent=el;// para tex conte agrarlo es es 
    fragment.appendChild($li)// agregando fragmento 

})
$ul.appendChild(fragment)// agrengando el fragmento lista
document.body.append($ul)//aqui se agregan los elementos a la lista