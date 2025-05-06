
//Sprite game / drowning page:
let GAME_SCREEN = {
    surface: document.getElementById('surface'),
    surfaceScale: '80%',
    debug_output: document.getElementById('debug_output'),
    redbox: document.getElementById('redBox')
}

// Scale the surface to xx% of the screen width
GAME_SCREEN.surface.style.transform = `scale(${parseFloat(GAME_SCREEN.surfaceScale)/100 * (window.innerWidth / surface.clientWidth)})`;


let GAME_CONFIG = {
    gameSpeed: 15, // game loop refresh rate (pictures per second)
    characterSpeed: 5 //0.8 // move offset in PX
}

let gameRunning = true 

function gameLoop(){
    if (!gameRunning) return 

    console.log("loop")

    if (KEY_EVENTS.leftArrow && parseFloat(PLAYER.box.style.left) > -190 && clickedRead) {
        movePlayer(-GAME_CONFIG.characterSpeed, 0, -1)
        animatePlayer()
    }
    if (KEY_EVENTS.rightArrow && parseFloat(PLAYER.box.style.left) < 270 && clickedRead) {
        movePlayer(GAME_CONFIG.characterSpeed, 0, 1)
        animatePlayer()
    }
    if (KEY_EVENTS.upArrow && parseFloat(PLAYER.box.style.top) > -435 && clickedRead) {
        movePlayer(0, -GAME_CONFIG.characterSpeed, 0)
        animatePlayer()
    }
    if (KEY_EVENTS.downArrow && parseFloat(PLAYER.box.style.top) < 20 && clickedRead) {
        movePlayer(0, GAME_CONFIG.characterSpeed, 0)
        animatePlayer()
    }

    handleCollision()

    setTimeout(gameLoop, 1000 / GAME_CONFIG.gameSpeed)
}


function handleCollision() {
    if (isColliding(PLAYER.box, GAME_SCREEN.redbox, -30)) {
        checkStatus(-5, 2)
    }
}

