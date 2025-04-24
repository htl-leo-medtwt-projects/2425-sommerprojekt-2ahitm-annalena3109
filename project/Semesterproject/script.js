//variables
let username
let body = document.body
let firstPage = document.getElementById("firstPage")
let inputPage = document.getElementById("inputPage")
let spiderPage = document.getElementById("spiderPage")
let diedPage = document.getElementById("diedScreen")
let leaderboardPage = document.getElementById("leaderboardScreen")

let scenarioSpider = document.getElementById("scenario")
let userstatus = 0
let levelCount = 1
let gameCount = 0

let currentSound;
let audioWIWO = document.getElementById("wiwo")


function skip(){
    updateInfo(0, 4)
}

//audio controls:
currentSound = audioWIWO
currentSound.volume = 0.5
currentSound.play()

let slider = document.getElementById("myRange")
let muteToggle = document.getElementById("muteToggle")

let lastVolume = currentSound.volume

slider.addEventListener("input", function () {
    if (!muteToggle.checked) {
        let sliderValue = this.value
        console.log("Slider value:", sliderValue)
        currentSound.volume = sliderValue / 100
        lastVolume = currentSound.volume
    } else {
        console.log("Muted — slider inactive")
    }
})

muteToggle.addEventListener("change", function () {
    if (this.checked) {
        currentSound.volume = 0
    } else {
        currentSound.volume = lastVolume
    }
})



//info button start pages
function showInfos(){
    document.getElementById("infos").style.display = "block"
    document.getElementById("infoButton").style.display = "none"
    document.getElementById("startText").style.display = "none"
}
function closeInfos(){
    document.getElementById("infos").style.display = "none"
    document.getElementById("infoButton").style.display = "block"
    document.getElementById("startText").style.display = "block"
}


//switch side functions:
function goToInputPage(){
    firstPage.style.display = "none"
    body.style.backgroundImage = "url(img/inputBG.jpg)"
    inputPage.style.display = "block"
    myRange = document.getElementById("myRange").value
}


//save inputs and start:
function saveAndStart(){
    if(document.getElementById("nameInput").value != ""){
        inputPage.style.display = "none"
        body.style.backgroundImage = "url(img/spiderBG.jpg)"
        spiderPage.style.display = "block"
        username = document.getElementById("nameInput").value
        document.getElementById("nameInput").value = ""
    }
    else{
        alert("Type a name")
    }
    console.log("userstatus: " + userstatus + ", levelcount: " + levelCount + ", gamecount: " + gameCount + ", username: " + username)
}


//check status after every "game":
function checkStatus(points, level){
    userstatus += points
    if(userstatus >= 20){
        died()
    }
    else{
        gameCount++
        updateInfo(points, gameCount)
    }
    if(level > levelCount){
        levelCount++
    }
    console.log("userstatus: " + userstatus + ", levelcount: " + levelCount + ", gamecount: " + gameCount + ", username: " + username)
}


