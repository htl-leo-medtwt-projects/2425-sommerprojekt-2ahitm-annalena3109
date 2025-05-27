//ending:fc
function died(){
    console.log("You died.")

    diedLeaderboard = true
    
    body.style.backgroundImage = "url(img/diedBG.jpg)"
    diedPage.style.display = "block"
    spiderPage.style.display = "none"

    document.getElementById("drowningScreen").style.display = "none"
    document.getElementById("heightsScreen").style.display = "none"
    document.getElementById("hallucinations").style.display = "none"
}

//show leaderboard:
function showLeaderboard(){

    if(!diedLeaderboard){
        body.style.backgroundImage = "url(img/wakeupBG.jpg)"
    }

    diedPage.style.display = "none"
    document.getElementById("diedScreen").style.display = "none"
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
    diedLeaderboard = false
    madeIt = false
    madeIt2 = false
    clickedRead = false
    noteId = null
    diedPage.style.display = "none"
    leaderboardPage.style.display = "none" 
    firstPage.style.display = "block" 
    userstatus = 0
    levelCount = 0
    gameCount = 0
    timer = 55
    timer2 = 50
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