var p3_2 = function(s) {

  var homeColor;
  var principlesColor;
  var arrowColor;
  var img;

  s.setup = function() {
    arrowColor = '#04E973';
    homeColor = '#04E973';
    principlesColor = '#04E973';
    img = s.loadImage('assets/Escepticismo.png');

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

    if(s.select('#p3_2').style('display') == 'block') {
      // console.log("Third Principle – Part 2");

      //Background
      s.background('#DAFF7D');

      //Page number
      s.noStroke();
      s.fill('#FFFFFF');
      s.textFont('Futura');
      s.textStyle(s.BOLD);
      s.textSize(16);
      s.text('2 / 7', 20, s.windowHeight - 20);

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
      s.fill('#FFFFFF');
      s.textStyle(s.NORMAL);
      s.textSize(55);
      s.text('EL', s.windowWidth/10, s.windowHeight/4);
      s.textStyle(s.BOLD);
      s.textSize(60);
      s.text('FEMINISMO', s.windowWidth/10, s.windowHeight/4 + 70);
      s.textSize(35);
      s.textStyle(s.NORMAL);
      s.text('LE DA LA BIENVENIDA AL', s.windowWidth/10, s.windowHeight/4 + 120);
      s.fill('#04E973');
      s.textSize(60);
      s.textStyle(s.BOLD);
      s.text('ESCEPTICISMO',  s.windowWidth/10, s.windowHeight/4 + 190);

      //Image
      s.image(img, s.windowWidth/2, s.windowHeight/6 - 100);
      s.blendMode(s.OVERLAY);
      s.rect(s.windowWidth/2 + 120, s.windowHeight/2 + 85, 80, 25);

      //Triangle
      s.blendMode(s.NORMAL);
      s.triangle(5*s.windowWidth/6 - 20, s.windowHeight, 5*s.windowWidth/6 - 20, s.windowHeight/2 + 50, s.windowWidth, s.windowHeight);

      //Paragraph
      s.fill('#04E973');
      s.textStyle(s.ITALIC);
      s.textSize(18);
      s.text('Sin duda hay personas que se oponen al feminismo o que sencillamente no se sienten parte del movimiento. Esta oposición –o mejor, este escepticismo– transforma a los feminismos al generar debate en torno a sus prácticas y manifestaciones. Esto aporta dinamismo al movimiento: lo cuestiona y, en consecuencia, o lo transforma hacia un movimiento más incluyente o lo afirma en sus convicciones como lucha social. Atender al escepticismo e invitar a la duda no es un acto de traición; es un acto de responsabilidad por concebir movimientos sociales más plurales y en constante actualización.', s.windowWidth/3 - 50, s.windowHeight/4 + 330, 580, 600);

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
    s.select('#p4_1').show();
    s.select('#p3_2').hide();
  };

  s.home = function() {
    s.select('#home').show();
    s.select('#p3_2').hide();
  };

  s.first = function() {
    s.select('#p1_1').show();
    s.select('#p3_2').hide();
  };

}

var p3_2 = new p5(p3_2, 'p3_2');
