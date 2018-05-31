var secondPrinciple = function(s) {

  var letter;
  var abc;
  var x;
  var showArrow;

  s.setup = function() {
    s.background(100);
    s.createCanvas(s.displayWidth, s.displayHeight);
    letter = '';
    abc = 'ABDEFGHJKLMOPQRSTUVXYZ1234567890?*+=@#%&';
    x = 0;
  };

  s.draw = function() {

    //Background
    s.background('#217DF4');
    // s.background('#21F4F4');

    //Rectangle
    s.fill('#217DF4');
    // s.fill('#21F4F4');
    s.stroke('#21F4F4');
    // s.stroke(255);
    s.strokeWeight(20);
    s.rect(s.windowWidth/2 - 110, s.windowHeight/2 - 160, 210, 300);

    //Principle
    s.noStroke();
    s.textAlign(s.LEFT);
    s.textFont('Futura');
    s.fill(255);
    // s.fill('#217DF4');
    s.textStyle(s.NORMAL);
    s.textSize(35);
    s.text('EN EL', s.windowWidth/2 - 50, s.windowHeight/2 - 105);
    s.textStyle(s.BOLD);
    s.textSize(50);
    s.text('FEMINISMO', s.windowWidth/2 - 160, s.windowHeight/2 - 50);
    s.textStyle(s.NORMAL);
    s.textSize(65);
    s.text('CABEMOS', s.windowWidth/2 - 170, s.windowHeight/2 + 25);
    s.textStyle(s.BOLD);
    s.textSize(85);
    s.text('TOD', s.windowWidth/2 - 165, s.windowHeight/2 + 115);

    //Letter
    if(letter != '') {
      s.fill('#FF83FF');
      // s.fill(255);
      s.textAlign(s.CENTER);
      s.text(letter, s.windowWidth/2 + 65, s.windowHeight/2 + 115);
    } else {
      s.textAlign(s.LEFT);
      s.frameRate(2);
      s.rect(s.windowWidth/2 + 32, s.windowHeight/2 + 50, 60, 65);
      if(x == 0) {
        s.fill(200);
        x = 1;
      } else {
        s.fill(255);
        x = 0;
      }
      s.rect(s.windowWidth/2 + 45, s.windowHeight/2 + 58, 3, 50);
    }
    s.fill(255);
    s.textAlign(s.LEFT);
    s.text('S', s.windowWidth/2 + 100, s.windowHeight/2 + 115);

    //Arrow
    if(showArrow) {
      var mx = s.windowWidth/2 - 10;
      var my = s.windowHeight - 60;

      if(s.mouseInsideArrow()) {
        s.cursor(s.HAND);
        s.fill('#FFFFFF');
      } else {
        s.cursor(s.ARROW);
        s.fill('#21F4F4');
      }
      s.noStroke();
      s.beginShape();
      s.vertex(mx, my);
      s.vertex(mx + 20, my);
      s.vertex(mx + 20, my + 20);
      s.vertex(mx + 30, my + 20);
      s.vertex(mx + 10, my + 40);
      s.vertex(mx - 10, my + 20);
      s.vertex(mx, my + 20);
      s.vertex(mx, my);
      s.endShape(s.CLOSE);
    }
  };

  s.keyTyped = function() {
    s.frameRate(60);
    letter = abc.charAt(Math.floor(Math.random() * abc.length));
    if(!showArrow) {
      showArrow = true;
    }
  };

  s.mouseClicked  = function() {
    if(s.mouseInsideArrow()) {
      s.down();
    }
  };

  s.mouseInsideArrow = function() {
    if(showArrow) {
      var mx = s.windowWidth/2 - 10;
      var my = s.windowHeight - 60;

      //Check if the mouse is inside the arrow's rectangle
      var dx = s.mouseX - mx;
      var dy = s.mouseY - my;
      if(0 < dx && dx < 20 && 0 < dy && dy < 20) {
        return true;
      } else {
        //Check if the mouse is inside the arrow's left triangle
        var lx = Math.abs(s.mouseX - mx + 10);
        var ly = Math.abs(s.mouseY - my - 20);
        if(lx < 20 && ly < 20 && lx > ly) {
          return true;
        } else {
          //Check if the mouse is inside the arrow's right triangle
          var rx = 20 - Math.abs(s.mouseX - mx - 10);
          var ry = Math.abs(s.mouseY - my - 20);
          if(rx < 20 && ry < 20 && rx > ry) {
            return true;
          }
          return false;
        }
      }
    }
  };

  s.down = function() {
    s.select('#third').show();
    s.select('#second').hide();
  };

}

var two = new p5(secondPrinciple, 'second');
