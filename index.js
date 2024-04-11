const burger = document.getElementById("burger");
const ronaldspaceleft = document.getElementById("ronaldleft")
const ronaldspaceright = document.getElementById("ronaldright")
const number = document.getElementById("number");
const shopspace = document.getElementById("shopspace");
const shopmultiplier = document.getElementById("shopmultiplier");
const shopauto = document.getElementById("shopauto");
const bps = document.getElementById("bps")

let autoronalds = 0;
let autoronaldvalue = 0;
let burgerstate = 0;
let value = 0;
let clickmultiplier = 1;
let spacebarmode = 1;
let cost = 100;
let cost2 = 300;
let einheit = " B";
let displaynumber = value;

  


burgereinheit();

//draw ronalds


/*
window.onload = function() {
    let context1 = document.getElementById("ronaldleft").getContext("2d");
    let context2 = document.getElementById("ronaldright").getContext("2d");
    
    // Clear the canvas to ensure transparency
    function clearCanvas(context) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    }

    // Function to draw rectangle with image
    function drawImageRect(context, x, y, width, height, imageURL) {
        // Clear the canvas to ensure transparency
        clearCanvas(context);

        // Load the image
        let img = new Image();
        img.src = imageURL;
        
        // Draw the image when it's loaded
        img.onload = function() {
            context.drawImage(img, x, y, width, height);
        };
    }
    
    // Draw rectangles with images

    drawImageRect(context1, 100, 0, 200, 40, "./burgers/ronny1-mirror.png");
    drawImageRect(context1, 70, 50, 200, 40, "./burgers/ronny1-mirror.png");
    drawImageRect(context1, 100, 100, 200, 40, "./burgers/ronny1-mirror.png");
    
    drawImageRect(context2, 0, 0, 200, 40, "./burgers/ronny1.png");
    drawImageRect(context2, 30, 50, 200, 40, "./burgers/ronny1.png");
    drawImageRect(context2, 0, 100, 200, 40, "./burgers/ronny1.png");
};
*/


//das burger meter
function bpsmeter() {
  let bps1 = displaynumber;
  setTimeout(function () {
    let bps2 = displaynumber;
    bps.innerHTML = (bps2-bps1).toFixed(1) + " " + einheit + "/s"
  }, 1000);
}

function burgereinheit() {
  //convert value 
  if(value > 1000000000000000000000000000000000) {
    einheit = ""
    displaynumber = "Fat Fuck";
    setValue();
  } else if(value > 1000000000000000000000000000000) {
    einheit = " QB"
    displaynumber = (value / 1000000000000000000000000000000).toFixed(1);
    setValue();
  } else if (value > 1000000000000000000000000000) {
    einheit = " RB"
    displaynumber = (value / 1000000000000000000000000000).toFixed(1);
    setValue();
  } else if (value > 1000000000000000000000000) {
    einheit = " YB"
    displaynumber = (value / 1000000000000000000000000).toFixed(1);
    setValue();
  } else if (value > 1000000000000000000000) {
    einheit = " ZB"
    displaynumber = (value / 1000000000000000000000).toFixed(1);
    setValue();
  } else if (value > 1000000000000000000) {
    einheit = " EB"
    displaynumber = (value / 1000000000000000000).toFixed(1);
    setValue();
  } else if (value > 1000000000000000) {
    einheit = " PB";
    displaynumber = (value / 1000000000000000).toFixed(1);
    setValue();
  } else if (value > 1000000000000) {
    einheit = " TB";
    displaynumber = (value / 1000000000000).toFixed(1);
    setValue();
  } else if (value > 1000000000) {
    einheit = " GB";
    displaynumber = (value / 1000000000).toFixed(1);
    setValue();
  } else if (value > 1000000) {
    einheit = " MB";
    displaynumber = (value / 1000000).toFixed(1);
    setValue();
  } else if (value > 1000) {
    einheit = " kB";
    displaynumber = (value / 1000).toFixed(1);
    setValue();
  } else if (value < 1000) {
    einheit = " B";
    displaynumber = (value).toFixed(1);
    setValue();
  }
}

