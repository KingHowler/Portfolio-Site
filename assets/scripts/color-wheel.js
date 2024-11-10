let hue = 300;
let saturation = 100; // Full saturation for vivid colors
let lightness = 80; // Moderate lightness for balanced brightness
let pulseSign = 1;
let pulseMag = 1;

function changeBackgroundColor() {
  // Set the body's background color using the HSL color model
  document.body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  document.getElementById("mainPage").style.backgroundColor = `hsl(0, 100, 100)`;
  colorWheelItems = document.getElementsByClassName("colorWheel");
  LBcolorWheelItems = document.getElementsByClassName("lbcolorWheel");
  
  for(let i = 0; i < colorWheelItems.length; i++){
    colorWheelItems[i].style.color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  for(let i = 0; i < LBcolorWheelItems.length; i++){
    LBcolorWheelItems[i].style.borderLeft = `2px solid hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  // Increment the hue for the next color; reset to 0 after reaching 360
  if (hue == 240 || hue == 360) {
    pulseSign = -pulseSign;
  }
  if (hue > 250 && hue < 350) {
    pulseMag = 10;
  }
  else {
    pulseMag = 1;
  }
  hue = hue + pulseSign*pulseMag;
}

// Set an interval to call changeBackgroundColor every 20 milliseconds
setInterval(changeBackgroundColor, 100);