var fifteenthPrinciple = function(s) {

  var color;
  var privadoColor;
  var colectivoColor;
  var rectangleColor;
  var yellowColor;
  var showArrow;
  var count;

  s.setup = function() {
    s.background('#FF83FF');
    s.createCanvas(s.displayWidth, s.displayHeight);
    privadoColor = '#E61DFF';
    colectivoColor = '#FF43FF';
    rectangleColor = '#FF8385';
    yellowColor = '#FFFF85';
    color = 0;
    count = 0;
    s.cursor(s.ARROW);
    showArrow = true;
  };

  s.draw = function() {

    s.noStroke();
    //Background
    s.background('#FF83FF');
    s.textAlign(s.LEFT);
    //Menu
    s.fill(yellowColor);
    s.textStyle(s.BOLD);
    s.textSize(12);
    s.text('i n i c i o', s.windowWidth/2 - 110, 30);
    s.rect(s.windowWidth/2 - 68, 35, 12, 6);
    s.text('p r i n c i p i o s', s.windowWidth/2, 30);
    s.rect(s.windowWidth/2 + 86, 35, 12, 6);

    //Rectangle
    s.fill(rectangleColor);

    let rectangleX = s.windowWidth * 0.41;
    let rectangleY = s.windowHeight * 0.28;
    let rectangleWidth = 250;
    let rectangleHeight = 380;
    //s.stroke(s.lerpColor(s.color('#FF83FF'), s.color('#731DD3'), 1));
    s.rect(rectangleX,rectangleY , rectangleWidth, rectangleHeight);

    //Principle
    s.textFont('Futura');
    s.textAlign(s.CENTER);

    let principleX = rectangleX + rectangleWidth /2;
    let principleY = rectangleY - 9;
    s.textSize(13);
    
    s.text('P R I N C I P I O   # 4', principleX, principleY);

    s.textAlign(s.LEFT);
    s.fill('#FFFFFF');
    s.textStyle(s.BOLD);
    s.textSize(41);
    let text1X = rectangleX - 40;
    let text1Y = rectangleY + 100;
    s.text('EL  FEMINISMO', text1X, text1Y);
    s.textStyle(s.NORMAL);
    s.textSize(36.5);
    let text2X = text1X;
    let text2Y = text1Y + 50;
    s.text('COMPRENDE CON', text2X, text2Y);
    s.textStyle(s.BOLD);
    s.textSize(45);
    s.fill(yellowColor);
    let text3X = text2X;
    let text3Y = text2Y + 50;
    s.text('SENSIBILIDAD', text3X, text3Y);
    s.textStyle(s.NORMAL);
    s.textSize(47.7);
    s.fill(255);
    let text4X = text3X;
    let text4Y = text3Y + 54;
    s.text('Y ACTÚA CON', text4X, text4Y);
    s.textStyle(s.BOLD);
    s.textSize(40);
    s.fill(yellowColor);
    let text5X = text4X;
    let text5Y = text4Y + 50;
    s.text('RACIONALIDAD', text5X, text5Y);
    
    //Arrow
    if(showArrow) {
      s.fill(yellowColor);
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

    //Color
    count++;
    s.setColor();
  };

  s.mouseClicked  = function() {
    if(s.mouseInsideArrow()) {
      s.down();
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

  s.down = function() {
    s.select('#sixteenth').show();
    s.select('#fifteenth').hide();
  };

}

var fifteenth = new p5(fifteenthPrinciple, 'fifteenth');
