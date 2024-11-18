let hue = 250;
let saturation = 100; // Full saturation for vivid colors
let lightness = 70; // Moderate lightness for balanced brightness
let pulseSign = 1;
let pulseMag = 1;

function changeBackgroundColor() {
  // Set the body's background color using the HSL color model
  document.body.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  document.getElementById("mainPage").style.backgroundColor = `hsl(0, 100, 100)`;
  colorWheelItems = document.getElementsByClassName("colorWheel");
  LBcolorWheelItems = document.getElementsByClassName("lbcolorWheel");
  RBcolorWheelItems = document.getElementsByClassName("rbcolorWheel");
  TBcolorWheelItems = document.getElementsByClassName("tbcolorWheel");
  BBcolorWheelItems = document.getElementsByClassName("bbcolorWheel");
  BcolorWheelItems = document.getElementsByClassName("bcolorWheel");
  
  for(let i = 0; i < colorWheelItems.length; i++){
    colorWheelItems[i].style.color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  for(let i = 0; i < LBcolorWheelItems.length; i++){
    LBcolorWheelItems[i].style.borderLeft = `2px solid hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  for(let i = 0; i < RBcolorWheelItems.length; i++){
    RBcolorWheelItems[i].style.borderRight = `2px solid hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  for(let i = 0; i < TBcolorWheelItems.length; i++){
    TBcolorWheelItems[i].style.borderTop = `2px solid hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  for(let i = 0; i < BBcolorWheelItems.length; i++){
    BBcolorWheelItems[i].style.borderBottom = `2px solid hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  for(let i = 0; i < BcolorWheelItems.length; i++){
    BcolorWheelItems[i].style.border = `2px solid hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  // Increment the hue for the next color; reset to 0 after reaching 360
  if (hue == 240 || hue == 360) {
    pulseSign = -pulseSign;
  }
  hue = hue + pulseSign*pulseMag;
}

// Set an interval to call changeBackgroundColor every 20 milliseconds
setInterval(changeBackgroundColor, 50);