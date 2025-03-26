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
    if(gameCount == 1){
        scenarioSpider.innerHTML = ` `
    }
}

//update info
function updateInfo(points, gameCount){
    console.log("points: " + points)
    if(gameCount == 1){
        if(points == -5){
            scenarioSpider.innerHTML = `
                <span>Great, you made it. The spider hesitates for a moment,</span>
                <span>then silently withdraws into the shadows above. You don't</span>
                <span>wait for it to change its mind. Keeping your breath steady</span>
                <span>you turn and slip through a narrow gap in the rock. The</span>
                <span>passage tightens around you, rough stone scraping against</span>
                <span>your arms as you push forward. The air shifts—warmer, heavier</span>
                <span>laced with something stale. When you finally emerge, the silence</span>
                <span>is suffocating.</span>`
            document.getElementById("question").innerHTML = `<p onclick(${nextScenario(gameCount, userstatus)})>Continue...</p>`
            document.getElementById("options1").innerHTML = " "
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