//next scenario
function nextScenario(){
    console.log(userstatus)

    //spider level second scenario 
    if(gameCount == 1){
        console.log("onclick scenario worked")
        document.getElementById("scenarioBox1").innerHTML = `
            <p id="scenario">
                <span>You squeeze through the narrow gap in the rock, your</span>
                <span>breath shaky from the encounter. The cave ahead is</span>
                <span>eerily silent—too silent. The walls are covered in</span>
                <span>thick, silken webs, and strands of them hang down</span>
                <span>like curtains. You take a step forward, and your</span>
                <span>foot sticks to the ground.You look down. Webbing.</span>
                <span>Thick, sticky, and coated in dust and old bones. You</span>
                <span>suddenly hear faint clicking noises from behind you</span>
                <span>—the spider is coming back. You need to move, but</span>
                <span>in front of you, the path splits into three: 1) A</span>
                <span>dark, smooth path leading downward, with no webs in</span>
                <span>2) A rocky ledge along the cave wall with only a few </span>
                <span>webs on it and 3) A tunnel lined with hanging webs,</span>
                <span>swaying slightly as if something had just passed </span>
                <span>through</span>
            </p>
            <p id="question")>Which path do you choose?</p>
            `
        document.getElementById("options1").style.display = "grid"
        document.getElementById("options1").innerHTML = `
            <div class="option" id="option1" onclick="checkStatus(100, 1)">
                    Path 1
                </div>
                <div class="option" id="option2" onclick="checkStatus(-5, 1)">
                    Path 2
                </div>
                <div class="option" id="option3" onclick="checkStatus(0, 1)">
                    Path 3
                </div>
            </div>`
    }

    //spider level third scenario
    if(gameCount == 2){
        console.log("onclick scenario worked")
        document.getElementById("scenarioBox1").innerHTML = `
            <p id="scenario">
                <span>The tunnel ends abruptly, opening into a narrow</span>
                <span>shaft leading upward. Above, you see a faint glimmer</span>
                <span>—the exit. It's close. You're almost there. But as</span>
                <span>you approach, you notice the walls—slick, sharp-</span>
                <span>edged, and covered in cracks. The only way to reach</span>
                <span>the exit is by climbing. You begin your ascent,</span>
                <span>trying to ignore the unnerving silence around you.</span>
                <span>The rocks are jagged, crumbling under your hands.</span>
                <span> The air feels heavier the higher you climb. Then—</span>
                <span>you hear it. A soft skittering behind you. Very</span>
                <span>close. You know it. You feel it. The spider is just</span>
                <span>below you, waiting. Its legs move so quietly, you</span>
                <span>barely hear it, but you can feel its presence as it </span>
                <span>moves up the wall behind you. It's not attacking—</span>
                <span>yet. But you know it's there. Every time you make a</span>
                <span>move, it seems to follow, creeping closer. The exit</span>
                <span>is within reach, but so is the spider.</span>
            </p>
            <p id="question">What do you do?</p>
            `
        document.getElementById("options1").style.display = "grid"
        document.getElementById("options1").innerHTML = `
            <div class="option" id="option1" onclick="checkStatus(0, 1)">
                    Continue climbing as fast as you can
                </div>
                <div class="option" id="option2" onclick="checkStatus(-5, 1)">
                    Slow down, keeping your climbing speed steady
                </div>
                <div class="option" id="option3" onclick="checkStatus(100, 1)">
                    Drop a rock behind you to distract the spider
                </div>
            </div>`
    }
    //spiderlevel last scenario - switch to next
    if(gameCount === 3){
        document.getElementById("scenarioBox1").innerHTML = `
                <p id="scenario">
                    <span>With each step, the air around you grows lighter,</span>
                    <span>and the oppressive weight of the cave begins to</span>
                    <span>lift. The darkness recedes, and your eyes adjust to</span>
                    <span>the faint glow ahead.You take another careful step</span>
                    <span>forward, the tunnel now widening into a larger</span>
                    <span>space. The stone here is smoother, almost polished,</span>
                    <span>and the air feels fresher, cooler. The silence is</span>
                    <span>profound, broken only by the soft echo of your own</span>
                    <span>breathing. You pause and look around, taking in the</span>
                    <span>strange, wide chamber. Something feels different.</span>
                    <span>You take another step, and that's when you feel it—</span>
                    <span>the water. Your eyes drop to the ground, and you see</span>
                    <span>it now, creeping around your feet—thin at first,</span>
                    <span>just a small trickle, but slowly rising, inch by</span>
                    <span>inch.</span>
                </p>
                <p id="question" onclick="updateInfo(0, 4)">Continue...</p>
                `//EDIT ONCLICK
            document.getElementById("options1").style.display = "none"
    }
}

