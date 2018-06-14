var colors = [];
var picked;
var numsq=6;
var h1 = document.querySelector("h1");
var boxes = document.querySelectorAll(".square");
var msg = document.querySelector("#msg");
var colordisp = document.querySelector("#colordisplay");
var resetbtn = document.querySelector("#reset");
var buttons = document.querySelectorAll(".mode");


init();

function init(){
    setmode();
    setsquares();
    setbtns();
}

function setmode(){
    for(var i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click",function(){
            buttons[0].classList.remove("active");
            buttons[1].classList.remove("active");
            this.classList.add("active");
            if(this.textContent==="Easy"){
                numsq=3;
            }else {
                numsq=6;
            }
            setbtns();
        });
    }
}

function setsquares(){
    for(var i=0;i<boxes.length;i++){
        boxes[i].addEventListener("click", function(){
            var c = this.style.backgroundColor;
            if(c !== picked){
                this.style.backgroundColor="#232323";
                msg.textContent = "Try again!"
            }else{
                msg.textContent = "Correct!";
                changecolor(picked);
                resetbtn.textContent = "New Game?";
            }
        });
    }
}

function setbtns(){
    resetbtn.textContent = "New Colors";
    h1.style.backgroundColor="steelblue";
    colors = gencolor(numsq);
    picked =pickcolor();
    msg.textContent = ""
    colordisp.textContent = picked;
    for(var i=0;i<boxes.length;i++){
        if(colors[i]){
            boxes[i].style.backgroundColor = colors[i];
            boxes[i].style.display = "block";
        }
        else
            boxes[i].style.display = "none";
    }
}

resetbtn.addEventListener("click", function(){
    setbtns();
});



function changecolor(color){
    for(var i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

function pickcolor(){
    return colors[random1(colors.length)];
}

function gencolor(num){
    var color = [];
    for(var i=0;i<num;i++){
        color.push("rgb("+random1(256)+", "+random1(256)+", "+random1(256)+")");
    }
    return color;
}

function random1(a){
    a= a-1;
    return Math.floor((Math.random()*a)+1);
}