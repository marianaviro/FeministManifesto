var firstPrinciple = function(s) {

  var x;
  var y;
  var easing;
  var arrowColor;
  var homeColor;
  var principlesColor;
  var backgroundColor;
  var count;


  s.setup = function() {
    x = 0;
    y = 0;
    easing = 0.05;
    arrowColor = '#04E973';
    arrowColor2 = '#04E973';
    homeColor = '#04E973';
    principlesColor = '#04E973';
    backgroundColor = '#04E973';
    count = 0;
    backwards = 0;

    //Canvas
    s.createCanvas(s.displayWidth, s.displayHeight);
  };

  s.draw = function() {

    //Background
    var from = s.color('#DAFF7D');
    var to = s.color(backgroundColor);
    var m = s.map(count, 0, 100, 0, 0.2);
    if(count == 100) {
      backwards = 1;
    } else if(count == 0){
      backwards = 0;
    }
    if(backwards == 1){
      count --;
    } else {
      count ++;
    }
    arrowColor2 = s.lerpColor(from, to, m);
    s.background(arrowColor2);

    //Menu
    s.textFont('Futura');
    s.fill(homeColor);
    s.textStyle(s.BOLD);
    s.textSize(12);
    s.text('i n i c i o', s.windowWidth/2 - 110, 30);
    s.rect(s.windowWidth/2 - 68, 35, 12, 6);
    s.fill(principlesColor);
    s.text('p r i n c i p i o s', s.windowWidth/2, 30);
    s.rect(s.windowWidth/2 + 86, 35, 12, 6);

    //Rectangle
    s.fill('#04E973');
    s.text('P R I N C I P I O   # 3', s.windowWidth/2 - 75, s.windowHeight/2 - 170);
    s.strokeWeight(20);
    s.rect(s.windowWidth/2 - 110, s.windowHeight/2 - 160, 210, 300);

    //Principle
    s.noStroke();
    s.fill(255);
    s.textStyle(s.NORMAL);
    s.textSize(35);
    s.text('EL', s.windowWidth/2 -20, s.windowHeight/2 - 100);
    s.textStyle(s.BOLD);
    s.textSize(58);
    s.text('FEMINISMO', s.windowWidth/2 - 180, s.windowHeight/2 -35);
    s.textStyle(s.NORMAL);
    s.textSize(30);
    s.text('LE DA LA BIENVENIDA AL', s.windowWidth/2 - 180, s.windowHeight/2 + 12);
    s.textStyle(s.BOLD);
    s.textSize(48.5);
    s.text('ESCEPTICISMO', s.windowWidth/2 - 180, s.windowHeight/2 + 75);

    //Arrow
    var targetX = s.constrain(s.mouseX, 0, s.windowWidth);
    var dx = targetX - x;
    x += dx * easing;
    var targetY = s.constrain(s.mouseY, 0, s.windowHeight);
    var dy = targetY - y;
    y += dy * easing;
    s.arrow(s.windowWidth - x, s.windowHeight - y);
  };

  s.arrow = function(mx, my) {
    s.fill(arrowColor);
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
  };

  s.mouseInsideArrow = function() {
    var mx = s.windowWidth - x;
    var my = s.windowHeight - y;

    //Check if the mouse is inside the arrow's rectangle
    var dx = s.mouseX - mx;
    var dy = s.mouseY - my;
    if(0 < dx && dx < 20 && 0 < dy && dy < 20) {
      return true;
    } else {
      //Check if the mouse is inside the arrow's left triangle
      var lx = Math.abs(s.mouseX - mx + 10);
      var ly = Math.abs(s.mouseY - my - 20);
      if(lx < 0 && ly < 20 && lx > ly) {
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
  };

  s.mouseInsideHome = function() {
    var hx1 = s.windowWidth/2 - 110;
    var hx2 = s.windowWidth/2 - 50;
    var hy1 = 10;
    var hy2 = 50;
    if( s.mouseX > hx1 && s.mouseX < hx2 && s.mouseY > hy1 && s.mouseY < hy2 ) {
      return true;
    } else {
      return false;
    }
  };

  s.mouseInsidePrinciples = function() {
    var hx1 = s.windowWidth/2;
    var hx2 = s.windowWidth/2 + 100;
    var hy1 = 10;
    var hy2 = 50;
    if( s.mouseX > hx1 && s.mouseX < hx2 && s.mouseY > hy1 && s.mouseY < hy2 ) {
      return true;
    } else {
      return false;
    }
  };

  s.arrowInsideRect = function() {
    var mx = s.windowWidth - x;
    var my = s.windowHeight - y;

    var rx1 = s.windowWidth/2 - 110;
    var rx2 = s.windowWidth/2 + 100;
    var ry1 = s.windowHeight/2 - 160;
    var ry2 = s.windowHeight/2 + 140;
    if( mx > rx1 && mx < rx2 && my > ry1 && my < ry2 ) {
      return true;
    } else {
      return false;
    }
  };

  s.mouseClicked = function() {
    if(s.mouseInsideArrow()) {
      s.down();
    } else if(s.mouseInsideHome()) {
      s.home();
    } else if(s.mouseInsidePrinciples()) {
      s.first();
    }
  };

  s.mouseMoved = function() {
    if(s.mouseInsideArrow()){
      arrowColor = '#FFFFFF';
      backgroundColor = '#DAFF7D';
      s.cursor(s.HAND);
    } else if(s.mouseInsideHome()) {
      homeColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else if(s.mouseInsidePrinciples()) {
      principlesColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else {
      backgroundColor = '#04E973';
      homeColor = '#04E973';
      principlesColor = '#04E973';
      s.cursor(s.ARROW);
      if(s.arrowInsideRect()) {
        arrowColor = arrowColor2;
      } else {
        arrowColor = '#04E973';
      }
    }
  };

  s.down = function() {
    s.select('#second').show();
    s.select('#first').hide();
  };

  s.home = function() {
    s.select('#zero').show();
    s.select('#first').hide();
  };

  s.first = function() {
    s.select('#third').show();
    s.select('#first').hide();
  };

}

var one = new p5(firstPrinciple, 'first');
