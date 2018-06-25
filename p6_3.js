var p6_3 = function(s) {

  var generateColor;
  var calendarColor;
  var homeColor;
  var principlesColor;
  var arrowColor;
  var challenge;
  var seen;

  s.setup = function() {
    generateColor = '#FFFFFF';
    calendarColor = '#FFFFFF';
    homeColor = '#e61dff';
    principlesColor = '#e61dff';
    arrowColor = '#e61dff';
    challenge = collective_challenges[Math.floor(Math.random() * collective_challenges.length)];
    seen = false;

    //Canvas
    s.createCanvas(s.displayWidth, s.displayHeight);
    s.background('#731DD3');
    s.noStroke();
    s.textFont('Futura');
    s.fill(homeColor);
    s.textStyle(s.BOLD);
    s.textSize(12);
  };

  s.draw = function() {

    if(s.select('#p6_3').style('display') == 'block') {
      // console.log("Sixth Principle – Part 3");

      //Background
      s.background('#731DD3');
      s.textAlign(s.LEFT);

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

      //Title
      s.textAlign(s.CENTER);
      s.textStyle(s.NORMAL);
      s.fill('#e61dff');
      s.textSize(35);
      s.text('RETO', s.windowWidth/2, s.windowHeight/5);
      s.textStyle(s.BOLD);
      s.textSize(70);
      s.text('COLECTIVO', s.windowWidth/2, s.windowHeight/5 + 70);

      //Challenge
      s.noStroke();
      s.textFont('Futura');
      s.fill('#FFFFFF');
      s.textSize(37);
      s.text(challenge.name, s.windowWidth/2 - 400, s.windowHeight/2 - 100, 800, 600);

      //Calendar
      s.textStyle(s.BOLD);
      s.fill('#ff83ff');
      s.rect(s.windowWidth/2 - 170, s.windowHeight/2 + 115, 340, 50);
      s.fill(calendarColor);
      s.textSize(20);
      s.text('PUBLICAR EN FACEBOOK', s.windowWidth/2, s.windowHeight/2 + 148);

      //Generate
      s.textStyle(s.BOLD);
      s.fill('#e61dff');
      s.rect(s.windowWidth/2 - 100, s.windowHeight/2 + 188, 200, 50);
      s.fill(generateColor);
      s.textSize(20);
      s.text('GENERAR OTRO', s.windowWidth/2, s.windowHeight/2 + 220);

      //Arrow
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

  s.mouseInsideGenerate = function() {
    var hx1 = s.windowWidth/2 - 100;
    var hx2 = s.windowWidth/2 + 100;
    var hy1 = s.windowHeight/2 + 188;
    var hy2 = s.windowHeight/2 + 238;
    if( s.mouseX > hx1 && s.mouseX < hx2 && s.mouseY > hy1 && s.mouseY < hy2 ) {
      return true;
    } else {
      return false;
    }
  };

  s.mouseInsideCalendar = function() {
    s.rect(s.windowWidth/2 - 170, s.windowHeight/2 + 115, 340, 50);
    var hx1 = s.windowWidth/2 - 170;
    var hx2 = s.windowWidth/2 + 170;
    var hy1 = s.windowHeight/2 + 115;
    var hy2 = s.windowHeight/2 + 165;
    if( s.mouseX > hx1 && s.mouseX < hx2 && s.mouseY > hy1 && s.mouseY < hy2 ) {
      return true;
    } else {
      return false;
    }
  };

  s.mouseClicked  = function() {
    if(s.mouseInsideArrow()){
      s.next();
    } else if(s.mouseInsideGenerate()){
      s.another();
    } else if(s.mouseInsideCalendar()) {
      s.share();
    } else if(s.mouseInsideHome()) {
      s.home();
    } else if(s.mouseInsidePrinciples()) {
      s.first();
    }
  };

  s.mouseMoved = function() {
    if(s.mouseInsideArrow()){
      s.cursor(s.HAND);
      arrowColor = '#FFFFFF';
    } else if(s.mouseInsideGenerate()){
      s.cursor(s.HAND);
      generateColor = '#731DD3';
    } else if(s.mouseInsideCalendar()) {
      s.cursor(s.HAND);
      calendarColor = '#731DD3';
    } else if(s.mouseInsideHome()) {
      homeColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else if(s.mouseInsidePrinciples()) {
      principlesColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else {
      s.cursor(s.ARROW);
      homeColor = '#E61DFF';
      principlesColor = '#E61DFF';
      generateColor = '#ffffff';
      calendarColor = '#ffffff';
      arrowColor = '#E61DFF';
    }
  };

  s.another = function() {
    challenge = collective_challenges[Math.floor(Math.random() * collective_challenges.length)];
  };

  s.share = function() {
    FB.ui({
      method: 'share',
      quote: `Mi reto es: ${challenge.name}`,
      hashtag: '#TOD_S',
      href: 'http://tod-s.co/'
    }, function(response){
     // Debug response (optional)
      console.log(response);
    });
  };

  s.next = function() {
    s.select('#p6_4').show();
    s.select('#p6_3').hide();
  };

  // s.done = function() {
  //   s.select('#p6_4').show();
  //   s.select('#p6_3').hide();
  // };

  s.home = function() {
    s.select('#home').show();
    s.select('#p6_3').hide();
  };

  s.first = function() {
    s.select('#p1_1').show();
    s.select('#p6_3').hide();
  };
}

var p6_3 = new p5(p6_3, 'p6_3');
