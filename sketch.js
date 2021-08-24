var slide = 0;

var toggle = false;
var passToggle = false;

var col1, col2;
var inp;

var passcode;
var array = ["human species", "unknown", "power of my mind", "dangers of my soul", "power of my heart", "complexities of my thoughts"];

var outroText;
var variable;

function preload(){
  outroText = loadStrings("outro.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("mrs-eaves");
  textSize(20);
  noCursor();

  col1 = int(random(150, 225));
  col2 = int(random(150, 225));

  inp = createInput("");
  passcode = array[int(random(0, array.length))];
  variable = height/2;
//console.log(y);

  //console.log(outroText, "<br>");
//  console.log(outroText.length);
}

function draw() {
  // INSTRUCTION SCREEN
  if (slide == 0) {
    background(255);
    inp.hide();

    fill(0);
    textStyle(ITALIC);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("open console", width / 2, height / 2 - 50);
    text("mac: command + option + j*", width / 2, height / 2);
    text("windows: control + shift + j*", width / 2, height / 2 + 25);
    text("*for firefox users press 'k' instead of 'j'", width / 2, height / 2 + 75);

    textSize(14);
    fill(150);
    textAlign(LEFT, CENTER);
    text("function setup() {", 25, 25);

    // INSTRUCTIONS TO PROCEED IN CONSOLE
    if (keyIsPressed == true) {
      if (keyCode == 74 || keyCode == 75) {
        console.log("hello! click the screen to proceed");
      }
    }

    // CURSOR
    fill(150, 150);
    noStroke();
    ellipse(mouseX, mouseY, 10, 10);

    // NAV ARROW
    fill(150);
    if (dist(mouseX, mouseY, width - 50, height - 50) < 50) {
      textStyle(BOLD);
      textSize(20);
    } else {
      textStyle(NORMAL)
      textSize(14);
    }
    text(">", width - 50, height - 50);
  }

  // FIRST PAGE
  else if (slide == 1) {
    background(0);
    inp.hide();

    // SPOTLIGHT CURSOR
    for (var i = 10; i > 5; i -= 0.2) {
      if (dist(mouseX, mouseY, width / 2 - 190, height / 2 - 125) < 100) {
        fill(col1, col2, 255, 10 + i * 3);
      } else {
        fill(255, 10 + i * 3);
      }
      noStroke();
      ellipse(mouseX, mouseY, i * 20, i * 20);
    }
    //  fill(255, 0, 0);
    // ellipse(width / 2 - 190, height / 2 - 125, 200, 200);

    // TEXT
    fill(0);
    textSize(20);
    textStyle(NORMAL);

    textAlign(LEFT, CENTER);
    text("it matters not", width / 2 - 250, height / 2 - 150);
    text("what color", width / 2 - 250, height / 2 - 125);
    text("is in the light", width / 2 - 50, height / 2);
    text("that pierces the darkness", width / 2 - 50, height / 2 + 25);
    text("out of me.", width / 2 - 50, height / 2 + 150);

    // DECORATIVE
    textSize(14);
    fill(150);
    textStyle(ITALIC);
    text("if (screen == 1) {", 25, 25);

    // NAV ARROWS
    fill(150);
    if (dist(mouseX, mouseY, width - 50, height - 50) < 50) {
      textStyle(BOLD);
      textSize(20);
    } else {
      textStyle(NORMAL)
      textSize(14);
    }
    text(">", width - 50, height - 50);

    if (dist(mouseX, mouseY, 50, height - 50) < 50) {
      textStyle(BOLD);
      textSize(20);
    } else {
      textStyle(NORMAL)
      textSize(14);
    }
    text("<", 50, height - 50);
  }

  // SECOND PAGE
  else if (slide == 2) {
    background(0);
    inp.hide();

    // LOG ALL CO-ORDS
    if (mouseX % 5 == 0 && mouseY % 5 == 0) console.log("XYZ: " + mouseX + ", " + mouseY + ", 255");

    // LOG MATCH
    if (toggle == true && dist(mouseX, mouseY, col1, col2) < 10) {
      console.log("**XYZ: " + col1 + ", " + col2 + ", 255**");
      strokeWeight(1);
      //console.log("match!");
    } else {
      strokeWeight(0.5);
    }

    // CROSS HAIRS

    stroke(col1, col2, 255);
    line(mouseX, 0, mouseX, height);
    line(0, mouseY, width, mouseY);


    // TEXT
    fill(255);
    textSize(20);
    textStyle(NORMAL);
    noStroke();
    text("it matters not", col1, col2);
    text("how many pixels", col1, col2 + 25);
    text("it takes to", col1 + 50, col2 + 75);
    text("tell the dark.", col1 + 50, col2 + 100);

    // DECORATIVE
    textSize(14);
    fill(150);
    textStyle(ITALIC);
    text("if (screen == 2) {", 25, 25);

    // NAV ARROWS
    fill(150);
    if (dist(mouseX, mouseY, width - 50, height - 50) < 50) {
      textStyle(BOLD);
      textSize(20);
    } else {
      textStyle(NORMAL)
      textSize(14);
    }
    text(">", width - 50, height - 50);

    if (dist(mouseX, mouseY, 50, height - 50) < 50) {
      textStyle(BOLD);
      textSize(20);
    } else {
      textStyle(NORMAL)
      textSize(14);
    }
    text("<", 50, height - 50);
  }

  // SCREEN THREE
  else if (slide == 3) {
    background(0);

    // INPUT BOX
    inp.show();
    inp.position(width / 2 + 220, height / 2 + 231);
    inp.size(225, 35);

    // SPOTLIGHT CURSOR
    for (var i = 10; i > 5; i -= 0.2) {
      fill(255, 10 + i * 3);
      noStroke();
      ellipse(mouseX, mouseY, i * 20, i * 20);
    }

    // BACKGROUND TEXT
    for (var i = 0; i < 200; i++) {
      var x = random(1, 255);
      var y = random(1, 255);
      fill(0);
      textSize(14);
      textStyle(ITALIC);
      textAlign(LEFT, CENTER);
      text(x * y, random(-100, width), random(height));
    }

    // PASSWORD CHECK
    if (keyIsPressed == true) {
      if (keyCode == 13) {
        if (inp.value() != passcode) {
          console.log("incorrect key");
        } else {
          slide++;
        }
      }
    }

    fill(0);
    rect(width / 2 + 140, height / 2 + 231.5, 130, 35, 15);

    // TEXT
    fill(255);
    textSize(20);
    textStyle(NORMAL);
    text("i am a mind—", width / 2 + 100, height / 2 + 25);
    text("a multiverse", width / 2 + 150, height / 2 + 75);
    text("of my most", width / 2 + 150, height / 2 + 150);
    text("disordered products.", width / 2 + 150, height / 2 + 175);
    text("i am the", width / 2 + 150, height / 2 + 250);


    // DECORATIVE
    textSize(14);
    fill(150);
    textStyle(ITALIC);
    text("if (screen == 3) {", 25, 25);

    // NAV
    fill(150);

    if (dist(mouseX, mouseY, 50, height - 50) < 50) {
      textStyle(BOLD);
      textSize(20);
    } else {
      textStyle(NORMAL)
      textSize(14);
    }
    text("<", 50, height - 50);



  } else if (slide == 4) {
    background(255);
    inp.hide();

    textAlign(LEFT, CENTER);
    textSize(16);
    textStyle(ITALIC);
    fill(150);


    for(var i = 0; i < outroText.length; i ++){
      text(outroText[i], width/2 - 200 , variable + i*25);

    }
  variable -= 0.5;
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  // INTRUCTION SCREEN
  if (slide == 0) {
    slide++;
  }

  // SCREEN ONE
  else if (slide == 1) {
    // CLICKED ON COLOUR CIRCLE
    if (dist(mouseX, mouseY, width / 2 - 190, height / 2 - 125) < 100) {
      console.log("**RGB: " + col1 + ", " + col2 + ", 255**");
      toggle = true;
    }
    if (dist(mouseX, mouseY, width - 50, height - 50) < 50) slide++;
    if (dist(mouseX, mouseY, 50, height - 50) < 50) slide--;

  } else if (slide == 2) {
    // CLICKED AT COORDS
    if (toggle == true && dist(mouseX, mouseY, col1, col2) < 10) {
      console.log("key: i am the " + passcode);
    }

    if (dist(mouseX, mouseY, width - 50, height - 50) < 50) slide++;
    if (dist(mouseX, mouseY, 50, height - 50) < 50) slide--;



  } else if (slide == 3) {

    if (dist(mouseX, mouseY, 50, height - 50) < 50) slide--;


  }
  //slide++;

}
