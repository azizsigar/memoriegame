const container = document.querySelector(".game")
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"]
const colorPick = [...colors, ...colors]
const boxCount = [colorPick.length]

let revealCount = 0
let activebox = null
let endMove = false

// function
function buildColor(color) {
    const element = document.createElement("div")
    element.classList.add("box")
    element.setAttribute("data-color", color)
    element.setAttribute("data-revealed", "false")
    element.addEventListener("click", () => {
        const revealed = element.getAttribute("data-revealed");

        if (endMove
            ||revealed === "true"
            ||element === activebox
            ) {
            return

        }
        element.style.backgroundColor = color
        if (!activebox) {
            activebox = element
            return
        }

        const match = activebox.getAttribute("data-color")
        if (match===color) {
            activebox.setAttribute("data-revealed","true")
            element.setAttribute("data-revealed","true")
            endMove=false
            activebox=null
            revealCount +=2

            if (revealCount=== boxCount) {
                
                alert("thanks for playing, please refresh the page")
            }
            return
        }
        
        endMove = true
        setTimeout(() => {
            element.style.backgroundColor = null
            activebox.style.backgroundColor = null
            endMove= false
            activebox = null
        }, 1000);

        console.log(activebox)
    })


    return element
}

// create box
for (let i = 0; i < boxCount; i++) {
    const randomIndex = Math.floor(Math.random() * colorPick.length)
    const color = colorPick[randomIndex]
    const box = buildColor(color)
    colorPick.splice(randomIndex, 1)
    container.appendChild(box)
    console.log(color)
}