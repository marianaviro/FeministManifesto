var third = function(s) {

  var homeColor;
  var principlesColor;
  var openColor;
  var stopColor;
  var arrowColor;
  var running;
  var project;
  var stopText;

  s.setup = function() {
    homeColor = '#e61dff';
    principlesColor = '#e61dff';
    openColor = '#731DD3';
    stopColor = '#FFFFFF';
    arrowColor = '#e61dff';
    stopText = 'D E T E N E R';
    count = 0;
    backwards = 0;
    running = true;
    project = projects[Math.floor(Math.random() * projects.length)];

    //Canvas
    s.createCanvas(s.displayWidth, s.displayHeight);
  };

  s.draw = function() {

    //Background
    s.background('#731DD3');

    //Menu
    s.textAlign(s.LEFT);
    s.noStroke();
    s.textFont('Futura');
    s.fill(homeColor);
    s.textStyle(s.BOLD);
    s.textSize(12);
    s.text('i n i c i o', s.windowWidth/2 - 110, 30);
    s.rect(s.windowWidth/2 - 68, 35, 12, 6);
    s.fill(principlesColor);
    s.text('p r i n c i p i o s', s.windowWidth/2, 30);
    s.rect(s.windowWidth/2 + 86, 35, 12, 6);

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
    if(showArrow) {
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
    }
  };

  s.mouseClicked  = function() {
    if(s.mouseInsideArrow()){
      s.next();
    } else if(s.mouseInsideOpen()) {
      s.open();
    } else if(s.mouseInsideStop()) {
      s.stop();
    }
  };

  s.mouseMoved = function() {
    if(s.mouseInsideStop()) {
      stopColor = '#731DD3';
      s.cursor(s.HAND);
    } else if(s.mouseInsideOpen()) {
      openColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else if(s.mouseInsideHome()) {
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
      openColor = '#731DD3';
      stopColor = '#FFFFFF';
    }
  };

  s.open = function() {
    window.open(project.url);
  };

  s.stop = function() {
    if(stopText == 'D E T E N E R') {
      running = false;
      showArrow = true;
      stopText = 'I N I C I A R';
    } else {
      running = true;
      stopText = 'D E T E N E R';
    }
  };

  s.next = function() {
    s.select('#fourth').show();
    s.select('#third').hide();
  };

}

var third = new p5(third, 'third');
