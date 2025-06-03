//mit Hilfe von Google und ChatGPT 

let angle = 0
let balanceSpeed = 1
let stick = document.getElementById('stick')
let loop
let tiltDirection = 0

let position = 0
let pathLength = 0

let gameRunning2 = false


//Balancing:
function balance() {
    document.getElementById("infosH").style.display = "none"
    document.getElementById("tut").style.display = "block"
}

function startBalancing() {
    document.getElementById("tut").style.display = "none"
    document.getElementById("game").style.display = "block"
    startTimer2()
    loop = setInterval(gameLoop2, 100)
    moveDot()
    moveDotAnimation = requestAnimationFrame(moveDot)


    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            tiltDirection = -1
            angle -= 1
        } else if (e.key === 'ArrowRight') {
            tiltDirection = 1
            angle += 1
        }
        updateStick()
    })
}

function updateStick() {
    stick.style.transform = `translateX(-50%) rotate(${angle}deg)`
}

function gameLoop2() {
    if(gameRunning2){
        if (tiltDirection === 0) {
            if (angle < 0) {
                angle += balanceSpeed * -1
            } else if (angle > 0) {
                angle += balanceSpeed * 1
            }
        }    
        updateStick()
        if (Math.abs(angle) >= 25 && madeIt2 == false) {
            document.getElementById("heightsScreen").style.display = "none"
            console.log("died bc angle")
            died()
            clearInterval(loop)
        }
        if (hasReachedEndOfPath()) {
            afterBalance()
    }
    }
}


document.addEventListener('keyup', () => {
    tiltDirection = 0
})


//dot moving along the "way"
function moveDot() {
    let path = document.getElementById("myPath")
    let dot = document.getElementById("dot")

    if (path && path instanceof SVGPathElement) {
        let point = path.getPointAtLength(pathLength * position)
        dot.setAttribute("cx", point.x)
        dot.setAttribute("cy", point.y)

        if (Math.abs(angle) <= 7) {
            position += 0.0002
            if (position > 1) position = 1
        }

        moveDotAnimation = requestAnimationFrame(moveDot)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const path = document.getElementById("myPath")
    if (path && path instanceof SVGPathElement) {
        pathLength = path.getTotalLength()
    } else {
        console.error("The path element is not found or not a valid SVG path.")
    }
})


function hasReachedEndOfPath() {
    return position >= 1
}
