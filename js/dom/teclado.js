const d=document;
export function moverBall(e,ball, stage){
    const $ball =d.querySelector(ball);
    const $state =d.querySelector(stage);
    console.log(e.keyCode)
    console.log(e.key)

    switch(e.keyCode){
        case 37: //left arrow
        break;
        case 38: //up arrow
        break;
        case 39: //right arrow
        break;
        case 40: //down arrow;
        break;
        default:
            break;

    }
}
export function shortcuts(e){
    console.log(e);
    console.log(e.type)

}