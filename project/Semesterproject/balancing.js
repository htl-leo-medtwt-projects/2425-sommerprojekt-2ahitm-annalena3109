let angle = 0
let balanceSpeed = 1
let stick = document.getElementById('stick')
let loop
let tiltDirection = 0

let position = 0
let pathLength = 0

function balance() {
    document.getElementById("infosH").style.display = "none"
    document.getElementById("tut").style.display = "block"
}

function startBalancing() {
    document.getElementById("tut").style.display = "none"
    document.getElementById("game").style.display = "block"
    startTimer2()
    loop = setInterval(gameLoop2, 100)
}

function updateStick() {
    stick.style.transform = `translateX(-50%) rotate(${angle}deg)`
}

function gameLoop2() {
    if (tiltDirection === 0) {
        if (angle < 0) {
            angle += balanceSpeed * -1
        } else if (angle > 0) {
            angle += balanceSpeed * 1
        }
    }    
    updateStick()
    if (Math.abs(angle) >= 25) {
        document.getElementById("heightsScreen").style.display = "none"
        died()
        clearInterval(loop)
    }
    if (hasReachedEndOfPath()) {
        afterBalance()
    }
}

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

document.addEventListener('keyup', () => {
    tiltDirection = 0
})

document.addEventListener("DOMContentLoaded", () => {
    const path = document.getElementById("myPath")
    const dot = document.getElementById("dot")

    if (path && path instanceof SVGPathElement) {
        pathLength = path.getTotalLength()

        const speed = 0.0005

        function moveDotControlLoop() {
            const point = path.getPointAtLength(pathLength * position)
            dot.setAttribute("cx", point.x)
            dot.setAttribute("cy", point.y)

            if (Math.abs(angle) <= 7) {
                position += speed
                if (position > 1) position = 1
            }

            requestAnimationFrame(moveDotControlLoop)
        }

        requestAnimationFrame(moveDotControlLoop)
    } else {
        console.error("The path element is not found or not a valid SVG path.")
    }
})

function hasReachedEndOfPath() {
    return position >= 1
}
