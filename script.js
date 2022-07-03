console.log("Welcome to the Game")
let music=new Audio("music.mp3")
let turn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let t="X"
let gamover=false;
const changeTurn=()=>{
    return t==="X"?"0":"X"
}
const checkwin=()=>{
    let boxx=document.getElementsByClassName("boxtext");
 let wins=[
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],

 ]
 wins.forEach(e=>{
    if((boxx[e[0]].innerText===boxx[e[1]].innerText)&&(boxx[e[2]].innerText===boxx[e[1]].innerText)&&boxx[e[0]].innerText!=='')
    {
        document.querySelector(".info").innerText=boxx[e[0]].innerText+" WON";
        gamover=true;
        document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="200px";
        document.querySelector(".line").style.width = "20vw"
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
    }
 })
}

let boxes=document.getElementsByClassName("box")
console.log(boxes)
Array.from(boxes).forEach(element=>{
    let boxtexts=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtexts.innerText===''){
            boxtexts.innerText=t;
            t= changeTurn();
            turn.play();
            checkwin();
            if(!gamover)
            document.getElementsByClassName("info")[0].innerText="Turn  for "+t;
            
        }
    })
})
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    t = "X"; 
    gameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + t;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})