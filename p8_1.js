var p8_1 = function(s) {

  var homeColor;
  var principlesColor;
  var arrowColor;
  var img;

  s.setup = function() {
    arrowColor = '#04E973';
    homeColor = '#04E973';
    principlesColor = '#04E973';
    img = s.loadImage('http://localhost:8080/Sensibilidad.png');

    //Canvas
    s.createCanvas(s.displayWidth, s.displayHeight);
    s.background('#DAFF7D');
    s.noStroke();
    s.fill('#FFFFFF');
    s.textFont('Futura');
    s.textStyle(s.BOLD);
    s.textSize(16);
  };

  s.draw = function() {

    if(s.select('#p8_1').style('display') == 'block') {
      // console.log("Fourth Principle – Part 2");

      //Background
      s.background('#DAFF7D');

      //Menu
      s.textAlign(s.LEFT);
      s.fill(homeColor);
      s.textSize(12);
      s.text('i n i c i o', s.windowWidth/2 - 110, 30);
      s.rect(s.windowWidth/2 - 68, 35, 12, 6);
      s.fill(principlesColor);
      s.text('p r i n c i p i o s', s.windowWidth/2, 30);
      s.rect(s.windowWidth/2 + 86, 35, 12, 6);

      //Rectangle
      s.fill('#FFFFFF');
      s.rect(0, s.windowHeight/2 - 20, s.windowWidth, 120);

      //Title
      s.textAlign(s.CENTER);
      s.textSize(40);
      s.fill('#04E973');
      s.textStyle(s.NORMAL);
      s.text('Y LA SIGUIENTE ES NUESTRA MAYOR', s.windowWidth/2, s.windowHeight/2 - 100);

      s.blendMode(s.MULTIPLY);
      s.textStyle(s.BOLD);
      s.textSize(110);
      s.fill('#ffff85');
      s.text('CONVICCIÓN', s.windowWidth/2, s.windowHeight/2 + 30);
      s.fill('#21f4f4');
      s.text('CONVICCIÓN', s.windowWidth/2 + 10, s.windowHeight/2 + 40);
      s.blendMode(s.NORMAL);

      //Arrow
      var mx = s.windowWidth/2 - 10;
      var my = s.windowHeight - 60;
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
    }
  };

  s.mouseInsideArrow = function() {
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

  s.mouseClicked  = function() {
    if(s.mouseInsideArrow()){
      s.next();
    } else if(s.mouseInsideHome()) {
      s.home();
    } else if(s.mouseInsidePrinciples()) {
      s.first();
    }
  };

  s.mouseMoved = function() {
    if(s.mouseInsideHome()) {
      homeColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else if(s.mouseInsidePrinciples()) {
      principlesColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else if(s.mouseInsideArrow()) {
      arrowColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else {
      s.cursor(s.ARROW);
      arrowColor = '#04E973';
      homeColor = '#04E973';
      principlesColor = '#04E973';
    }
  };

  s.next = function() {
    s.select('#p8_2').show();
    s.select('#p8_1').hide();
  };

  s.home = function() {
    s.select('#home').show();
    s.select('#p8_1').hide();
  };

  s.first = function() {
    s.select('#p1_1').show();
    s.select('#p8_1').hide();
  };

}

var p8_1 = new p5(p8_1, 'p8_1');
