let firstPage = document.getElementById("firstPage")
let inputPage = document.getElementById("inputPage")

document.getElementById("infos").style.display = "none"
let body = document.body

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

function goToInputPage(){
    firstPage.style.display = "none"
    body.style.backgroundImage = "url(img/inputBG.jpg)"
    inputPage.style.display = "block"
}