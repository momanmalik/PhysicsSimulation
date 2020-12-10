
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


var MYLIBRARY = MYLIBRARY || (function(){
    var _args = {}; // private

    return {
        init : function(Args) {
            _args = Args;
            // some other initialising
        },
        helloWorld : function() {
            alert('Hello World! -' + _args);
        }
    };
}());

console.log("hello", MYLIBRARY.helloWorld(55))


const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


canvas.width = innerWidth
canvas.height = innerHeight

console.log(innerWidth)
console.log(innerHeight)

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}


const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

var mySettings = {
  numOfBalls: 100,
  velocity: 1.5,
  acceleration: 2,
  friction: 0.99
}

console.log("wtf" , mySettings)


var gravity = mySettings.acceleration;
var friction = mySettings.friction;
// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Objects
class Ball {
  constructor(x, y,dx, dy, radius, color) {
    this.x = x
    this.y = y
    this.dy = dy;
    this.dx = dx;

    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.stroke()
    c.closePath()
  }

  update() {
    if (this.y + this.radius + this.dy> canvas.height){
      this.dy = -this.dy * friction;
    } else{
      this.dy += gravity;
    }

    if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius < 0){
      this.dx = -this.dx
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw()
  }
}

// Implementation
var ball;
var ballArray = [];

function init() {
  var radius = 30;
  console.log(mySettings.num)
  for (var i=0; i < mySettings.num; i++){
    var x = randomIntFromRange(radius , canvas.width - radius)
    var y = randomIntFromRange(0, canvas.height - radius)
    var dx = mySettings.velocity;

    ballArray.push(new Ball(x,y,dx,2,radius,'red'))
  }
  console.log(ballArray)
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  ballArray.forEach(function(ball){ball.update()})
  // objects.forEach(object => {
  //  object.update()
  // })

}

init()
animate()
