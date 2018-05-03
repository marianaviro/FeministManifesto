var firstPrinciple = function(s) {

  var x;
  var y;
  var easing;
  var bck;


  s.setup = function() {
    x = 0;
    y = 0;
    easing = 0.05;
    bck = '#04E973';
    arrow =

    //Canvas
    s.createCanvas(s.displayWidth, s.displayHeight);
    s.background('#DAFF7D');
  };

  s.draw = function() {

    //Background
    s.background(bck);
    // s.background('#DAFF7D');

    //Rectangle
    s.fill('#04E973');
    // s.fill('#DAFF7D');
    s.stroke('#DAFF7D');
    // s.stroke(255);
    s.strokeWeight(20);
    s.rect(s.windowWidth/2 - 110, s.windowHeight/2 - 160, 210, 300);

    //Principle
    s.noStroke();
    s.textFont('Futura');
    s.fill(255);
    // s.fill('#04E973');
    s.textStyle(s.NORMAL);
    s.textSize(35);
    s.text('EL', s.windowWidth/2 -20, s.windowHeight/2 - 100);
    s.textStyle(s.BOLD);
    s.textSize(58);
    s.text('FEMINISMO', s.windowWidth/2 - 180, s.windowHeight/2 -35);
    s.textStyle(s.NORMAL);
    s.textSize(30);
    s.text('LE DA LA BIENVENIDA AL', s.windowWidth/2 - 180, s.windowHeight/2 + 12);
    s.textStyle(s.BOLD);
    s.textSize(48.5);
    s.text('ESCEPTICISMO', s.windowWidth/2 - 180, s.windowHeight/2 + 75);

    //Arrow
    var targetX = s.mouseX;
    var dx = targetX - x;
    x += dx * easing;
    var targetY = s.mouseY;
    var dy = targetY - y;
    y += dy * easing;
    s.arrow(s.windowWidth - x, s.windowHeight - y);

  };

  s.arrow = function(mx, my) {
    s.noStroke();
    s.fill('#DAFF7D');
    // s.fill('#04E973');
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

  s.down = function() {
    s.select('#second').show();
    s.select('#first').hide();
  }

  s.mouseClicked  = function() {
    var mx = s.windowWidth - x;
    var my = s.windowHeight - y;

    //Check if the mouse is inside the arrow's rectangle
    var dx = s.mouseX - mx;
    var dy = s.mouseY - my;
    if(0 < dx && dx < 20 && 0 < dy && dy < 20) {
      s.down();
    } else {
      //Check if the mouse is inside the arrow's left triangle
      var lx = Math.abs(s.mouseX - mx + 10);
      var ly = Math.abs(s.mouseY - my - 20);
      if(lx < 20 && ly < 20 && lx > ly) {
        console.log('entro izq');
        s.down();
      } else {
        //Check if the mouse is inside the arrow's right triangle
        var rx = 20 - Math.abs(s.mouseX - mx - 10);
        var ry = Math.abs(s.mouseY - my - 20);
        if(rx < 20 && ry < 20 && rx > ry) {
          console.log('entro der');
          s.down();
        }
      }
    }
  }
}

var one = new p5(firstPrinciple, 'one');
