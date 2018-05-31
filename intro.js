var intro = function(s) {

  var arrowColor1;
  var arrowColor2;
  var homeColor1;
  var homeColor2;
  var principlesColor1;
  var principlesColor2;
  var img;


  s.setup = function() {
    arrowColor1 = '#ff83ff';
    arrowColor2 = '#21f4f4';
    homeColor1 = '#ff83ff';
    homeColor2 = '#21f4f4';
    principlesColor1 = '#ff83ff';
    principlesColor2 = '#21f4f4';
    img = s.loadImage('http://localhost:8080/TheFutureIsFeminist.png');

    //Canvas
    s.createCanvas(s.displayWidth, s.displayHeight);
    s.background('#FFFFFF');
    s.noStroke();
    s.textFont('Futura');
    s.textStyle(s.BOLD);
    s.textAlign(s.LEFT);
  };

  s.draw = function() {
    if(s.select('#intro').style('display') == 'block') {
      // console.log("Intro");

      //Background
      s.blendMode(s.NORMAL);
      s.background('#FFFFFF');

      //Menu
      s.noStroke();
      s.textAlign(s.LEFT);
      s.textFont('Futura');
      s.blendMode(s.MULTIPLY);
      s.fill(homeColor1);
      s.textStyle(s.BOLD);
      s.textSize(12);
      s.text('i n i c i o', s.windowWidth/2 - 110, 30);
      s.rect(s.windowWidth/2 - 68, 35, 12, 6);

      s.fill(homeColor2);
      s.textStyle(s.BOLD);
      s.textSize(12);
      s.text('i n i c i o', s.windowWidth/2 - 111, 31);
      s.rect(s.windowWidth/2 - 69, 36, 12, 6);

      s.fill(principlesColor1);
      s.text('p r i n c i p i o s', s.windowWidth/2, 30);
      s.rect(s.windowWidth/2 + 86, 35, 12, 6);

      s.fill(principlesColor2);
      s.text('p r i n c i p i o s', s.windowWidth/2, 31);
      s.rect(s.windowWidth/2 + 87, 36, 12, 6);

      //Arrow
      var mx = s.windowWidth - 60;
      var my = s.windowHeight/2;

      s.fill(arrowColor1);
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

      s.fill(arrowColor2);
      s.beginShape();
      s.vertex(mx + 1, my + 1);
      s.vertex(mx + 1, my - 19);
      s.vertex(mx + 21, my - 19);
      s.vertex(mx + 21, my - 29);
      s.vertex(mx + 41, my - 9);
      s.vertex(mx + 21, my + 11);
      s.vertex(mx + 21, my);
      s.vertex(mx, my);
      s.endShape(s.CLOSE);

      //Rectangle
      s.fill('#ff83ff');
      s.beginShape();
      s.vertex(0, 265);
      s.vertex(s.windowWidth, 265);
      s.vertex(s.windowWidth, s.windowHeight);
      s.vertex(0, s.windowHeight);
      s.endShape();

      //Image
      s.blendMode(s.NORMAL);
      s.image(img, -200, s.windowHeight - 520);

      //Triangle
      s.blendMode(s.MULTIPLY);
      s.fill('#21f4f4');
      s.beginShape();
      s.vertex(0, 0);
      s.vertex(0, s.windowHeight);
      s.vertex(s.windowWidth/3, 0);
      s.endShape();

      //Title 1
      s.textFont('Futura');
      s.fill('#21f4f4');
      s.textStyle(s.BOLD);
      s.textSize(120);
      s.text('T', s.windowWidth/2, 300);
      s.text('O', s.windowWidth/2 + 75, 300);
      s.text('D', s.windowWidth/2 + 200, 300);
      s.text('_', s.windowWidth/2 + 310, 280);
      s.text('S', s.windowWidth/2 + 400, 300);

      //Title 2
      s.fill('#ff83ff');
      s.textSize(120);
      s.text('T', s.windowWidth/2 + 10, 310);
      s.text('O', s.windowWidth/2 + 85, 310);
      s.text('D', s.windowWidth/2 + 210, 310);
      s.text('_', s.windowWidth/2 + 320, 290);
      s.text('S', s.windowWidth/2 + 410, 310);

      //Paragraph
      s.blendMode(s.NORMAL);
      s.fill('#FFFFFF');
      s.textStyle(s.ITALIC);
      s.textSize(16);
      s.textAlign(s.CENTER);
      s.text('TOD_S es una plataforma que nació de mi interés por el feminismo y como una suerte de catarsis con la que buscaba sublimar experiencias negativas y dolorosas que viví desde mi lugar como mujer y desde la expresión de mi feminidad; a raíz de estas experiencias decidí contribuir de alguna forma a este movimiento. La necesidad de ubicarme en el vasto universo de la lucha feminista culminó en este proyecto, que es un manifiesto digital en donde exploro las posibilidades que he identificado en el feminismo. Esta es mi mirada. Y aunque es modesta y susceptible al cambio, es el resultado de un trabajo arduo por comprender lo que une y separa no solo a quienes nos consideramos feministas, sino –especialmente– a quienes no. Bienvenid_s tod_s.', s.windowWidth/2 - 5, 400, 500, 400);

    }
  };

  s.mouseInsideArrow = function() {
    var mx = s.windowWidth - 60;
    var my = s.windowHeight/2;

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

  s.mouseClicked = function() {
    if(s.mouseInsideArrow()) {
      s.next();
    } else if(s.mouseInsideHome()) {
      s.home();
    } else if(s.mouseInsidePrinciples()) {
      s.first();
    }
  };

  s.mouseMoved = function() {
    if(s.mouseInsideArrow()){
      arrowColor1 = '#e61dff';
      arrowColor2 = '#FFFFFF';
      s.cursor(s.HAND);
    } else if(s.mouseInsideHome()) {
      homeColor1 = '#e61dff';
      homeColor2 = '#FFFFFF';
      s.cursor(s.HAND);
    } else if(s.mouseInsidePrinciples()) {
      principlesColor1 = '#e61dff';
      principlesColor2 = '#FFFFFF';
      s.cursor(s.HAND);
    } else {
      backgroundColor = '#FFFFFF';
      homeColor1 = '#ff83ff';
      homeColor2 = '#21f4f4';
      principlesColor1 = '#ff83ff';
      principlesColor2 = '#21f4f4';
      arrowColor1 = '#ff83ff';
      arrowColor2 = '#21f4f4';
      s.cursor(s.ARROW);
    }
  };

  s.next = function() {
    s.select('#tutorial').show();
    s.select('#intro').hide();
  };

  s.home = function() {
    s.select('#home').show();
    s.select('#intro').hide();
  };

  s.first = function() {
    s.select('#p1_1').show();
    s.select('#intro').hide();
  };

}

var intro = new p5(intro, 'intro');
