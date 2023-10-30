const d=document;
let x =0;
let y=0;
export function moverBall(e,ball, stage){
    const $ball =d.querySelector(ball);
    const $state =d.querySelector(stage);
    const limisBall =$ball.getBoundingClientRect();
    const limisState =$state.getBoundingClientRect();

   /* console.log(limisBall,limisState)
    console.log(e.keyCode)
    console.log(e.key)*/

  /*const  mover=(direction)=>{
        $ball.style.transform=`translate${x*10}px,${y*10}px`;

    };*/
 /** para contolar los q es bola  */
    switch(e.keyCode){
        case 37: //left arrow
        //mover("left")
        if(limisBall.left > limisState.left){
            e.preventDefault();
            x--;
        }
        break;
        case 38: //up arrow
       // mover("up");
        
        if(limisBall.top > limisState.top){
            y--;
            e.preventDefault();
        }
        break;
        case 39: //right arrow
        //mover("right");
        
     
        if(limisBall.right < limisState.right){
            e.preventDefault();
            x++;
        }
        break;
        case 40: //down arrow;  
       // mover("down");
    
        if(limisBall.bottom < limisState.bottom){
            y++
            e.preventDefault();
        }
        break;
        default:
            break;
             

    }//para mover la posicion transladar
     $ball.style.transform=`translate(${x*10}px,${y*10}px)`;
}
export function shortcuts(e){
 /*   console.log(e);
    console.log(e.type)*/

}