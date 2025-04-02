//variables
let username
let body = document.body
let firstPage = document.getElementById("firstPage")
let inputPage = document.getElementById("inputPage")
let spiderPage = document.getElementById("spiderPage")
let diedPage = document.getElementById("diedScreen")

let scenarioSpider = document.getElementById("scenario")
let userstatus = 0
let levelCount = 1
let gameCount = 0

let audioWIWO = document.getElementById("wiwo")

audioWIWO.play()



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
                <span>The tunnel ends abruptly, opening into a narrow shaft</span>
                <span>leading upward. Above, you see a faint glimmer—the exit.</span>
                <span>It's close. You're almost there. But as you approach, </span>
                <span>you notice the walls—slick, sharp-edged, and covered </span>
                <span>in cracks. The only way to reach the exit is by climbing. </span>
                <span>You begin your ascent, trying to ignore the unnerving </span>
                <span>silence around you. The rocks are jagged, crumbling under </span>
                <span>your hands. The air feels heavier the higher you climb. </span>
                <span>Then—you hear it. A soft skittering behind you. Very close. </span>
                <span>You know it. You feel it. The spider is just below you, waiting.</span>
                <span> Its legs move so quietly, you barely hear it, but you can feel </span>
                <span>its presence as it moves up the wall behind you. It's not </span>
                <span>attacking—yet. But you know it's there. Every time you make a move,</span>
                <span> it seems to follow, creeping closer. The exit is within reach, </span>
                <span>but so is the spider.</span>
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
}

//update info
function updateInfo(points, gameCount){
    console.log("points: " + points)
    if(gameCount == 1){
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

    //EDITEDITEDITE EZIUhewuwe EDIT 
    if(gameCount == 2){
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
}

//ending:
function died(){
    console.log("You died.")
    
    body.style.backgroundImage = "url(img/diedBG.jpg)"
    diedPage.style.display = "block"
    spiderPage.style.display = "none"
}

//try again:
function tryAgain(){
    diedPage.style.display = "none"
    firstPage.style.display = "block"  
    userstatus = 0
    levelCount = 0
    gameCount = 0
    username = " "
    body.style.backgroundImage = "url(img/startBG.jpg)"
    console.log("userstatus: " + userstatus + ", levelcount: " + levelCount + ", gamecount: " + gameCount + ", username: " + username)
}

//other:
