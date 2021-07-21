const text_auto = document.querySelector('.text-auto')

let text = "a web developer";
let index = 1;

setInterval(writeText, 500)

function writeText(){
    text_auto.innerText = text.slice(0, index);
    index++;
    if(index > text.length){
        index=1;
    }
}
