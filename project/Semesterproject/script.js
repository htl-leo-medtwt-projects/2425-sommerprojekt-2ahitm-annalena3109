
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


let madeIt = false
let madeIt2 = false
let timer = 55
let timer2 = 50

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
    startTimer()
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

function showOptions(){
    document.getElementById("infosB").style.display = "none"
    document.getElementById("chooseDisplay").style.display = "block"
}

let noteId = null

function choosePic(image){
    let images = document.querySelectorAll('#chooseDisplay img')
    images.forEach(img => {
        img.src = 'img/notes/paper.png'
    })
    image.src = 'img/notes/paperChosen.png'
    noteId = image.getAttribute('alt') 
}

function showChosenNote(){
    if (noteId === null) {
        alert('Please choose a note first!')
        return
    }
    
    document.getElementById("chooseDisplay").style.display = "none"
    document.getElementById("note").style.display = "block"

    if (noteId === '1') {
        document.getElementById("note").innerHTML = '<img src="img/notes/1.jpg" alt="1">'
    } else if (noteId === '2') {
        document.getElementById("note").innerHTML = '<img src="img/notes/2.jpg" alt="2">'
    } else if (noteId === '3') {
        document.getElementById("note").innerHTML = '<img src="img/notes/3.jpg" alt="3">'
    }
    gameCount = 5
    document.getElementById("note").innerHTML += `<br><div onclick="checkStatus(0, 3)">Read and continue</div>`
}



function startTimer() {
    countdown = setInterval(() => {
      if (timer > 0) {
        timer--
        document.getElementById("timer").textContent = timer
      } else if (!madeIt) {
        died()
        clearInterval(countdown)
      }
    }, 1000)
}


function startTimer2() {
    countdown2 = setInterval(() => {
      if (timer2 > 0) {
        timer2--
        document.getElementById("timer2").textContent = timer2
      } else if (!madeIt2) {
        died()
        clearInterval(countdown2)
      }
    }, 1000)
}

function afterBalance(){
    madeIt2 = true
    document.getElementById("game").style.display = "none"
}


function skip(){
    updateInfo(0, 6)
    document.getElementById("firstPage").style.display = "none"
}
