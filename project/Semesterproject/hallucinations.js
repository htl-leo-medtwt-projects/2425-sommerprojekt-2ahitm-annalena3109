let hallucinations = [
    {number: 2, real: true, img: "img/hallucinations/1.png"}, //no hallucination; danger
    {number: 1, real: false, img: "img/hallucinations/6.png"}, //hallucination; safe
    {number: 3, real: false, img: "img/hallucinations/3.png"}, //hallucination; safe
    {number: 4, real: false, img: "img/hallucinations/2.png"}, //hallucination; safe
    {number: 5, real: true, img: "img/hallucinations/5.png"}, //no hallucination; danger
    {number: 6, real: true, img: "img/hallucinations/4.png"} //no hallucination; danger
]


let container = document.getElementById('hallucinations')

function exploreCabin(){
    document.getElementById("infosG").style.display = "none"
    hallucinations.forEach((item, index) => {
        let delay = Math.random() * 3000 + 1000

        setTimeout(() => {
            let img = document.createElement("img")
            img.id = `halluc${item.number}`
            img.src = item.img
            img.alt = `hallucination ${item.number}`
            img.style.margin = "5px"
            container.appendChild(img)
            img.onclick = () => checkIfSafe(item.real, img)
        }, index * delay)
    })
}

function checkIfSafe(isSafe, img){
    if(isSafe){
        died()
    }
    else{
        img.style.display = "none"
        img.real = false
        checkIfAnyDangersLeft()
    }
}


//mit Hilfe von ChatGPT
function checkIfAnyDangersLeft(){
    let visibleImgs = [...container.getElementsByTagName("img")].filter(img => {
        return img.style.display !== "none"
    })

    let anySafeLeft = visibleImgs.some(imgEl => {
        let num = parseInt(imgEl.id.replace("halluc", ""))
        let data = hallucinations.find(h => h.number === num)
        return data && !data.real 
    })
    if (!anySafeLeft) {
        won()
    } 
}
