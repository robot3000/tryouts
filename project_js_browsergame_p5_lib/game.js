//


// Ball
var ctBall
// Leinwand
var canvasWidth= 1080 / 3;
var canvasHeight = 1920 / 3;
var ballSize = canvasHeight / 15;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  noStroke();
  ctBall = new CtBall();
}

function draw() {
  background(0,136,255);
  ctBall.show();
}

function CtBall() {
  this.x = canvasWidth / 2;
  this.y = canvasHeight / 2;
  this.speed = 0;
  this.acceleration = 1;

  this.show = function () {
    this.speed += this.acceleration;
    // Veränderung Position
    this.y += this.speed;
    // Ball kommt auf den Boden auf
    if(this.y > (canvasHeight - ballSize/2) && this.speed > 0) {
      this.jump();
    }
    // Ball wird gezeichnet
    fill(252,233,3);
    ellipse(this.x, this.y, ballSize, ballSize);
  }
  //Ball prallt ab:
  this.jump = function() {
    this.speed = this.speed * -0.9;
    console.log(this.speed);
  }
}
