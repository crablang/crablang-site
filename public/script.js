const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

const mouse = {
    x: undefined,
    y: undefined,
}

var pic = new Image()
pic.src = "/crab.svg"

const Particlearray = []

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 70 + 40
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
    }
    update() {
        this.x += this.speedX
        this.y += this.speedY
    }
    draw() {
        ctx.drawImage(pic, this.x, this.y, this.size, this.size)
    }
}
class ParticleCl {
    constructor() {
        this.x = mouse.x - 50
        this.y = mouse.y - 50
        this.size = Math.random() * 70 + 40
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
    }
    update() {
        this.x += this.speedX
        this.y += this.speedY
    }
    draw() {
        ctx.drawImage(pic, this.x, this.y, this.size, this.size)
    }
}

let crab = document.getElementById("crab");

crab.addEventListener('click', function(e) {
    mouse.x = e.x
    mouse.y = e.y
    Particlearray.push(new ParticleCl())
})

// function particleinit() {
//     for (let i = 0; i < 25; i++) {
//         Particlearray.push(new Particle())
//     }
// }
// particleinit()
// console.log(Particlearray)

function handlep() {
    for (let i = 0; i < Particlearray.length; i++) {
        Particlearray[i].update()
        Particlearray[i].draw()
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    handlep()
    requestAnimationFrame(animate)
}
animate()