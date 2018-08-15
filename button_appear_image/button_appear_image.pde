int clr;
PImage pic;

void setup() {
  size(500, 500);
  pic = loadImage("hero.png");
}

void draw() {
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

void mousePressed() {
  if (mouseX > 200 && mouseX < 400) {
    if (mouseY > 200 && mouseY < 400) {
      image(pic, 50, 50);
    }
  }
}