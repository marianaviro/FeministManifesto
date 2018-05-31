var p1_2 = function(s) {

  var homeColor;
  var principlesColor;
  var openColor;
  var stopColor;
  var arrowColor;
  var showArrow;
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
    showArrow = false;
    running = true;
    project = projects[Math.floor(Math.random() * projects.length)];

    //Canvas
    s.createCanvas(s.displayWidth, s.displayHeight);
    s.background('#731DD3');
    s.noStroke();
    s.textAlign(s.LEFT);
    s.textFont('Futura');
    s.fill(homeColor);
    s.textStyle(s.BOLD);
    s.textSize(12);
  };

  s.draw = function() {

    if(s.select('#p1_2').style('display') == 'block') {
      // console.log("First Principle – Part 2");

      //Background
      s.background('#731DD3');

      //Page number
      s.fill('#FFFFFF');
      s.textFont('Futura');
      s.textStyle(s.BOLD);
      s.textSize(16);
      s.text('1 / 7', 40, s.windowHeight - 20);

      //Menu
      s.textAlign(s.LEFT);
      s.noStroke();
      s.fill(homeColor);
      s.textSize(12);
      s.text('i n i c i o', s.windowWidth/2 - 110, 30);
      s.rect(s.windowWidth/2 - 68, 35, 12, 6);
      s.fill(principlesColor);
      s.text('p r i n c i p i o s', s.windowWidth/2, 30);
      s.rect(s.windowWidth/2 + 86, 35, 12, 6);

      //Rectangle
      s.fill('#e61dff');
      s.stroke('#FFFFFF');
      s.strokeWeight(20);
      s.rect(s.windowWidth/3, 140, s.windowWidth/3, s.windowHeight - 350);

      //Projects
      if(running) {
        s.noStroke();
        s.textFont('Futura');
        s.fill('#FFFFFF');
        s.textStyle(s.NORMAL);
        s.textSize(35);
        s.textAlign(s.CENTER);
        project = projects[Math.floor(Math.random() * projects.length)];
        s.text(project.name, s.windowWidth/3 + 50, 300, s.windowWidth/3 - 70);
      } else {
        //Projects
        s.noStroke();
        s.textFont('Futura');
        s.fill('#FFFFFF');
        s.textStyle(s.NORMAL);
        s.textSize(35);
        s.textAlign(s.CENTER);
        s.text(project.name, s.windowWidth/3 + 50, 300, s.windowWidth/3 - 70);

        //Open
        s.fill(openColor);
        s.textStyle(s.BOLD);
        s.textSize(25);
        s.rect(s.windowWidth/3 + 50, 495, s.windowWidth/3 - 100, 5);
        s.text('V E R   I N I C I A T I V A', s.windowWidth/3 + 210, 545);
      }

      //Stop
      s.textStyle(s.BOLD);
      s.fill('#e61dff');
      s.rect(s.windowWidth/2 - 100, s.windowHeight - 160, 200, 50);
      s.fill(stopColor);
      s.textSize(20);
      s.textAlign(s.CENTER);
      s.text(stopText, s.windowWidth/2 - 100, s.windowHeight - 128, 200);

      //Arrow
      if(showArrow) {
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
    }
  };

  s.mouseInsideOpen = function() {
    var x1 = s.windowWidth/3 + 50;
    var x2 = 2*s.windowWidth/3 - 50;
    var y1 = 490;
    var y2 = 550;
    if( s.mouseX > x1 && s.mouseX < x2 && s.mouseY > y1 && s.mouseY < y2 ) {
      return true;
    } else {
      return false;
    }
  };

  s.mouseInsideStop = function() {
    var x1 = s.windowWidth/2 - 100;
    var x2 = s.windowWidth/2 + 100;
    var y1 = s.windowHeight - 160;
    var y2 = s.windowHeight - 110;
    if( s.mouseX > x1 && s.mouseX < x2 && s.mouseY > y1 && s.mouseY < y2 ) {
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
    } else if(s.mouseInsideHome()) {
      s.home();
    } else if(s.mouseInsidePrinciples()) {
      s.first();
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
    s.select('#p1_3').show();
    s.select('#p1_2').hide();
  };

  s.home = function() {
    s.select('#home').show();
    s.select('#p1_2').hide();
  };

  s.first = function() {
    s.select('#p1_1').show();
    s.select('#p1_2').hide();
  };

}

var p1_2 = new p5(p1_2, 'p1_2');