//update info
function updateInfo(points, gameCount){
    console.log("points: " + points)

    //spider scenario in-betweens:
    if(gameCount == 1){
        //first; best option
        if(points == -5){
            console.log("update info worked")
            document.getElementById("scenarioBox1").innerHTML = `
                <p id="scenario">
                    <span>Great, you made it. The spider hesitates for a</span>
                    <span>moment, then silently withdraws into the shadows</span>
                    <span>above. You don't wait for it to change its mind.</span>
                    <span>Keeping your breath steady, you turn and slip</span>
                    <span>through a narrow gap in the rock. The passage</span>
                    <span>tightens around you, rough stone scraping against</span>
                    <span>your arms as you push forward. The air shifts—</span>
                    <span>warmer, heavier laced with something stale. When you</span>
                    <span>finally emerge, the silence is suffocating.</span>
                </p>
                <p id="question" onclick="nextScenario(${gameCount, userstatus})">Continue...</p>
                `
            document.getElementById("options1").style.display = "none"
        }
        //first; okay-option
        if(points == 0){
            console.log("update info worked")
            document.getElementById("scenarioBox1").innerHTML = `
                <p id="scenario">
                    <span>Whew, you made it. The spider didn't see you—or at</span>
                    <span>least, it didn't care enough to attack. You stay</span>
                    <span>frozen for a moment longer, just to be sure, before</span>
                    <span>cautiously moving forward. You walk and slip through</span>
                    <span>a narrow gap in the rock. The passage tightens</span>
                    <span>around you, rough stone scraping against your arms</span>
                    <span>as you push forward. The air shifts—warmer, heavier</span>
                    <span>laced with something stale. When you finally emerge,</span>
                    <span>the silence is suffocating.</span>
                </p>
                <p id="question" onclick="nextScenario(${gameCount, userstatus})">Continue...</p>
                `
            document.getElementById("options1").style.display = "none"
        }
    }

    if(gameCount == 2){
        //second; best option
        if(points == -5){
            console.log("update info worked")
            document.getElementById("scenarioBox1").innerHTML = `
                <p id="scenario">
                    <span>You take a steady breath and step onto the rocky</span>
                    <span>ledge, keeping close to the wall. Every movement has</span>
                    <span>to be careful—one wrong step, and you could slip.</span>
                    <span>The stone beneath your feet is uneven, crumbling in</span>
                    <span>places, but at least it's free of webs. You move </span>
                    <span>slowly, avoiding loose rocks, ignoring the faint </span>
                    <span>clicking sound from behind you. Then, the sound</span>
                    <span>stops. For a brief, terrifying moment, silence fills</span>
                    <span>the cave. You don't dare look back. You just keep</span>
                    <span>moving.</span>
                </p>
                <p id="question" onclick="nextScenario(${gameCount, userstatus})">Continue...</p>
                `
            document.getElementById("options1").style.display = "none"
        }
        //second; okay-option
        if(points == 0){
            console.log("update info worked")
            document.getElementById("scenarioBox1").innerHTML = `
                <p id="scenario">
                    <span>You push forward, stepping into the web-lined</span>
                    <span>tunnel. The air is thick with dust, and the strands</span>
                    <span>of silk sway as if something has just passed</span>
                    <span>through. The further you go, the more the webs cling</span>
                    <span>to you. They wrap around your arms, your legs, your</span>
                    <span>shoulders—thin at first, then thicker, stickier.</span>
                    <span>You try not to panic. Then—a tug. For a split </span>
                    <span>second, you can't move. The webbing sticks to your foot,</span>
                    <span>holding you in place. Your heartbeat pounds</span>
                    <span>in your ears as you yank yourself free, stumbling</span>
                    <span>forward. Something rustles in the distance. You</span>
                    <span>don't wait to find out what it is, just run.</span>
                </p>
                <p id="question" onclick="nextScenario(${gameCount, userstatus})">Continue...</p>
                `
            document.getElementById("options1").style.display = "none"
        }
    }
    if(gameCount == 3){
        //third; best option
        if(points == -5){
            console.log("update info worked")
            //UPDATING NEEDED!!!!!!
            document.getElementById("scenarioBox1").innerHTML = `
                <p id="scenario">
                    <span>You take a steady breath and step onto the rocky</span>
                    <span>ledge, keeping close to the wall. Every movement has</span>
                    <span>to be careful—one wrong step, and you could slip.</span>
                    <span>The stone beneath your feet is uneven, crumbling in</span>
                    <span>places, but                                                                                                                                                                                                                                                                  at least it's free of webs. You move </span>
                    <span>slowly, avoiding loose rocks, ignoring the faint </span>
                    <span>clicking sound from behind you. Then, the sound</span>
                    <span>stops. For a brief, terrifying moment, silence fills</span>
                    <span>the cave. You don't dare look back. You just keep</span>
                    <span>moving.</span>
                </p>
                <p id="question" onclick="nextScenario(${gameCount, userstatus})">Continue...</p>
                `
            document.getElementById("options1").style.display = "none"
        }
        //third; okay-option
        if(points == 0){
            console.log("update info worked")
            document.getElementById("scenarioBox1").innerHTML = `
                <p id="scenario">
                    <span>You push forward, stepping into the web-lined</span>
                    <span>tunnel. The air is thick with dust, and the strands</span>
                    <span>of silk sway as if something has just passed</span>
                    <span>through. The further you go, the more the webs cling</span>
                    <span>to you. They wrap around your arms, your legs, your</span>
                    <span>shoulders—thin at first, then thicker, stickier.</span>
                    <span>You try not to panic. Then—a tug. For a split </span>
                    <span>second, you can't move. The webbing sticks to your foot,</span>
                    <span>holding you in place. Your heartbeat pounds</span>
                    <span>in your ears as you yank yourself free, stumbling</span>
                    <span>forward. Something rustles in the distance. You</span>
                    <span>don't wait to find out what it is, just run.</span>
                </p>
                <p id="question" onclick="nextScenario(${gameCount, userstatus})">Continue...</p>
                `
            document.getElementById("options1").style.display = "none"
        }
    }
    if(gameCount == 4){
        document.getElementById("drowningScreen").style.display = "block"
        document.getElementById("spiderPage").style.display = "none"
        document.body.style.backgroundImage = "url(img/waterBG.jpg)"
        document.getElementById("surface").innerHTML += `
            <video width="auto" height="700vh" id="video" autoplay>
                <source src="sprite/spriteBG.mp4" type="video/mp4">
            </video>`
        PLAYER.box = document.getElementById("player")
        gameLoop()
    }
}

