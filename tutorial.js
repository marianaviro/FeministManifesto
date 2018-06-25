var tutorial = function(s) {

  var leftArrowColor;
  var rightArrowColor;
  var startColor;
  var homeColor;
  var principlesColor;
  var numero;
  var img1;
  var img2;
  var img3;
  var img4;
  var currentImg;


  s.setup = function() {
    numero = 1;
    leftArrowColor = '#ffdaff';
    rightArrowColor = '#ff83ff';
    startColor = '#ffffff';
    homeColor = '#ff83ff';
    principlesColor = '#ff83ff';
    img1 = s.loadImage('assets/Tutorial1.png');
    img2 = s.loadImage('assets/Tutorial2.png');
    img3 = s.loadImage('assets/Tutorial3.png');
    img4 = s.loadImage('assets/Tutorial4.png');
    currentImg = img1;
    s.background('#FFFFFF');
    s.noStroke();
    s.textFont('Futura');
    s.fill(homeColor);
    s.textStyle(s.BOLD);
    s.textSize(12);

    //Canvas
    s.createCanvas(s.displayWidth, s.displayHeight);
  };

  s.draw = function() {

    if(s.select('#tutorial').style('display') == 'block') {
      // console.log("Tutorial");

      //Background
      s.background('#FFFFFF');

      //Menu
      // s.noStroke();
      // s.textFont('Futura');
      // s.fill(homeColor);
      // s.textStyle(s.BOLD);
      // s.textSize(12);
      // s.text('i n i c i o', s.windowWidth/2 - 110, 30);
      // s.rect(s.windowWidth/2 - 68, 35, 12, 6);
      // s.fill(principlesColor);
      // s.text('p r i n c i p i o s', s.windowWidth/2, 30);
      // s.rect(s.windowWidth/2 + 86, 35, 12, 6);

      //Title
      s.fill('#ff83ff');
      s.textStyle(s.NORMAL);
      s.textSize(50);
      s.text('¿CÓMO LEER', s.windowWidth/2 - 170, 180);
      s.textStyle(s.BOLD);
      s.textSize(50);
      s.text('ESTE MANIFIESTO?', s.windowWidth/2 - 250, 240);

      //Container
      s.rect(s.windowWidth/6, 280, 2*s.windowWidth/3, 430);
      s.fill('#e61dff');
      s.rect(s.windowWidth/6 + 20, 300, 2*s.windowWidth/3 - 40, 390);
      s.fill('#ff83ff');
      s.rect(s.windowWidth/6, 280, 50, 50);
      s.rect(s.windowWidth/2 - 100, 690, 200, 60);
      s.fill('#FFFFFF');
      s.textStyle(s.BOLD);
      s.textSize(26);
      s.text('' + numero, s.windowWidth/6 + 20, 320);
      s.fill(startColor);
      s.text('EMPEZAR', s.windowWidth/2 - 65, 735);

      //Left Arrow
      s.fill(leftArrowColor);
      s.triangle(s.windowWidth/6 - 20, s.windowHeight/2 + 60, s.windowWidth/6 - 50, s.windowHeight/2 + 85, s.windowWidth/6 - 20, s.windowHeight/2 +110);

      //Right Arrow
      s.fill(rightArrowColor);
      s.triangle(5*s.windowWidth/6 + 20, s.windowHeight/2 + 60, 5*s.windowWidth/6 + 50, s.windowHeight/2 + 85, 5*s.windowWidth/6 + 20, s.windowHeight/2 +110);

      //Image
      s.image(currentImg, s.windowWidth/6 + 120, 330);
    }
  };

  s.mouseInsideLeftArrow = function() {
    var hx1 = s.windowWidth/6 - 50;
    var hx2 = s.windowWidth/6 - 20;
    var hy1 = s.windowHeight/2 + 60;
    var hy2 = s.windowHeight/2 + 110;
    if( s.mouseX > hx1 && s.mouseX < hx2 && s.mouseY > hy1 && s.mouseY < hy2 ) {
      return true;
    } else {
      return false;
    }
  };

  s.mouseInsideRightArrow = function() {
    var hx1 = 5*s.windowWidth/6 + 20;
    var hx2 = 5*s.windowWidth/6 + 50;
    var hy1 = s.windowHeight/2 + 60;
    var hy2 = s.windowHeight/2 + 110;
    if( s.mouseX > hx1 && s.mouseX < hx2 && s.mouseY > hy1 && s.mouseY < hy2 ) {
      return true;
    } else {
      return false;
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
      console.log("entro");
      return true;
    } else {
      return false;
    }
  };

  s.mouseInsideStart = function() {
    var hx1 = s.windowWidth/2 - 100;
    var hx2 = s.windowWidth/2 + 100;
    var hy1 = 690;
    var hy2 = 750;
    if( s.mouseX > hx1 && s.mouseX < hx2 && s.mouseY > hy1 && s.mouseY < hy2 ) {
      return true;
    } else {
      return false;
    }
  };

  s.mouseClicked = function() {
    if(s.mouseInsideStart()) {
      s.start();
    } else if(s.mouseInsideHome()) {
      s.home();
    } else if(s.mouseInsidePrinciples()) {
      s.first();
    } else if(s.mouseInsideLeftArrow()) {
      s.prev();
    } else if(s.mouseInsideRightArrow()) {
      s.next();
    }
  };

  s.mouseMoved = function() {
    if(s.mouseInsideStart()) {
      startColor = '#e61dff';
      s.cursor(s.HAND);
    } else if(s.mouseInsideHome()) {
      homeColor = '#e61dff';
      s.cursor(s.HAND);
    } else if(s.mouseInsidePrinciples()) {
      principlesColor = '#e61dff';
      s.cursor(s.HAND);
    } else if(s.mouseInsideLeftArrow()) {
      if(numero != 1) {
        leftArrowColor = '#e61dff';
        s.cursor(s.HAND);
      }
    } else if(s.mouseInsideRightArrow()) {
      if(numero != 4) {
        rightArrowColor = '#e61dff';
        s.cursor(s.HAND);
      }
    } else {
      leftArrowColor = '#ff83ff';
      rightArrowColor = '#ff83ff';
      startColor = '#ffffff';
      homeColor = '#ff83ff';
      principlesColor = '#ff83ff';
      if(numero == 1) {
        leftArrowColor = '#ffdaff';
      } else if(numero == 4) {
        rightArrowColor = '#ffdaff';
      }
      s.cursor(s.ARROW);
    }
  };

  s.prev = function() {
    if(numero == 2) {
      currentImg = img1;
      numero --;
    } else if(numero == 3) {
      currentImg = img2;
      numero --;
    } else if(numero == 4) {
      currentImg = img3;
      numero --;
    }
  };

  s.next = function() {
    if(numero == 1) {
      currentImg = img2;
      numero ++;
    } else if(numero == 2) {
      currentImg = img3;
      numero ++;
    } else if(numero == 3) {
      currentImg = img4;
      numero ++;
    }
  };

  s.start = function() {
    s.select('#p1_1').show();
    s.select('#tutorial').hide();
  };

  s.home = function() {
    s.select('#home').show();
    s.select('#tutorial').hide();
  };

  s.first = function() {
    s.select('#p1_1').show();
    s.select('#tutorial').hide();
  };

}

var tutorial = new p5(tutorial, 'tutorial');
