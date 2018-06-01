var p4_2 = function(s) {

  var homeColor;
  var principlesColor;
  var arrowColor;
  var img;

  s.setup = function() {
    arrowColor = '#ffff85';
    homeColor = '#ffff85';
    principlesColor = '#ffff85';
    img = s.loadImage('http://localhost:8080/Sensibilidad.png');

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

    if(s.select('#p4_2').style('display') == 'block') {
      // console.log("Fourth Principle – Part 2");

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
      s.textSize(55);
      s.fill('#FFFFFF');
      s.text('EL FEMINISMO', s.windowWidth/10, s.windowHeight/4);
      s.textSize(45);
      s.textStyle(s.NORMAL);
      s.text('COMPRENDE CON', s.windowWidth/10, s.windowHeight/4 + 60);
      s.fill('#ffff85');
      s.textSize(60);
      s.textStyle(s.BOLD);
      s.text('SENSIBILIDAD...',  s.windowWidth/10, s.windowHeight/4 + 130);

      //Image
      s.image(img, s.windowWidth/2 - 170, s.windowHeight/6 - 80);
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
      s.text('La lucha feminista ha sido acusada de ser demasiado emocional en sus manifestaciones. Aunque esta percepción probablemente se deriva de estereotipos que presionan a las mujeres a ser sumisas y a no ser vehementes, es cierto que al interior de los feminismos se presentan emociones fuertes que surgen a partir de las experiencias injustas y violentas que han vivido las víctimas. Es apenas natural –y en mi opinión, necesario– que las emociones tengan un papel protagónico en las luchas feministas, pues esto permite la comprensión sensible de las posiciones de otros, genera empatía entre las personas y permite hacer catarsis de las injusticias que hemos vivido.', s.windowWidth/3 - 50, s.windowHeight/4 + 330, 610, 600);

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
      arrowColor = '#ffff85';
      homeColor = '#ffff85';
      principlesColor = '#ffff85';
    }
  };

  s.next = function() {
    s.select('#p4_3').show();
    s.select('#p4_2').hide();
  };

  s.home = function() {
    s.select('#home').show();
    s.select('#p4_2').hide();
  };

  s.first = function() {
    s.select('#p1_1').show();
    s.select('#p4_2').hide();
  };

}

var p4_2 = new p5(p4_2, 'p4_2');
