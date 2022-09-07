console.log("Welcom to my code");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let gameovers = false;

//function to change turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}
//function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext")
    let win = [
        [0, 1, 2, 0, 9, 0],
        [0, 3, 6, -20.2, 30, 90],
        [0, 4, 8, 0, 30, 45],
        [1, 4, 7, 0, 30, 90],
        [3, 4, 5, 0, 29.5, 0],
        [2, 5, 8, 20.5, 30, 90],
        [2, 4, 6, 0, 30, 135],
        [6, 7, 8, 0, 50, 0],
    ]
    win.forEach((e) => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " is won"
            gameovers = true
            document.querySelector(".img-box").getElementsByTagName('img')[0].style.width = "50%"
            document.querySelector(".line").style.transform = `translate(${e[3]}vh,${e[4]}vh) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width="60vh"
            gameover.play();
        }
       
    })
}
//game logic
let boxs = document.getElementsByClassName("box");
Array.from(boxs).forEach((element) => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!gameovers) {

                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
              
            }
        }
    })
});
//Add onclick listner
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
        turn = 'X';
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        gameovers = false
        document.querySelector(".img-box").getElementsByTagName('img')[0].style.width = "0%"
        // document.querySelector(".line").style.transform = ""
        document.querySelector(".line").style.width="0"


    })
})
