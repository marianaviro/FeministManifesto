var p7_2 = function(s) {

  var sendColor;
  var homeColor;
  var principlesColor;
  var arrowColor;
  var struggles;
  var currentWord;

  s.setup = function() {
    sendColor = '#FFFFFF';
    homeColor = '#217DF4';
    principlesColor = '#217DF4';
    arrowColor = '#217DF4';
    struggles = ['IGUALDAD DE GÉNERO', 'DERECHOS REPRODUCTIVOS DE LA MUJER', 'ACABAR CON EL ACOSO SEXUAL', 'DERECHOS FAMILIARES DE LOS PADRES'];
    currentWord = '';

    //Canvas
    s.createCanvas(s.displayWidth, s.displayHeight);
    s.background('#21F4F4');
    s.noStroke();
    s.textFont('Futura');
    s.fill(homeColor);
    s.textStyle(s.BOLD);
    s.textSize(12);
  };

  s.draw = function() {

    if(s.select('#p7_2').style('display') == 'block') {
      // console.log("Sixth Principle – Part 2");
      //Background
      s.background('#21F4F4');
      s.textAlign(s.LEFT);

      //Page number
      s.fill('#FFFFFF');
      s.textFont('Futura');
      s.textStyle(s.BOLD);
      s.textSize(16);
      s.text('7 / 7', 20, s.windowHeight - 20);

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
      s.fill('#217df4');
      s.textStyle(s.BOLD);
      s.textSize(70);
      s.text('EL FEMINISMO LUCHA POR:', s.windowWidth/2, s.windowHeight/5 + 70);

      //Text Field
      s.textAlign(s.LEFT);
      s.fill('#FFFFFF');
      s.rect(s.windowWidth/2 - 510, s.windowHeight/5 + 110, 1020, 80);
      s.textStyle(s.NORMAL);
      s.textSize(30);
      s.fill('#217df4');
      s.text(currentWord, s.windowWidth/2 - 490, s.windowHeight/5 + 160);

      //Button
      s.rect(s.windowWidth/2 + 360, s.windowHeight/5 + 125, 130, 50);
      s.fill(sendColor);
      s.textSize(24);
      s.text('ENVIAR', s.windowWidth/2 + 380, s.windowHeight/5 + 160);

      //Text Area
      s.fill('#217df4');
      s.rect(s.windowWidth/2 - 510, s.windowHeight/5 + 210, 1020, 300);
      s.fill('#FFFFFF');
      for(i = 0; i < struggles.length; i++ ) {
        s.text(struggles[i],s.windowWidth/2 - 490, s.windowHeight/5 + 240 + (40*i), 1000, 200)
      }

      //Struggles
      s.fill('#FFFFFF');

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

  s.mouseInsideSend = function() {
    s.rect(s.windowWidth/2 + 360, s.windowHeight/5 + 125, 130, 50);
    var hx1 = s.windowWidth/2 + 360;
    var hx2 = s.windowWidth/2 + 490;
    var hy1 = s.windowHeight/5 + 125;
    var hy2 = s.windowHeight/5 + 175;
    if( s.mouseX > hx1 && s.mouseX < hx2 && s.mouseY > hy1 && s.mouseY < hy2 ) {
      return true;
    } else {
      return false;
    }
  };

  s.mouseClicked  = function() {
    if(s.mouseInsideArrow()){
      s.next();
    } else if(s.mouseInsideSend()){
      s.send();
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
    } else if(s.mouseInsideSend()) {
      s.cursor(s.HAND);
      sendColor = '#2d69ee';
    } else if(s.mouseInsideHome()) {
      homeColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else if(s.mouseInsidePrinciples()) {
      principlesColor = '#FFFFFF';
      s.cursor(s.HAND);
    } else {
      s.cursor(s.ARROW);
      homeColor = '#217df4';
      principlesColor = '#217df4';
      sendColor = '#ffffff';
      arrowColor = '#217df4';
    }
  };

  s.keyTyped = function() {
    if(s.select('#p7_2').style('display') == 'block') {
      currentWord = currentWord + s.key;
    }
  }

  s.send = function() {
    s.append(struggles, currentWord);
    currentWord = '';
  };

  s.next = function() {
    s.select('#p7_3').show();
    s.select('#p7_2').hide();
  };

  s.home = function() {
    s.select('#home').show();
    s.select('#p7_2').hide();
  };

  s.first = function() {
    s.select('#p1_1').show();
    s.select('#p7_2').hide();
  };
}

var p7_2 = new p5(p7_2, 'p7_2');
