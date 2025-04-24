
/***********************************
 * PLAYER
 ***********************************/
let PLAYER = {
    box: document.getElementById('player'),
    spriteImg: document.getElementById('spriteImg'),
    spriteImgNumber: 0,
    spriteDirection: 1
}

PLAYER.box.style.left = PLAYER.box.style.left || '0px'
PLAYER.box.style.top = PLAYER.box.style.top || '0px'




/***********************************
 * MOVE
 * **********************************/
/**
 * @param {number} dx - player x move offset in pixel
 * @param {number} dy - player y move offset in pixel
 * @param {number} dr - player heading direction (-1: look left || 1: look right)
 */

function movePlayer(dx, dy, dr) {
    let originalX = parseFloat(PLAYER.box.style.left);
    let originalY = parseFloat(PLAYER.box.style.top);


    PLAYER.box.style.left = (originalX + dx) + 'px';
    PLAYER.box.style.top = (originalY + dy) + 'px';

    if (dr != 0 && dr != PLAYER.spriteDirection) {
        PLAYER.spriteDirection = dr;
        PLAYER.box.style.transform = `scaleX(${dr})`;
    }
}


/***********************************
 * ANIMATE PLAYER
 * **********************************/
function animatePlayer() {
    console.log("animate player works")
    if (PLAYER.spriteImgNumber < 6) { // switch to next sprite position
        PLAYER.spriteImgNumber++;
        let x = parseFloat(PLAYER.spriteImg.style.right);
        x += 50; // ANPASSEN!
        console.log(PLAYER.spriteImgNumber)
        PLAYER.spriteImg.style.right = x + "px";
    } else { // animation loop finished: back to start animation
        PLAYER.spriteImg.style.right = "0px";
        PLAYER.spriteImgNumber = 0;
    }
}

/*function animatePlayer() {
    if (PLAYER.spriteImgNumber < 5) {
      PLAYER.spriteImgNumber++
    } else {
      PLAYER.spriteImgNumber = 0
    }
  
    let frameWidth = 85 // set this to your actual frame width in pixels
    PLAYER.spriteImg.style.backgroundPosition = `-${PLAYER.spriteImgNumber * frameWidth}px 0`
  }*/

