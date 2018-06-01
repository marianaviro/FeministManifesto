var p6_1 = function(s) {

  var color;
  var privadoColor;
  var colectivoColor;
  var homeColor;
  var principlesColor;
  var count;

  s.setup = function() {
    privadoColor = '#E61DFF';
    colectivoColor = '#FF43FF';
    color = 0;
    count = 0;
    homeColor = '#e61dff';
    principlesColor = '#e61dff';
    count = 0;
    backwards = 0;
    pluralColor = '#e61dff';
    overPlural = false;

    //Canvas
    s.createCanvas(s.displayWidth, s.displayHeight);
    s.background('#FF83FF');
    s.noStroke();
    s.textFont('Futura');
    s.fill(homeColor);
    s.textStyle(s.BOLD);
    s.textSize(12);
  };

  s.draw = function() {

    if(s.select('#p6_1').style('display') == 'block') {
      // console.log("Sixth Principle – Part 1");

      //Background
      s.background('#731DD3');

      //Page number
      s.fill('#FFFFFF');
      s.textFont('Futura');
      s.textStyle(s.BOLD);
      s.textSize(16);
      s.text('6 / 7', 20, s.windowHeight - 20);

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
      s.fill('#FF83FF');
      s.text('P R I N C I P I O   # 6', s.windowWidth/2 - 75, s.windowHeight/2 - 170);
      s.strokeWeight(20);
      s.rect(s.windowWidth/2 - 110, s.windowHeight/2 - 160, 210, 300);

      //Principle
      s.noStroke();
      s.textFont('Futura');
      s.fill('#FFFFFF');
      s.textSize(37);
      s.text('EL FEMINISMO ES', s.windowWidth/2 - 180, s.windowHeight/2 - 100);
      s.textStyle(s.BOLD);
      s.textSize(60);

      s.fill(colectivoColor);
      s.text('COLECTIVO', s.windowWidth/2 - 180, s.windowHeight/2 - 30);
      s.textStyle(s.BOLD);
      s.textSize(72);
      s.fill(privadoColor);
      s.text('PRIVADO', s.windowWidth/2 - 183, s.windowHeight/2 + 110);
      s.fill('#FFFFFF');
      s.textStyle(s.NORMAL);
      s.textSize(52);
      s.text('Y TAMBIÉN ES', s.windowWidth/2 - 180, s.windowHeight/2 + 35);
      s.setColor();
    }
  };

  s.mouseInsidePrivado = function() {
    var privadoX1 = s.windowWidth/2 - 183;
    var privadoX2 = s.windowWidth/2 + 185;
    var privadoY1 = s.windowHeight/2 + 35;
    var privadoY2 = s.windowHeight/2 + 115;
    if(s.mouseX > privadoX1 && s.mouseX < privadoX2 && s.mouseY > privadoY1 && s.mouseY < privadoY2) {
      return true;
    }
    return false;
  };

  s.mouseInsideColectivo = function() {
    var colectivoX1 = s.windowWidth/2 - 183;
    var colectivoX2 = s.windowWidth/2 + 185;
    var colectivoY1 = s.windowHeight/2 - 85;
    var colectivoY2 = s.windowHeight/2 - 20;
    if(s.mouseX > colectivoX1 && s.mouseX < colectivoX2 && s.mouseY > colectivoY1 && s.mouseY < colectivoY2) {
      return true;
    }
    return false;
  };

  s.setColor = function() {
    //Plural
    if(!overPlural) {
      var from = s.color('#ff1dff');
      var to = s.color('#731DD3');
      var m = s.map(count, 0, 10, 0, 0.5);
      if(count == 10) {
        backwards = 1;
      } else if(count == 0){
        backwards = 0;
      }
      if(backwards == 1){
        count --;
      } else {
        count ++;
      }
      privadoColor = s.lerpColor(from, to, m);
      colectivoColor = s.lerpColor(from, to, m);
    }
  }

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
    if(s.mouseInsidePrivado()){
      s.private();
    } else if(s.mouseInsideColectivo()) {
      s.colective();
    } else if(s.mouseInsideHome()) {
      s.home();
    } else if(s.mouseInsidePrinciples()) {
      s.first();
    }
  };

  s.mouseMoved = function() {
    if(s.mouseInsidePrivado()){
      s.cursor(s.HAND);
      privadoColor = '#FFFFFF';
    } else if(s.mouseInsideColectivo()) {
      s.cursor(s.HAND);
      colectivoColor = '#FFFFFF';
    } else if(s.mouseInsideHome()) {
      homeColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else if(s.mouseInsidePrinciples()) {
      principlesColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else {
      s.cursor(s.ARROW);
      homeColor = '#e61dff';
      principlesColor = '#e61dff';
      s.setColor();
    }
  };

  s.private = function() {
    s.select('#p6_2').show();
    s.select('#p6_1').hide();
  };

  s.colective = function() {
    s.select('#p6_2').show();
    s.select('#p6_1').hide();
  };

  s.home = function() {
    s.select('#home').show();
    s.select('#p6_1').hide();
  };

  s.first = function() {
    s.select('#p1_1').show();
    s.select('#p6_1').hide();
  };
}

var p6_1 = new p5(p6_1, 'p6_1');
