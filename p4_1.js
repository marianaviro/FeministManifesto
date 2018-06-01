var p4_1 = function(s) {

  var showArrow;
  var count;
  var arrowColor;
  var homeColor;
  var principlesColor;
  var song;
  var playing;

  s.preload = function() {
    song = s.loadSound('http://localhost:8080/song.mp3');
  }

  s.setup = function() {
    arrowColor = '#ffff85';
    homeColor = '#ffff85';
    principlesColor = '#ffff85';
    showArrow = true;
    playing = false;

    s.createCanvas(s.displayWidth, s.displayHeight);
    s.background('#FF83FF');
    s.textAlign(s.LEFT);
    s.noStroke();
    s.fill('#ffffff');
    s.textFont('Futura');
    s.textStyle(s.BOLD);
    s.textSize(16);
  };

  s.draw = function() {

    if(s.select('#p4_1').style('display') == 'block') {
      // console.log("Fourth Principle – Part 1");

      if(!playing) {
        song.play();
        playing = true;
      }

      //Background
      s.background('#FF83FF');
      s.textAlign(s.LEFT);

      //Page number
      s.noStroke();
      s.fill('#ffffff');
      s.textFont('Futura');
      s.textStyle(s.BOLD);
      s.textSize(16);
      s.text('4 / 7', 20, s.windowHeight - 20);

      //Menu
      s.textFont('Futura');
      s.fill(homeColor);
      s.textStyle(s.BOLD);
      s.textSize(12);
      s.text('i n i c i o', s.windowWidth/2 - 110, 30);
      s.rect(s.windowWidth/2 - 68, 35, 12, 6);
      s.fill(principlesColor);
      s.text('p r i n c i p i o s', s.windowWidth/2, 30);
      s.rect(s.windowWidth/2 + 86, 35, 12, 6);

      //Rectangle
      s.fill('#ff8385');
      s.text('P R I N C I P I O   # 4', s.windowWidth/2 - 75, s.windowHeight/2 - 170);
      s.strokeWeight(20);
      var x1 = s.windowWidth/2 - 110;
      var x2 = s.windowWidth/2 + 100;
      var y1 = s.windowHeight/2 - 160;
      var y2 = s.windowHeight/2 + 140;
      var mo = s.constrain(s.mouseY, 0, s.windowHeight);
      var m = s.map(mo, s.windowHeight, 0, -5, 110);

      //Right arc
      s.beginShape();
      s.vertex(x2 - m, y1);
      s.bezierVertex(x2 + m, y1, x2 + m, y2, x2 - m, y2);
      s.endShape();

      //Left arc
      s.beginShape();
      s.vertex(x1 + m, y1);
      s.bezierVertex(x1 - m, y1, x1 - m, y2, x1 + m, y2);
      s.endShape();

      //Middle rectangle
      s.rect(x1 + m, y1, x2 - x1 - (2*m), 300);

      //sound
      var vol = s.map(mo, s.windowHeight, 0, 0, 1);
      song.setVolume(vol);

      //Principle
      s.textFont('Futura');
      s.textAlign(s.CENTER);
      s.fill('#FFFFFF');
      s.textSize(13);
      s.textAlign(s.LEFT);
      s.fill('#FFFFFF');
      s.textStyle(s.BOLD);
      s.textSize(38);
      s.text('EL  FEMINISMO', s.windowWidth/2 - 160, s.windowHeight/2 - 95);
      s.textStyle(s.NORMAL);
      s.textSize(34);
      s.text('COMPRENDE CON', s.windowWidth/2 - 160, s.windowHeight/2 - 50);
      s.fill('#ffff85');
      s.textStyle(s.BOLD);
      s.textSize(42);
      s.text('SENSIBILIDAD', s.windowWidth/2 - 160, s.windowHeight/2 + 5);
      s.fill('#FFFFFF');
      s.textStyle(s.NORMAL);
      s.textSize(44);
      s.text('Y ACTÚA CON', s.windowWidth/2 - 160, s.windowHeight/2 + 60);
      s.fill('#ffff85');
      s.textStyle(s.BOLD);
      s.textSize(37);
      s.text('RACIONALIDAD', s.windowWidth/2 - 160, s.windowHeight/2 + 110);

      //Arrow
      if(showArrow) {
        s.fill(arrowColor);
        var mx = s.windowWidth/2 - 10;
        var my = s.windowHeight - 60;
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

  s.mouseInsideArrow = function() {
    if(showArrow) {
      var mx = s.windowWidth/2 - 10;
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
      arrowColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else if(s.mouseInsideHome()) {
      homeColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else if(s.mouseInsidePrinciples()) {
      principlesColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else {
      homeColor = '#ffff85';
      principlesColor = '#ffff85';
      arrowColor = '#ffff85'
      s.cursor(s.ARROW);
    }
  };

  s.next = function() {
    song.stop();
    playing = false;
    s.select('#p4_2').show();
    s.select('#p4_1').hide();
  };

  s.home = function() {
    song.stop();
    playing = false;
    s.select('#home').show();
    s.select('#p4_1').hide();
  };

  s.first = function() {
    song.stop();
    playing = false;
    s.select('#p1_1').show();
    s.select('#p4_1').hide();
  };

}

var p4_1 = new p5(p4_1, 'p4_1');
