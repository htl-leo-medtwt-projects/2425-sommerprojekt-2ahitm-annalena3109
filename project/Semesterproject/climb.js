//mit hilfe von Katharina (und für Verständnis ChatGPT)

function climb() {
    document.getElementById("infosC").style.display = "none"
    document.getElementById("tut2").style.display = "block"
    document.getElementById("afterBalancing").style.display = "none"
    document.getElementById("heightsScreen").style.display = "none"
    document.getElementById("timer3").style.display = "block"
}

function startClimbing() {
  document.getElementById("tut2").style.display = "none"
  canvas.style.display = "block"
  startTimer3()
  draw2()
}

let canvas = document.getElementById("gameCanvas")
let ctx2 = canvas.getContext("2d")
let dragging = false
let startPoint = null
let currentPos = { x: 0, y: 0 }

let colorIndex = 0
const connectedColors = ["#41629b", "#4a045b", "#993909", "#045b12", "#c6a220", "#04445b"]

let pointsLeft = [
  { x: 480, y: 140, color: "#c6a220", originalColor: "#c6a220", connections: [] },
  { x: 470, y: 250, color: "#993909", originalColor: "#993909", connections: [] },
  { x: 470, y: 350, color: "#41629b", originalColor: "#41629b", connections: [] },
  { x: 455, y: 450, color: "#a41d21", originalColor: "#a41d21", connections: [] },
]

let pointsRight = [
  { x: 720, y: 90, color: "#04445b", originalColor: "#04445b", connections: [] },
  { x: 690, y: 200, color: "#045b12", originalColor: "#045b12", connections: [] },
  { x: 750, y: 300, color: "#4a045b", originalColor: "#4a045b", connections: [] },
  { x: 700, y: 400, color: "#a41d21", originalColor: "#a41d21", connections: [] },
]

canvas.addEventListener("mousedown", (e) => {
  let { offsetX, offsetY } = e
  const allPoints = [...pointsLeft, ...pointsRight]
  for (const p of allPoints) {
    if (Math.hypot(p.x - offsetX, p.y - offsetY) < 15) {
      dragging = true
      startPoint = p
      currentPos = { x: offsetX, y: offsetY }
      return
    }
  }
})

canvas.addEventListener("mousemove", (e) => {
  if (dragging) {
    currentPos = { x: e.offsetX, y: e.offsetY }
    draw2()
  }
})

canvas.addEventListener("mouseup", (e) => {
  let colorChanged = false

  if (dragging && startPoint) {
    const isLeft = pointsLeft.includes(startPoint)
    const targetGroup = isLeft ? pointsRight : pointsLeft

    for (const p of targetGroup) {
      if (Math.hypot(p.x - e.offsetX, p.y - e.offsetY) < 15) {
        if (p.color === startPoint.color && !startPoint.connections.includes(p)) {
          // Store line color for consistent line drawing
          startPoint.lineColor = startPoint.color
          console.log(p.color)

          startPoint.connections.push(p)
          p.connections.push(startPoint)

          // Change the color of the one being connected TO
          if (p.connections.length === 1) {
            if (colorIndex < connectedColors.length) {
              p.color = connectedColors[colorIndex++]
              console.log(p.color)
              if (colorChanged) {
                setTimeout(() => {
                  if (!checkForConnectablePairs()) died()
                }, 1000)
              }
            } 
            else {
                p.color = "#cccccc"
                afterClimb()
            }
            colorChanged = true
          }

          break
        }
      }
    }
  }

  dragging = false
  startPoint = null
  draw2()
})

function drawPoint(p) {
  ctx2.beginPath()
  ctx2.arc(p.x, p.y, 15, 0, Math.PI * 2)
  ctx2.fillStyle = p.color
  ctx2.fill()
  ctx2.strokeStyle = "white"
  ctx2.stroke()
}

function drawLine(p1, p2) {
  ctx2.beginPath()
  ctx2.moveTo(p1.x, p1.y)
  ctx2.lineTo(p2.x, p2.y)
  ctx2.strokeStyle = p1.lineColor || p1.color // line uses original connection color
  ctx2.lineWidth = 4
  ctx2.stroke()
}

function draw2() {
  ctx2.clearRect(0, 0, canvas.width, canvas.height)

  for (const p of pointsLeft) drawPoint(p)
  for (const p of pointsRight) drawPoint(p)

  for (const p of [...pointsLeft, ...pointsRight]) {
    for (const conn of p.connections) {
      if (p.x < conn.x) drawLine(p, conn)
    }
  }

  if (dragging && startPoint) {
    drawLine(startPoint, currentPos)
  }
}

function checkForConnectablePairs() {
  for (const left of pointsLeft) {
    // Skip if already fully connected (to all matching right points)
    if (left.connections.length > 0) continue

    for (const right of pointsRight) {
      if (right.connections.length > 0) continue

      if (left.color === right.color) {
        return true // Found a valid pair
      }
    }
  }

  return false // No more valid pairs
}
