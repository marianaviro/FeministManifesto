var p4_3 = function(s) {

  var homeColor;
  var principlesColor;
  var arrowColor;
  var img;

  s.setup = function() {
    arrowColor = '#ffff85';
    homeColor = '#ffff85';
    principlesColor = '#ffff85';
    img = s.loadImage('assets/Racionalidad.png');

    //Canvas
    s.createCanvas(s.displayWidth, s.displayHeight);
    s.background('#FF83FF');
    s.noStroke();
    s.fill('#FFFFFF');
    s.textFont('Futura');
    s.textStyle(s.BOLD);
    s.textSize(16);
  };

  s.draw = function() {

    if(s.select('#p4_3').style('display') == 'block') {
      // console.log("Fourth Principle – Part 3");

      //Background
      s.background('#FF83FF');

      //Page number
      s.noStroke();
      s.fill('#FFFFFF');
      s.textFont('Futura');
      s.textStyle(s.BOLD);
      s.textSize(16);
      s.text('4 / 7', 20, s.windowHeight - 20);

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
      s.textSize(45);
      s.textStyle(s.NORMAL);
      s.text('...Y ACTÚA CON', s.windowWidth/10, s.windowHeight/4 + 60);
      s.fill('#ffff85');
      s.textSize(55);
      s.textStyle(s.BOLD);
      s.text('RACIONALIDAD',  s.windowWidth/10, s.windowHeight/4 + 120);

      //Image
      s.image(img, s.windowWidth/2 - 50, s.windowHeight/6 - 60);
      s.blendMode(s.OVERLAY);
      s.rect(s.windowWidth/2 + 120, s.windowHeight/2 + 80, 80, 25);

      //Triangle
      s.blendMode(s.NORMAL);
      s.fill('#ff8385');
      s.triangle(5*s.windowWidth/6 - 20, s.windowHeight, 5*s.windowWidth/6 - 20, s.windowHeight/2 + 50, s.windowWidth, s.windowHeight);

      //Paragraph
      s.fill('#FFFFFF');
      s.textStyle(s.ITALIC);
      s.textSize(16);
      s.text('Algunos relacionan el presunto exceso de sensibilidad con una falta de racionalidad en el movimiento, acusándolo así de no ser pertinente en discusiones políticas. Dejando para otro espacio la discusión sobre si lo emocional es pertinente o no en la política –yo creo que sí–, es importante hacer notar los aportes teóricos de feministas a áreas del conocimiento como el derecho, la ciencia política, la filosofía y muchas otras más. Estos aportes se han hecho desde lo académico y desde lo profesional, lo cual ha incidido en las transformaciones sociales, económicas, políticas y culturales de muchos países hacia una sociedad igualitaria en todos los ámbitos de la vida en sociedad.', s.windowWidth/3 - 50, s.windowHeight/4 + 330, 610, 600);

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
      arrowColor = '#ffff85';
      homeColor = '#ffff85';
      principlesColor = '#ffff85';
    }
  };

  s.next = function() {
    s.select('#p5_1').show();
    s.select('#p4_3').hide();
  };

  s.home = function() {
    s.select('#home').show();
    s.select('#p4_3').hide();
  };

  s.first = function() {
    s.select('#p1_1').show();
    s.select('#p4_3').hide();
  };

}

var p4_3 = new p5(p4_3, 'p4_3');
