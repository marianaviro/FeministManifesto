var p1_1 = function(s) {

  var homeColor;
  var principlesColor;
  var count;
  var pluralColor;
  var overPlural;
  var backwards;

  s.setup = function() {
    homeColor = '#e61dff';
    principlesColor = '#e61dff';
    count = 0;
    backwards = 0;
    pluralColor = '#e61dff';
    overPlural = false;

    //Canvas
    s.createCanvas(s.displayWidth, s.displayHeight);
    s.noStroke();
    s.textFont('Futura');
    s.fill(homeColor);
    s.textStyle(s.BOLD);
    s.textSize(12);
  };

  s.draw = function() {

    if(s.select('#p1_1').style('display') == 'block') {
      // console.log("First Principle – Part 1");

      //Background
      s.background('#731DD3');

      //Page number
      s.fill('#FFFFFF');
      s.textFont('Futura');
      s.textStyle(s.BOLD);
      s.textSize(16);
      s.text('1 / 7', 20, s.windowHeight - 20);

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
      s.text('P R I N C I P I O   # 1', s.windowWidth/2 - 75, s.windowHeight/2 - 170);
      s.strokeWeight(20);
      s.rect(s.windowWidth/2 - 110, s.windowHeight/2 - 160, 210, 300);

      //Rectangle
      s.fill('#FF83FF');
      s.noStroke();
      s.strokeWeight(20);
      s.rect(s.windowWidth/2 - 110, s.windowHeight/2 - 160, 210, 300);

      //Principle
      s.noStroke();
      s.textFont('Futura');
      s.fill(255);
      s.textStyle(s.NORMAL);
      s.textSize(30);
      s.text('EL', s.windowWidth/2 -20, s.windowHeight/2 - 110);
      s.textStyle(s.BOLD);
      s.textSize(50);
      s.text('FEMINISMO', s.windowWidth/2 - 160, s.windowHeight/2 - 43);
      s.textStyle(s.NORMAL);
      s.textSize(43);
      s.text('ES UN ESPACIO', s.windowWidth/2 - 160, s.windowHeight/2 + 15);

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
        pluralColor = s.lerpColor(from, to, m);
        s.fill(pluralColor);
      } else {
        s.fill('#FFFFFF');
      }
      s.textStyle(s.BOLD);
      s.textSize(80);
      s.text('PLURAL', s.windowWidth/2 - 160, s.windowHeight/2 + 100);
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

  s.mouseInsidePlural = function() {
    var pluralX1 = s.windowWidth/2 - 183;
    var pluralX2 = s.windowWidth/2 + 200;
    var pluralY1 = s.windowHeight/2 + 35;
    var pluralY2 = s.windowHeight/2 + 115;
    if(s.mouseX > pluralX1 && s.mouseX < pluralX2 && s.mouseY > pluralY1 && s.mouseY < pluralY2) {
      return true;
    }
    return false;
  };

  s.mouseClicked  = function() {
    if(s.mouseInsidePlural()){
      s.next();
    } else if(s.mouseInsideHome()) {
      s.home();
    } else if(s.mouseInsidePrinciples()) {
      s.first();
    }
  };

  s.mouseMoved = function() {
    if(s.mouseInsidePlural()) {
      overPlural = true;
      s.cursor(s.HAND);
    } else if(s.mouseInsideHome()) {
      homeColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else if(s.mouseInsidePrinciples()) {
      principlesColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else {
      overPlural = false;
      s.cursor(s.ARROW);
      homeColor = '#e61dff';
      principlesColor = '#e61dff';
    }
  };

  s.next = function() {
    s.select('#p1_2').show();
    s.select('#p1_1').hide();
  };

  s.home = function() {
    s.select('#home').show();
    s.select('#p1_1').hide();
  };

  s.first = function() {
    //Do nothing
  };

}

var p1_1 = new p5(p1_1, 'p1_1');
