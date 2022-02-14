const square = document.querySelectorAll(".square")
const box0 = document.querySelector("#box0")
const box1 = document.querySelector("#box1")
const box2 = document.querySelector("#box2")
const box3 = document.querySelector("#box3")
const box4 = document.querySelector("#box4")
const box5 = document.querySelector("#box5")
const box6 = document.querySelector("#box6")
const box7 = document.querySelector("#box7")
const box8 = document.querySelector("#box8")
const message = document.querySelector("#message")
const reset = document.querySelector("#reset")

let isWinner = 0

const test = () => {
    

    if(box0.className === box1.className && box0.className === box2.className) {
        isWinner = 1
    } else if (box0.className === box3.className && box0.className === box6.className) {
        isWinner = 1
    } else if (box0.className === box4.className && box0.className === box8.className) {
        isWinner = 1
    } else if (box1.className === box4.className && box1.className === box7.className) {
        isWinner = 1
    } else if (box2.className === box5.className && box2.className === box8.className) {
        isWinner = 1
    } else if (box3.className === box4.className && box3.className === box5.className) {
        isWinner = 1
    } else if (box6.className === box7.className && box6.className === box8.className) {
        isWinner = 1
    } else if (box2.className === box4.className && box2.className === box6.className) {
        isWinner = 1
    } else if (document.querySelector(".square1") === null && 
    document.querySelector(".square2") === null && 
    document.querySelector(".square3") === null && 
    document.querySelector(".square4") === null && 
    document.querySelector(".square5") === null && 
    document.querySelector(".square6") === null &&
    document.querySelector(".square7") === null &&
    document.querySelector(".square8") === null &&
    document.querySelector(".square9") === null) {
        isWinner = 2
    }
    return isWinner
} 


const makeX = (event) => {
    event.target.classList.remove(event.target.classList)
    event.target.classList.add("X")
    const newMarkX = document.createElement("div")
    newMarkX.classList.add("mark")
    newMarkX.innerText = "X"
    if (event.target.firstChild === null) {
        event.target.appendChild(newMarkX)
        test()
        if (test() === 1){ 
            message.innerText = "X's win!"
            for(let i = 0; i <9; i++) {
                document.querySelector(`#box${i}`).removeEventListener("click", makeX)
            }
            return
        } else if(test() === 2) {
            message.innerText = "It's a draw!"
            return
        } else if (test() === 0){
        message.innerText = "It's O's turn!"
        for (let i = 0; i <9; i++) {
        document.querySelector(`#box${i}`).removeEventListener("click", makeX)
        }
        for (let i = 0; i <9; i++) {
        document.querySelector(`#box${i}`).addEventListener("click", makeO)}
        } 
} 

}

const makeO = (event) => {
    event.target.classList.remove(event.target.classList)
    event.target.classList.add("O")
    const newMarkO = document.createElement("div")
    newMarkO.classList.add("mark")
    newMarkO.innerText = "O"
    if (event.target.firstChild === null) {
        event.target.appendChild(newMarkO)
        test()
        if (test() === 1){ 
            message.innerText = "O's win!"
            for(let i = 0; i <9; i++) {
                document.querySelector(`#box${i}`).removeEventListener("click", makeO)
            }
            return
        } else if(test() === 2) {
            message.innerText = "It's a draw!"
            return
        } else if (test() === 0) {
        message.innerText = "It's X's turn!"
        for (let i = 0; i <9; i++) {
        document.querySelector(`#box${i}`).removeEventListener("click", makeO)
        }
        for (let i = 0; i <9; i++) {
        document.querySelector(`#box${i}`).addEventListener("click", makeX)}
        }

    } 

}

const makeGrid = () => {
    for (let i = 0; i < 9; i++) {
        document.querySelector(`#box${i}`).addEventListener("click", makeX)
    }
}

const resetGame = () => {
    isWinner = 0
    for(let i = 0; i <9; i++) {
        while(document.querySelector(`#box${i}`).firstChild) {
            document.querySelector(`#box${i}`).removeChild(document.querySelector(`#box${i}`).firstChild)
        }
    }
    for (let i = 0; i < 9; i++) {
        document.querySelector(`#box${i}`).addEventListener("click", makeX)
    message.innerText = "It's X's turn!"
}
    for(let i = 0; i<9; i++) {
        document.querySelector(`#box${i}`).classList.remove(document.querySelector(`#box${i}`).classList)
        document.querySelector(`#box${i}`).classList.add(`square${i+1}`)
    }
}


document.addEventListener("DOMContentLoaded", () => {
    makeGrid()
    reset.addEventListener("click", resetGame)
})
