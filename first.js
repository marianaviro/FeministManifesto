var firstPrinciple = function(s) {

  var color;
  var pluralColor;
  var showArrow;
  var count;

  s.setup = function() {
    s.background(100);
    s.createCanvas(s.displayWidth, s.displayHeight);
    pluralColor = '#E61DFF';
    color = 0;
    count = 0;
    s.cursor(s.ARROW);
  };

  s.draw = function() {

    //Background
    s.background('#731DD3');

    //Rectangle
    s.fill('#731DD3');
    s.stroke('#FF83FF');
    s.strokeWeight(20);
    s.rect(s.windowWidth/2 - 110, s.windowHeight/2 - 160, 210, 300);

    //Principle
    s.noStroke();
    s.textFont('Futura');
    s.fill(255);
    s.textStyle(s.NORMAL);
    s.textSize(35);
    s.text('EL', s.windowWidth/2 -20, s.windowHeight/2 - 100);
    s.textStyle(s.BOLD);
    s.textSize(58);
    s.text('FEMINISMO', s.windowWidth/2 - 180, s.windowHeight/2 -35);
    s.textStyle(s.NORMAL);
    s.textSize(48.5);
    s.text('ES UN ESPACIO', s.windowWidth/2 - 180, s.windowHeight/2 + 20);
    s.fill(pluralColor);
    s.textStyle(s.BOLD);
    s.textSize(92);
    if(s.mouseInsidePlural()) {
      s.cursor(s.HAND);
      s.fill(255);
    } else {
      s.fill(pluralColor);
      s.cursor(s.ARROW);
    }
    s.text('PLURAL', s.windowWidth/2 - 183, s.windowHeight/2 + 110);

    //Arrow
    if(showArrow) {
      var mx = s.windowWidth/2 - 10;
      var my = s.windowHeight - 60;
      if(s.mouseInsideArrow()) {
        s.cursor(s.HAND);
        s.fill(255);
      } else {
        s.fill('#E61DFF');
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

      //Text
      s.fill(255);
      s.textSize(11.5);
      s.textStyle(s.NORMAL);
      s.text('¿ T E   G U S T A R Í A   C O N O C E R   O T R A   I N I C I A T I V A ?', s.windowWidth/2 - 180, s.windowHeight/8 - 20);
      s.textSize(21.5);
      s.textStyle(s.BOLD);
      s.text('H A Z   C L I C K   D E   N U E V O', s.windowWidth/2 - 180, s.windowHeight/8 + 10);
    }

    //Color
    count++;
    s.setColor();
  };

  s.mouseClicked  = function() {
    if(s.mouseInsideArrow()) {
      s.down();
    } else if(s.mouseInsidePlural()){
      showArrow = true;
      s.go();
    } else {
      return false;
    }
  };

  s.mouseInsideArrow = function() {
    if(showArrow) {
      var mx = s.windowWidth/2 - 10;;
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

  s.mouseInsidePlural = function() {
    var pluralX1 = s.windowWidth/2 - 183;
    var pluralX2 = s.windowWidth/2 + 200;
    var pluralY1 = s.windowHeight/2 + 35;
    var pluralY2 = s.windowHeight/2 + 115;
    if(s.mouseX > pluralX1 && s.mouseX < pluralX2 && s.mouseY > pluralY1 && s.mouseY < pluralY2) {
      return true;
    }
    return false;
  };

  s.go = function() {
    var project = projects[Math.floor(Math.random() * projects.length)];
    window.open(project.url);
  };

  s.setColor = function() {
    if(count == 60) {
      if(color % 3 == 0) {
        pluralColor = '#217DF4';
        color++;
        count = 0;
      } else if(color % 3 == 1) {
        pluralColor = '#21F4F4';
        color++;
        count = 0;
      } else {
        pluralColor = '#E61DFF';
        color++;
        count = 0;
      }
    }
  };

  s.down = function() {
    s.select('#second').show();
    s.select('#first').hide();
  };

}

var one = new p5(firstPrinciple, 'first');
