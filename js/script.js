let clr = 0;
let pic;

function setup() {
  createCanvas(500, 500);
}

function preload() {
  // preload() runs once
  pic = loadImage("hero.png");
}

function draw() {
  clr = 0;

  if (mouseX > 200 && mouseX < 400) {
    if (mouseY > 200 && mouseY < 400) {
      clr = 255;
    }
  }

  fill(clr);
  rect(200, 200, 200, 200);
  fill(150);
  textSize(20);
  text("Я твоя кнопка", 230, 250);
}

function mousePressed() {
  if (mouseX > 200 && mouseX < 400) {
    if (mouseY > 200 && mouseY < 400) {
      image(pic, 50, 50);
    }
  }
}
