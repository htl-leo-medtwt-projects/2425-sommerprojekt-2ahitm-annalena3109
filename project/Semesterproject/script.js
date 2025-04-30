
//variables
let username
let body = document.body
let firstPage = document.getElementById("firstPage")
let inputPage = document.getElementById("inputPage")
let spiderPage = document.getElementById("spiderPage")
let diedPage = document.getElementById("diedScreen")
let leaderboardPage = document.getElementById("leaderboardScreen")

let scenarioSpider = document.getElementById("scenario")
let slider = document.getElementById("myRange")
let muteToggle = document.getElementById("muteToggle")
let userstatus = 0
let levelCount = 1
let gameCount = 0
let clickedRead = false;

let currentSound;
let audioWIWO = document.getElementById("wiwo")
let audioBats = document.getElementById("batsSound")

//audio controls:
currentSound = audioWIWO
currentSound.volume = 0.5
currentSound.play()

let lastVolume = currentSound.volume

let volumeAll = 1

slider.addEventListener("input", function () {
    if (!muteToggle.checked) {
        let sliderValue = this.value
        console.log("Slider value:", sliderValue)
        currentSound.volume = sliderValue / 100
        lastVolume = currentSound.volume
        volumeAll = sliderValue/100
    } else {
        console.log("Muted — slider inactive")
    }
})

muteToggle.addEventListener("change", function () {
    if (this.checked) {
        currentSound.volume = 0
        volumeAll = 0
    } else {
        currentSound.volume = lastVolume
        volumeAll = lastVolume
    }
})





function showVideo(){
    document.getElementById("infosD").style.display = "none"
    document.getElementById("video").play()
    clickedRead = true;
}

function talkToMan(){
    console.log("talk to man worked")
    document.getElementById("infosM").style.display = "none"
    document.getElementById("chat").style.display = "flex"
}

function continueThen(){
    document.body.style.backgroundImage = "url(img/wayBG.jpg)"
    document.getElementById("chat").style.display = "none"
    document.getElementById("continue").style.display = "none"
    document.getElementById("way").style.display = "block"
    document.getElementById("drowningScreen").style.display = "block"

    document.getElementById("greenVideo").currentTime = 1
    document.getElementById("greenVideo").play()
    audioBats.volume = volumeAll
    audioBats.play()

    document.getElementById("greenVideo").addEventListener("ended", () =>{
        document.getElementById("greenVideo").style.display = "none"
        batsFlew()
    })
}

function batsFlew(){
    document.getElementById("afterBats").style.display = "block"
    document.getElementById("way").style.display = "none"
    document.getElementById("infosB").style.display = "block"
    document.body.style.backgroundImage = "url(img/wayBGpaper.jpg)" 
}



function skip(){
    updateInfo(0, 4)
    document.getElementById("firstPage").style.display = "none"
}
