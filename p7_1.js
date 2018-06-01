var p7_1 = function(s) {

  var homeColor;
  var principlesColor;
  var arrowColor;

  s.setup = function() {
    homeColor = '#217DF4';
    principlesColor = '#217DF4';
    arrowColor = '#217DF4';

    //Canvas
    s.createCanvas(s.displayWidth, s.displayHeight);
    s.background('#21F4F4');
    s.noStroke();
    s.textFont('Futura');
    s.fill(homeColor);
    s.textStyle(s.BOLD);
    s.textSize(12);
  };

  s.draw = function() {

    if(s.select('#p7_1').style('display') == 'block') {
      // console.log("Sixth Principle – Part 1");

      //Background
      s.background('#21F4F4');

      //Page number
      s.fill('#FFFFFF');
      s.textFont('Futura');
      s.textStyle(s.BOLD);
      s.textSize(16);
      s.text('7 / 7', 20, s.windowHeight - 20);

      //Menu
      s.noStroke();
      s.fill(homeColor);
      s.textSize(12);
      s.text('i n i c i o', s.windowWidth/2 - 110, 30);
      s.rect(s.windowWidth/2 - 68, 35, 12, 6);
      s.fill(principlesColor);
      s.text('p r i n c i p i o s', s.windowWidth/2, 30);
      s.rect(s.windowWidth/2 + 86, 35, 12, 6);

      //Rectangle
      s.fill('#217DF4');
      s.text('P R I N C I P I O   # 7', s.windowWidth/2 - 75, s.windowHeight/2 - 170);
      s.strokeWeight(20);
      s.rect(s.windowWidth/2 - 110, s.windowHeight/2 - 160, 210, 300);

      //Principle
      s.noStroke();
      s.textFont('Futura');
      s.fill('#FFFFFF');
      s.textSize(40);
      s.text('EL FEMINISMO', s.windowWidth/2 - 160, s.windowHeight/2 - 50);
      s.textStyle(s.NORMAL);
      s.textSize(37);
      s.text('ES FIRME EN SUS', s.windowWidth/2 - 160, s.windowHeight/2);
      s.textStyle(s.BOLD);
      s.text('CONVICCIONES', s.windowWidth/2 - 160, s.windowHeight/2 + 50);

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
    if(s.mouseInsideArrow()){
      s.cursor(s.HAND);
      arrowColor = '#FFFFFF';
    } else if(s.mouseInsideHome()) {
      homeColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else if(s.mouseInsidePrinciples()) {
      principlesColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else {
      s.cursor(s.ARROW);
      homeColor = '#217df4';
      principlesColor = '#217df4';
      arrowColor = '#217df4';
    }
  };

  s.next = function() {
    s.select('#p7_2').show();
    s.select('#p7_1').hide();
  };

  s.home = function() {
    s.select('#home').show();
    s.select('#p7_1').hide();
  };

  s.first = function() {
    s.select('#p1_1').show();
    s.select('#p7_1').hide();
  };
}

var p7_1 = new p5(p7_1, 'p7_1');
