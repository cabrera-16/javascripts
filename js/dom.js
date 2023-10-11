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

console.log(varDakColor,varYellow)
$body.style.backgroundColor=varDakColor
$body.style.color = varYellow
