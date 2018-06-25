var p1_3 = function(s) {

  var homeColor;
  var principlesColor;
  var arrowColor;
  var img;

  s.setup = function() {
    homeColor = '#e61dff';
    principlesColor = '#e61dff';
    arrowColor = '#e61dff';
    img = s.loadImage('assets/Plural.png');

    //Canvas
    s.createCanvas(s.displayWidth, s.displayHeight);
    s.background('#731DD3');
    s.noStroke();
    s.fill('#FFFFFF');
    s.textFont('Futura');
    s.textStyle(s.BOLD);
    s.textSize(16);
  };

  s.draw = function() {

    if(s.select('#p1_3').style('display') == 'block') {
      // console.log("First Principle – Part 3");

      //Background
      s.background('#731DD3');

      //Page number
      s.noStroke();
      s.fill('#FFFFFF');
      s.textFont('Futura');
      s.textStyle(s.BOLD);
      s.textSize(16);
      s.text('1 / 7', 20, s.windowHeight - 20);

      //Menu
      s.textAlign(s.LEFT);
      s.fill(homeColor);
      s.textSize(12);
      s.text('i n i c i o', s.windowWidth/2 - 110, 30);
      s.rect(s.windowWidth/2 - 68, 35, 12, 6);
      s.fill(principlesColor);
      s.text('p r i n c i p i o s', s.windowWidth/2, 30);
      s.rect(s.windowWidth/2 + 86, 35, 12, 6);

      //Title
      s.textSize(55);
      s.fill('#FFFFFF');
      s.text('EL FEMINISMO', s.windowWidth/10, s.windowHeight/4);
      s.textSize(45);
      s.textStyle(s.NORMAL);
      s.text('ES UN ESPACIO', s.windowWidth/10, s.windowHeight/4 + 60);
      s.fill('#e61dff');
      s.textSize(80);
      s.textStyle(s.BOLD);
      s.text('PLURAL',  s.windowWidth/10, s.windowHeight/4 + 150);

      //Image
      s.image(img, s.windowWidth/2 - 100, s.windowHeight/6 - 90);
      s.blendMode(s.OVERLAY);
      s.rect(s.windowWidth/2 + 120, s.windowHeight/2 + 80, 80, 25);

      //Triangle
      s.blendMode(s.NORMAL);
      s.triangle(5*s.windowWidth/6 - 20, s.windowHeight, 5*s.windowWidth/6 - 20, s.windowHeight/2 + 50, s.windowWidth, s.windowHeight);

      //Paragraph
      s.fill('#FFFFFF');
      s.textStyle(s.ITALIC);
      s.textSize(18);
      s.text('El espectro de lo que puede considerarse un movimiento feminista es muy amplio y variado. Es por eso que se dice que no existe un solo feminismo sino varios, muy distintos entre sí. Además, hay proyectos e iniciativas que aunque no se autodenominan feministas, cuentan con un enfoque de género y así contribuyen a algunas de las luchas del feminismo.', s.windowWidth/3 - 50, s.windowHeight/4 + 330, 580, 600);

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
      arrowColor = '#e61dff';
      homeColor = '#e61dff';
      principlesColor = '#e61dff';
    }
  };

  s.next = function() {
    s.select('#p1_4').show();
    s.select('#p1_3').hide();
  };

  s.home = function() {
    s.select('#home').show();
    s.select('#p1_3').hide();
  };

  s.first = function() {
    s.select('#p1_1').show();
    s.select('#p1_3').hide();
  };

}

var p1_3 = new p5(p1_3, 'p1_3');
