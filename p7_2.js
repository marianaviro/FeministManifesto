var p7_2 = function(s) {
  var userInput;
  var x;
  var showArrow;
  var abc;
  var causes;
  const url ='https://fights-feminism.herokuapp.com/fights';

  // colors


  // functions to post and get causes

  s.getCauses = function () {
    // Get the most recent earthquake in the database
    s.httpGet(url, 'json', false, function(response) {
      // when the HTTP request completes, populate the variable that holds the
      // causes data used
      causes = [];
      for (var i = response.length - 1; i >= 0; i--) {
        causes.push(response[i].text);
      }
    });
  };

  s.postCause = function () {
    let newCause = {text: userInput};
    s.httpPost(url, 'json', newCause, function(result) {
      console.log('cause saved in database');

    });
  };


  s.setup = function() {
    s.background(100);
    s.createCanvas(s.displayWidth, s.displayHeight);
    userInput = '';
    x = 0;
    abc = 'abcdefghijklmnopqrstuvwxyzABDEFGHJKLMNOPQRSTUVXYZ1234567890?*+=@#%&;:!$%^&*()}|';

    // brings causes from the service
    causes = [];
    s.getCauses();


  };

  s.draw = function() {

    //Background
    s.noStroke();
    s.background('#21F4F4');

    s.textFont('Futura');



    //Menu
    s.fill('#217BF4')
    s.textStyle(s.BOLD);
    s.textSize(12);
    s.text('i n i c i o', s.windowWidth/2 - 110, 30);
    s.rect(s.windowWidth/2 - 68, 35, 12, 6);
    s.text('p r i n c i p i o s', s.windowWidth/2, 30);
    s.rect(s.windowWidth/2 + 86, 35, 12, 6);

    s.textStyle(s.BOLD);
    s.textSize(60);

    // title
    titleX = s.windowWidth * 0.18;
    titleY = s.windowHeight * 0.22;
    s.fill('#217BF4')
    s.text('EL FEMINISMO LUCHA POR:', titleX, titleY);

    // textfield
    s.fill(255,255,255);
    textFieldX = titleX;
    textFieldY = titleY + 20;
    textFieldWidth = 900;
    textFieldHeight = 80;
    s.rect(textFieldX, textFieldY, textFieldWidth, textFieldHeight);

    // enviar button
    s.fill('#217BF4');
    enviarButtonX = titleX + 730;
    enviarButtonY = textFieldY + 10;
    enviarButtonWidth = 160;
    enviarButtonHeight = 60;
    s.rect(enviarButtonX, enviarButtonY, enviarButtonWidth, enviarButtonHeight);
    s.textSize(30);
    s.textStyle(s.NORMAL);
    s.fill(255,255,255);
    enviarButtonTextX = enviarButtonX + 22;
    enviarButtonTextY = enviarButtonY + 40;
    s.text('ENVIAR', enviarButtonTextX, enviarButtonTextY);

    // causes box
    s.fill('#217BF4');
    causesBoxX = titleX;
    causesBoxY = textFieldY + textFieldHeight + 10;
    causesBoxWidth = 900;
    causesBoxHeight = s.windowHeight;
    s.rect(causesBoxX,causesBoxY, causesBoxWidth, causesBoxHeight)

    // user input text
    s.fill('#217BF4');
    if(userInput != '') {
      s.textSize(50); // check if this size looks good
      userInputX = textFieldX + 5;
      userInputY =  textFieldY + 60;
      s.text(userInput, userInputX, userInputY);
    } else {
      // show ticking vertical bar
      userInputBarX = textFieldX + 5;
      userInputBarY =  textFieldY + 7;
      userInputBarHeight = textFieldHeight - 15;
      s.rect(userInputBarX, userInputBarY, 3, userInputBarHeight);

    }
    s.fill(255);
    s.textAlign(s.LEFT);

    //Arrow
    if(showArrow) {
      var mx = s.windowWidth/2 - 10;
      var my = s.windowHeight - 60;

      if(false) {
        s.cursor(s.HAND);
        s.fill('#FFFFFF');
      } else {
        s.cursor(s.ARROW);
        s.fill('#21F4F4');
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
    }

    s.getCauses();
    s.writeCausesInCausesBox();
  };

  s.keyTyped = function() {
    console.log('keyTyped: '+ s.key);
    console.log('keyCode: '+ s.keyCode);

    s.frameRate(60);

    if(s.select('#fifth').style('display') == 'block') {
      if (s.keyCode === s.BACKSPACE) {
          // removes the last letter that was typed
          userInput = userInput.slice(0, -1);

      }
      else if (s.keyCode === s.RETURN) {
          // presses the button
      }
      else if (abc.includes(s.key)){
        userInput = userInput + s.key;
      } else{

      }

    }

  };

  s.mouseClicked  = function() {
    s.mouseInsideEnviarButton();
  };

  s.mouseInsideEnviarButton = function() {
    if (s.mouseX > enviarButtonX && s.mouseX <= enviarButtonX + enviarButtonWidth){
      if(s.mouseY > enviarButtonY && s.mouseY <= enviarButtonY + enviarButtonHeight){
        // sends string to the backend service
        s.postCause();

        userInput = '';
        if(!showArrow) {
          showArrow = true;
        }

      }
    }
  };

  s.writeCausesInCausesBox = function(){
    let topPadding = 50;
    let paddingBetween = 8;
    let causeX = causesBoxX + 40;
    let startY = causesBoxY + topPadding;
    s.textSize(35);
    s.fill(255,255,255);
    for (var i = 0; i < causes.length; i++) {
      causeY = startY + i * 40 + i*paddingBetween;
      s.text(causes[i], causeX, causeY);
    }

  };

  s.down = function() {
    s.select('#p7_3').show();
    s.select('#p7_2').hide();
  };

}

var p7_2 = new p5(p7_2, 'p7_2');
