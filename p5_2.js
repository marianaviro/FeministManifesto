var p5_2 = function(s) {

  var homeColor;
  var principlesColor;
  var arrowColor;
  var img;

  s.setup = function() {
    homeColor = '#21f4f4';
    principlesColor = '#21f4f4';
    arrowColor = '#21f4f4';
    img = s.loadImage('http://localhost:8080/RealMen.png');

    //Canvas
    s.createCanvas(s.displayWidth, s.displayHeight);
    s.background('#217df4');
    s.noStroke();
    s.fill('#FFFFFF');
    s.textFont('Futura');
    s.textStyle(s.BOLD);
    s.textSize(16);
  };

  s.draw = function() {

    if(s.select('#p5_2').style('display') == 'block') {
      // console.log("First Principle – Part 3");

      //Background
      s.background('#217df4');

      //Page number
      s.noStroke();
      s.fill('#FFFFFF');
      s.textFont('Futura');
      s.textStyle(s.BOLD);
      s.textSize(16);
      s.text('5 / 7', 20, s.windowHeight - 20);

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
      s.text('RECONOCE Y', s.windowWidth/10, s.windowHeight/4 + 60);
      s.textSize(45);
      s.textStyle(s.NORMAL);
      s.text('TRABAJA EN SUS', s.windowWidth/10, s.windowHeight/4 + 120);
      s.fill('#21f4f4');
      s.textSize(50);
      s.textStyle(s.BOLD);
      s.text('CONTRADICCIONES',  s.windowWidth/10, s.windowHeight/4 + 180);

      //Image
      s.image(img, s.windowWidth/2 - 65, s.windowHeight/6 - 90);
      s.blendMode(s.OVERLAY);
      s.rect(s.windowWidth/2 + 120, s.windowHeight/2 + 80, 80, 25);

      //Triangle
      s.blendMode(s.NORMAL);
      s.fill('#FFFFFF');
      s.triangle(5*s.windowWidth/6 - 20, s.windowHeight, 5*s.windowWidth/6 - 20, s.windowHeight/2 + 50, s.windowWidth, s.windowHeight);

      //Paragraph
      s.fill('#FFFFFF');
      s.textStyle(s.ITALIC);
      s.textSize(18);
      s.text('El feminismo como movimiento social está conformado por seres humanos que, en su complejidad, suelen presentar contradicciones entre sus ideas y sus prácticas. Más que pretender decantar la militancia para seleccionar personas extraordinariamente consecuentes, en la lucha feminista se propone la reflexión honesta sobre estas contradicciones –individuales y colectivas– para lograr una transformación constante del movimiento que permita mitigar esas contradicciones y ser más coherentes en nuestra cotidianidad.', s.windowWidth/3 - 50, s.windowHeight/4 + 330, 600, 600);

      //Arrow
      var mx = s.windowWidth - 60;
      var my = s.windowHeight/2 - 10;

      s.fill(arrowColor);
      s.beginShape();
      s.vertex(mx, my);
      s.vertex(mx, my - 20);
      s.vertex(mx + 20, my - 20);
      s.vertex(mx + 20, my - 30);
      s.vertex(mx + 40, my - 10);
      s.vertex(mx + 20, my + 10);
      s.vertex(mx + 20, my);
      s.vertex(mx, my);
      s.endShape(s.CLOSE);
    }
  };

  s.mouseInsideArrow = function() {
    var mx = s.windowWidth - 60;
    var my = s.windowHeight/2 - 10;

    //Check if the mouse is inside the arrow's rectangle
    var dx = s.mouseX - mx;
    var dy = s.mouseY - my;
    if(0 < dx && dx < 20 && -20 < dy && dy < 0) {
      return true;
    } else {
      //Check if the mouse is inside the arrow's lower triangle
      var lx = 20 - Math.abs(s.mouseX - mx - 20);
      var ly = Math.abs(s.mouseY - my + 10);
      if(lx < 20 && ly < 20 && lx > ly) {
        return true;
      } else {
        //Check if the mouse is inside the arrow's upper triangle
        var ux = 20 - Math.abs(s.mouseX - mx - 20);
        var uy = Math.abs(s.mouseY - my + 20);
        if(ux < 20 && uy < 20 && ux > uy) {
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
      homeColor = '#ff83ff';
      s.cursor(s.HAND);
    } else if(s.mouseInsidePrinciples()) {
      principlesColor = '#ff83ff';
      s.cursor(s.HAND);
    } else if(s.mouseInsideArrow()) {
      arrowColor = '#ff83ff';
      s.cursor(s.HAND);
    } else {
      s.cursor(s.ARROW);
      arrowColor = '#21f4f4';
      homeColor = '#21f4f4';
      principlesColor = '#21f4f4';
    }
  };

  s.next = function() {
    s.select('#p6_1').show();
    s.select('#p5_2').hide();
  };

  s.home = function() {
    s.select('#home').show();
    s.select('#p5_2').hide();
  };

  s.first = function() {
    s.select('#p1_1').show();
    s.select('#p5_2').hide();
  };

}

var p5_2 = new p5(p5_2, 'p5_2');
