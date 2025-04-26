
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

//audio controls:
currentSound = audioWIWO
currentSound.volume = 0.5
currentSound.play()

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

function skip(){
    updateInfo(0, 4)
    document.getElementById("firstPage").style.display = "none"
}
