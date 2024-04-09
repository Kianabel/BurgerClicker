const burger = document.getElementById("burger")
const number = document.getElementById("number")
const shopspace = document.getElementById("shopspace")
const shopmultiplier = document.getElementById("shopmultiplier")
let burgerstate = 0
let value = 0
let clickmultiplier = 1
let spacebarmode = 1
let cost = 100
let einheit = " B"
let displaynumber = value

setValue()

function burgereinheit() { //convert value 

if(value >= 1000000000000000) {
    einheit = " PB"
    displaynumber = (value/1000000000000000).toFixed(1);
} else if (value >= 1000000000000) {
    einheit = " TB"
    displaynumber = (value/1000000000000).toFixed(1);
} else if (value >= 1000000000) {
    einheit = " GB"
    displaynumber = (value/1000000000).toFixed(1);
} else if (value >= 1000000) {
    einheit = " MB"
    displaynumber = (value/1000000).toFixed(1);
} else if(value >= 1000) {
    einheit = " kB"
    displaynumber = (value/1000).toFixed(1);
    setValue()
} else if (value < 1000) {
    einheit = " B"
    displaynumber = value
    setValue()
}
}

function setValue() {
    number.innerHTML = displaynumber + einheit
}

//burgercycle
burger.addEventListener("click", () => {
    if(burgerstate == 0) {
        burger.style.backgroundImage = "url(./burgers/burger1.png)" //bite 1
        burgerstate = 1
    } else if(burgerstate == 1) {
        burger.style.backgroundImage = "url(./burgers/burger2.png)" //bite 2
        burgerstate = 2
    } else if(burgerstate == 2) {
        burger.style.backgroundImage = "url(./burgers/burger3.png)" //bite 3
        burgerstate = 3
    } else {
        burger.style.backgroundImage = "url(./burgers/burger0.png)" //default
        burgerstate = 0
    }
})

//buttoncycle
shopspace.addEventListener("click", () => {
    shopspace.style.backgroundImage = "url(./burgers/button1.png)"
    shopspace.style.color = "#ffdc73"
    setTimeout(function() {
        shopspace.style.backgroundImage = "url(./burgers/button0.png)"
        shopspace.style.color = "black"
      }, 300);
})
shopmultiplier.addEventListener("click", () => {
    shopmultiplier.style.backgroundImage = "url(./burgers/button1.png)"
    shopmultiplier.style.color = "#ffdc73"
    setTimeout(function() {
        shopmultiplier.style.backgroundImage = "url(./burgers/button0.png)"
        shopmultiplier.style.color = "black"
      }, 300);
})
shopspace.addEventListener("click", () => {
    shopspace.style.backgroundImage = "url(./burgers/button1.png)"
    setTimeout(function() {
        shopspace.style.backgroundImage = "url(./burgers/button0.png)"
      }, 300);
})

//click the burger
burger.addEventListener("click", () => {
    burger.style.transform = "scale(1.1)"
    setTimeout(function() {
        burger.style.transform = "scale(1)"; // Reset size after a duration
      }, 100);
})



//get burgers
//onclick
burger.addEventListener("click", () => {
    value = value + clickmultiplier
    setValue()
    burgereinheit()
})
//spacebarmode
document.addEventListener("keydown", (event) => {
    if(spacebarmode == 1) {
    if (event.code == "Space") {
        value = value + clickmultiplier
        setValue()
        burgereinheit()
    }
}});

//shop
shopspace.addEventListener("click", () => {
    if(value > 999) {
        spacebarmode = 1;
        value = value - 10
        setValue()
        burgereinheit()
    }   
})
shopmultiplier.innerHTML = "Click Multiplier - "+ cost +" Burger"
shopmultiplier.addEventListener("click", () => {
    if(value >= cost) {
        clickmultiplier = clickmultiplier  * 2
        value = value - cost
        cost = cost * 3
        setValue()
        shopmultiplier.innerHTML = "Click Multiplier - "+ cost +" Burger"
        burgereinheit()

    }
})  