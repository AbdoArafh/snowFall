flakes = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  noCursor();
  for (var i = 0; i < width / 4; i++) {
    // I can make the relative to the radius later
    // and I did it
    let flake = new Flake(random(5, 10), random(2, 4));
    flakes.push(flake);
  }
  fullscreen(true);
 }

function draw() {
  full();
  // background('#222');
  background(0);
  for (var i = 0; i < flakes.length; i++) {
    flakes[i].update();
    flakes[i].show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

Flake = function(r, speed) {
  this.r = r;
  this.speed = speed;
  this.x = random(width);
  this.y = random(-height, 0);


  this.update = function() {
    var factor;
    if (mouseX > (width/2)+100) {
      factor = 1;
    } else if (mouseX < (width/2)-100) {
      factor = -1;
    } else {
      factor = 0;
    }
    this.y += this.r; // this.speed;
    this.x += this.r  * factor;
    if (this.y > height) {
      this.y = 0;
    }
    if (this.x > width) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = width;
    }
  }

  this.show = function() {
    noStroke();
    fill(255, 200);
    ellipse(this.x, this.y, r);
  }

}

full = function() {
  if (mouseIsPressed) fullscreen(fullscreen())
}