function setValue() {
  number.innerHTML = displaynumber + einheit;
  bpsmeter(displaynumber)
}

//burgercycle
burger.addEventListener("click", () => {
  burgercycle()
});

function burgercycle() {
  if (burgerstate == 0) {
    burger.style.backgroundImage = "url(./burgers/burger1.png)"; //bite 1
    burgerstate = 1;
  } else if (burgerstate == 1) {
    burger.style.backgroundImage = "url(./burgers/burger2.png)"; //bite 2
    burgerstate = 2;
  } else if (burgerstate == 2) {
    burger.style.backgroundImage = "url(./burgers/burger3.png)"; //bite 3
    burgerstate = 3;
  } else {
    burger.style.backgroundImage = "url(./burgers/burger0.png)"; //default
    burgerstate = 0;
  }
}

//buttoncycle
shopspace.addEventListener("click", () => {
  shopspace.style.backgroundImage = "url(./burgers/button1.png)";
  shopspace.style.color = "#ffdc73";
  setTimeout(function () {
    shopspace.style.backgroundImage = "url(./burgers/button0.png)";
    shopspace.style.color = "black";
  }, 150);
});
shopmultiplier.addEventListener("click", () => {
  shopmultiplier.style.backgroundImage = "url(./burgers/button1.png)";
  shopmultiplier.style.color = "#ffdc73";
  setTimeout(function () {
    shopmultiplier.style.backgroundImage = "url(./burgers/button0.png)";
    shopmultiplier.style.color = "black";
  }, 150);
});
shopauto.addEventListener("click", () => {
  shopauto.style.backgroundImage = "url(./burgers/button1.png)";
  shopauto.style.color = "#ffdc73";
  setTimeout(function () {
    shopauto.style.backgroundImage = "url(./burgers/button0.png)";
    shopauto.style.color = "black";
  }, 150);
});

//click the burger
burger.addEventListener("click", () => {
  burger.style.transform = "scale(1.1)";
  setTimeout(function () {
    burger.style.transform = "scale(1)"; // Reset size after a duration
  }, 100);
});

//get burgers
//onclick
burger.addEventListener("click", () => {
  value = value + clickmultiplier;
  burgereinheit();
});
//spacebarmode
document.addEventListener("keydown", (event) => {
  if (spacebarmode == 1) {
    if (event.code == "Space") {
      value = value + clickmultiplier;
      burgereinheit();
      burgercycle()
    }
  }
});
//autoronalds
function fautoronalds() {
  if (autoronalds > 0) {
    window.setInterval(function () {
      value = value + autoronaldvalue;
      burgereinheit();
    }, 100);
  }
}

//shop
shopspace.addEventListener("click", () => {
  if (value > 999999) {
    spacebarmode = 1;
    value = value - 10;
    burgereinheit();
  }
});
shopmultiplier.innerHTML = "Click Multiplier  " + cost + " Burger";
shopmultiplier.addEventListener("click", () => {
  if (value >= cost) {
    clickmultiplier = clickmultiplier * 2;
    value = value - cost;
    cost = cost * 1.5;
    shopmultiplier.innerHTML = "Click Multiplier  " + (cost).toFixed(0) + " Burger";
    burgereinheit();
  }
});
shopauto.addEventListener("click", () => {
  if (value > cost2) {

    if(autoronaldvalue == 0) {
      autoronaldvalue = 1
    } else {
      autoronaldvalue = autoronaldvalue * 1.25
    }
    autoronalds = autoronalds + 1;
    value = value - cost2;
    cost2 = cost2 * 1.25;
    shopauto.innerHTML = "Auto Burgerererer " + (cost2).toFixed(0) + " Burger";
    burgereinheit();
    fautoronalds();
  }
});
