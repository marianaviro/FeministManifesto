var home = function(s) {

  var arrowColor;
  var homeColor;
  var principlesColor;
  var logo;


  s.setup = function() {
    arrowColor = '#731dd3';
    homeColor = '#731dd3';
    principlesColor = '#731dd3';
    logo = s.loadImage('assets/logo.png');
    s.noStroke();
    s.textFont('Futura');
    s.fill(homeColor);
    s.textStyle(s.BOLD);
    s.textSize(12);
    s.background('#FFFFFF');

    //Canvas
    s.createCanvas(s.displayWidth, s.displayHeight);
  };

  s.draw = function() {

    if(s.select('#home').style('display') == 'block') {
      // console.log("Home");

      //Background
      s.background('#FFFFFF');
      s.image(logo, s.windowWidth/2 - 250, s.windowHeight/2 - 250, 500, 500);

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
      arrowColor = '#e61dff';
      backgroundColor = '#DAFF7D';
      s.cursor(s.HAND);
    } else if(s.mouseInsideHome()) {
      homeColor = '#e61dff';
      s.cursor(s.HAND);
    } else if(s.mouseInsidePrinciples()) {
      principlesColor = '#e61dff';
      s.cursor(s.HAND);
    } else {
      backgroundColor = '#FFFFFF';
      homeColor = '#731dd3';
      principlesColor = '#731dd3';
      arrowColor = '#731dd3';
      s.cursor(s.ARROW);
    }
  };

  s.next = function() {
    s.select('#intro').show();
    s.select('#home').hide();
  };

  s.home = function() {
    //Do nothing
  };

  s.first = function() {
    s.select('#p1_1').show();
    s.select('#home').hide();
  };

}

var home = new p5(home, 'home');
