var p1_4 = function(s) {

  var homeColor;
  var principlesColor;
  var arrowColor;
  var count;
  var backwards;
  var m;

  s.setup = function() {
    homeColor = '#e61dff';
    principlesColor = '#e61dff';
    arrowColor = '#e61dff';
    count = 0;
    backwards = 0;
    m = 0;

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

    if(s.select('#p1_4').style('display') == 'block') {
      // console.log("First Principle – Part 3");

      //Background
      s.blendMode(s.NORMAL);
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

      //Paragraph
      s.fill('#FFFFFF');
      s.textStyle(s.ITALIC);
      s.textSize(18);
      s.text('En el feminismo coexisten personas tan distintas que hay quienes creen que la desigualdad de género está presente solo en algunos ámbitos de la vida en sociedad, y hay quienes creen que la desigualdad está relacionada con todas las estructuras de poder. Por eso sería necesario articular el feminismo con otros movimientos sociales. Esto último se llama:', s.windowWidth/8, s.windowHeight/4, 280, 600);

      //Animation
      m = s.map(count, 0, 280, -25, 25);
      if(count == 280) {
        backwards = 1;
      } else if(count == 0){
        backwards = 0;
      }
      if(backwards == 1){
        count --;
      } else {
        count ++;
      }

      //Arrow 1
      s.blendMode(s.OVERLAY);
      var mx = s.windowWidth - 60;
      var my = s.windowHeight/2 + m;
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

      //Arrow 2
      var my = s.windowHeight/2 - m;
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

      //Title 1
      s.textSize(110);
      s.textStyle(s.BOLD);
      s.text('INTER', s.windowWidth/2, s.windowHeight/4 + 90 + m);
      s.text('SECCI', s.windowWidth/2, s.windowHeight/4 + 200 + m);
      s.text('ONAL', s.windowWidth/2, s.windowHeight/4 + 310 + m);
      s.text('IDAD', s.windowWidth/2, s.windowHeight/4 + 420 + m);

      //Title 2
      s.textSize(110);
      s.textStyle(s.BOLD);
      s.text('INTER', s.windowWidth/2, s.windowHeight/4 + 90 - m);
      s.text('SECCI', s.windowWidth/2, s.windowHeight/4 + 200 - m);
      s.text('ONAL', s.windowWidth/2, s.windowHeight/4 + 310 - m);
      s.text('IDAD', s.windowWidth/2, s.windowHeight/4 + 420 - m);

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
    if(m > - 5 && m < 5) {
      var mx = s.windowWidth - 60;
      var my = s.windowHeight/2 + m;

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
    s.select('#p2_1').show();
    s.select('#p1_4').hide();
  };

  s.home = function() {
    s.select('#home').show();
    s.select('#p1_4').hide();
  };

  s.first = function() {
    s.select('#p1_1').show();
    s.select('#p1_4').hide();
  };

}

var p1_4 = new p5(p1_4, 'p1_4');