//ending:
function died(){
    console.log("You died.")
    
    body.style.backgroundImage = "url(img/diedBG.jpg)"
    diedPage.style.display = "block"
    spiderPage.style.display = "none"
}
function showLeaderboard(){
    body.style.backgroundImage = "url(img/wakeupBG.jpg)"
    diedPage.style.display = "none"
    leaderboardPage.style.display = "block"
    document.getElementById("flickerScreen").style.backgroundColor = "rgba(255, 255, 255, 0.12)"

    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || []
    
    console.log("Leaderboard: ", leaderboard)

    let list = document.getElementById("scoreList")
    list.innerHTML = "" 

    leaderboard.forEach((entry) => {
        let li = document.createElement("li")
        li.textContent = `${entry.score} - ${entry.name}`
        list.appendChild(li)
    })
}

//try again:
function tryAgain(){
    diedPage.style.display = "none"
    leaderboardPage.style.display = "none" 
    firstPage.style.display = "block" 
    userstatus = 0
    levelCount = 0
    gameCount = 0
    username = " "
    body.style.backgroundImage = "url(img/startBG.jpg)"
    document.getElementById("flickerScreen").style.backgroundColor = "rgba(0, 0, 0, 0.511)"
    console.log("userstatus: " + userstatus + ", levelcount: " + levelCount + ", gamecount: " + gameCount + ", username: " + username)
}


//LocalStorage/save to leaderboard:
document.getElementById("saveLeaderboard").addEventListener("click", () => {
    saveToLeaderBoard(username, gameCount)
})


let leaderBoard
function saveToLeaderBoard(name, gamesScore){
    leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [] // Get existing leaderboard or empty array
    leaderboard.push({ name: name, score: gamesScore })
    leaderboard.sort((a, b) => b.score - a.score) // Sort by highest score
    if (leaderboard.length > 10) leaderboard = leaderboard.slice(0, 10) // Keep top 10 scores
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard)) // Save updated leaderboard
    showLeaderboard()
}

//Sprite game / drowning page:
let GAME_SCREEN = {
    surface: document.getElementById('surface'),
    surfaceScale: '80%',
    debug_output: document.getElementById('debug_output')
}

// Scale the surface to xx% of the screen width
GAME_SCREEN.surface.style.transform = `scale(${parseFloat(GAME_SCREEN.surfaceScale)/100 * (window.innerWidth / surface.clientWidth)})`;


let GAME_CONFIG = {
    gameSpeed: 15, // game loop refresh rate (pictures per second)
    characterSpeed: 1 // move offset in PX
}

function gameLoop(){
    console.log("loop")
    if (KEY_EVENTS.leftArrow) {
        movePlayer((-1) * GAME_CONFIG.characterSpeed, 0, -1);
        animatePlayer();
    }
    if (KEY_EVENTS.rightArrow) {
        movePlayer(GAME_CONFIG.characterSpeed, 0, 1);
        animatePlayer();
    }
    if (KEY_EVENTS.upArrow) {
        movePlayer(0, (-1) * GAME_CONFIG.characterSpeed, 0);
        animatePlayer();
    }
    if (KEY_EVENTS.downArrow) {
        movePlayer(0, GAME_CONFIG.characterSpeed, 0);
        animatePlayer();
    }
    setTimeout(gameLoop, 1000 / GAME_CONFIG.gameSpeed);

}


//other:
