var fourthPrinciple = function(s) {

  var color;
  var privadoColor;
  var colectivoColor;
  var showArrow;
  var count;

  s.setup = function() {
    s.background('#FF83FF');
    s.createCanvas(s.displayWidth, s.displayHeight);
    privadoColor = '#E61DFF';
    colectivoColor = '#FF43FF';
    color = 0;
    count = 0;
    s.cursor(s.ARROW);
  };

  s.draw = function() {

    //Background
    s.background('#FF83FF');

    //Rectangle
    s.fill('#FF83FF');
    s.stroke(s.lerpColor(s.color('#FF83FF'), s.color('#731DD3'), 1));
    s.strokeWeight(20);
    s.rect(s.windowWidth/2 - 110, s.windowHeight/2 - 160, 210, 300);

    //Principle
    s.noStroke();
    s.textFont('Futura');
    s.fill('#FFFFFF');
    s.textStyle(s.NORMAL);
    s.textSize(41);
    s.text('EL FEMINISMO ES', s.windowWidth/2 - 180, s.windowHeight/2 - 100);
    s.textStyle(s.BOLD);
    s.textSize(60);
    s.fill('#FFFFFF');
    if(s.mouseInsideColectivo()) {
      s.fill('#217DF4');
    } else {
      s.fill(colectivoColor);
    }
    s.text('COLECTIVO', s.windowWidth/2 - 180, s.windowHeight/2 - 30);
    s.textStyle(s.NORMAL);
    s.textSize(52);
    s.fill('#FFFFFF');
    s.text('Y TAMBIÉN ES', s.windowWidth/2 - 180, s.windowHeight/2 + 35);
    s.textStyle(s.BOLD);
    s.textSize(72);
    if(s.mouseInsidePrivado()) {
      s.fill('#217DF4');
    } else {
      s.fill(privadoColor);
    }
    s.text('PRIVADO', s.windowWidth/2 - 183, s.windowHeight/2 + 110);

    if(s.mouseInsidePrivado() || s.mouseInsideColectivo()) {
      s.cursor(s.HAND);
    } else {
      s.cursor(s.ARROW);
    }

    //Arrow
    if(showArrow) {
      var mx = s.windowWidth/2 - 10;
      var my = s.windowHeight - 60;
      if(s.mouseInsideArrow()) {
        s.cursor(s.HAND);
        s.fill(255);
      } else {
        s.fill('#E61DFF');
      }
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

      //Text
      s.fill('#731DD3');
      s.textSize(21.5);
      s.textStyle(s.NORMAL);
      s.text('¿ Q U I E R E S   O T R O   R E T O ?', s.windowWidth/2 - 180, s.windowHeight/8 - 20);
      s.textSize(20.5);
      s.textStyle(s.BOLD);
      s.text('H A Z   C L I C K   D E   N U E V O', s.windowWidth/2 - 180, s.windowHeight/8 + 10);
    }

    //Color
    count++;
    s.setColor();
  };

  s.mouseClicked  = function() {
    if(s.mouseInsideArrow()) {
      s.down();
    } else if(s.mouseInsidePrivado()){
      showArrow = true;
      s.go();
    } else if(s.mouseInsideColectivo()) {
      showArrow = true;
      s.share();
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

  s.go = function() {
    var project = projects[Math.floor(Math.random() * projects.length)];
    window.open(project.url);
  };

  s.share = function() {
    FB.ui({
      method: 'share',
      quote: 'Mi reto es: ',
      hashtag: '#TOD_S',
      href: 'https://developers.facebook.com/docs/'
    }, function(response){
     // Debug response (optional)
     console.log(response);
      });
  };

  s.setColor = function() {
    if(count == 30) {
      if(color % 2 == 0) {
        privadoColor = '#FF43FF';
        colectivoColor = '#E61DFF';
        color++;
        count = 0;
      } else {
        privadoColor = '#E61DFF';
        colectivoColor = '#FF43FF';
        color++;
        count = 0;
      }
    }
  };

  s.down = function() {
    s.select('#fifth').show();
    s.select('#fourth').hide();
  };

}

var four = new p5(fourthPrinciple, 'fourth');
