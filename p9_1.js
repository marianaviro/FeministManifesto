var p9_1 = function(s) {

  var homeColor;
  var principlesColor;
  var arrowColor;
  var img;
  var restartColor1;
  var restartColor2;

  s.setup = function() {
    arrowColor = '#ffff85';
    homeColor = '#ffff85';
    principlesColor = '#ffff85';
    restartColor1 = '#ffff85';
    restartColor2 = '#ff8385';
    img = s.loadImage('http://localhost:8080/Redes.png');

    //Canvas
    s.createCanvas(s.displayWidth, s.displayHeight);
    s.background('#ff83ff');
    s.noStroke();
    s.fill('#FFFFFF');
    s.textFont('Futura');
    s.textStyle(s.BOLD);
    s.textSize(16);
  };

  s.draw = function() {

    if(s.select('#p9_1').style('display') == 'block') {
      // console.log("Fourth Principle – Part 2");

      //Background
      s.background('#ff83ff');
      s.textStyle(s.BOLD);

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
      s.fill('#ff8385');
      s.rect(0, s.windowHeight/2 - 250, s.windowWidth, 350);

      //Title
      s.textAlign(s.LEFT);
      s.textStyle(s.BOLD);
      s.textSize(110);
      s.fill('#ffff85');
      s.text('T', s.windowWidth/2 - 240, s.windowHeight/2 + 50);
      s.text('O', s.windowWidth/2 - 160, s.windowHeight/2 + 50);
      s.text('D', s.windowWidth/2 - 40, s.windowHeight/2 + 50);
      s.text('_', s.windowWidth/2 + 70, s.windowHeight/2 + 30);
      s.text('S', s.windowWidth/2 + 160, s.windowHeight/2 + 50);

      //Paragraph
      s.textAlign(s.CENTER);
      s.textStyle(s.ITALIC);
      s.textSize(22);
      s.fill('#FFFFFF');
      s.text('¿Te gustó esta experiencia? ¿Quieres opinar algo al respecto? Ayúdame a generar discusiones interesantes en torno a la lucha feminista. Recuerda que en el feminismo cabemos', s.windowWidth/2 - 245, s.windowHeight/2 - 190, 480, 600);

      //Image
      s.image(img, s.windowHeight/2 + 150, s.windowHeight/2 + 150);

      //Button
      s.textAlign(s.LEFT);
      s.fill(restartColor1);
      s.rect(s.windowWidth - 350, 8*s.windowHeight/9, 300, 50);
      s.fill(restartColor2);
      s.textSize(24);
      s.textStyle(s.BOLD);
      s.text('VOLVER A EMPEZAR', s.windowWidth - 330, 8*s.windowHeight/9 + 35);
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

  s.mouseInsideRestart = function() {
    var hx1 = s.windowWidth - 350;
    var hx2 = s.windowWidth + 50;
    var hy1 = 8*s.windowHeight/9;
    var hy2 = 8*s.windowHeight/9 + 50;
    if( s.mouseX > hx1 && s.mouseX < hx2 && s.mouseY > hy1 && s.mouseY < hy2 ) {
      return true;
    } else {
      return false;
    }
  };

  s.mouseClicked  = function() {
    if(s.mouseInsideHome()) {
      s.home();
    } else if(s.mouseInsidePrinciples()) {
      s.first();
    } else if(s.mouseInsideRestart()) {
      s.next();
    }
  };

  s.mouseMoved = function() {
    if(s.mouseInsideHome()) {
      homeColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else if(s.mouseInsidePrinciples()) {
      principlesColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else if (s.mouseInsideRestart()) {
      restartColor1 = '#ff8385';
      restartColor2 = '#ffff85';
      s.cursor(s.HAND);
    } else {
      s.cursor(s.ARROW);
      arrowColor = '#ffff85';
      homeColor = '#ffff85';
      principlesColor = '#ffff85';
      restartColor1 = '#ffff85';
      restartColor2 = '#ff8385';
    }
  };

  s.next = function() {
    s.select('#home').show();
    s.select('#p9_1').hide();
  };

  s.home = function() {
    s.select('#home').show();
    s.select('#p9_1').hide();
  };

  s.first = function() {
    s.select('#p1_1').show();
    s.select('#p9_1').hide();
  };

}

var p9_1 = new p5(p9_1, 'p9_1');
