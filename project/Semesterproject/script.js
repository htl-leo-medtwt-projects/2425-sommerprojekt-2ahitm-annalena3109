//variables
let username
let body = document.body
let firstPage = document.getElementById("firstPage")
let inputPage = document.getElementById("inputPage")
let spiderPage = document.getElementById("spiderPage")
let diedPage = document.getElementById("diedScreen")
let userstatus = 0
let levelCount = 0
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
        nextScenario()
    }
    if(level > levelCount){
        levelCount++
    }
    console.log("userstatus: " + userstatus + ", levelcount: " + levelCount + ", gamecount: " + gameCount + ", username: " + username)
}


//next scenario
function nextScenario(){
    console.log(userstatus)
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
