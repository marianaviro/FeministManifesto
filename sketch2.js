var secondPrinciple = function(s) {

  s.setup = function() {
    s.background(100);
    s.createCanvas(s.displayWidth, s.displayHeight);
  };

  s.draw = function() {
    s.rect(s.mouseX, s.mouseY, 20, 20);
  };

}

var two = new p5(secondPrinciple, 'two');
