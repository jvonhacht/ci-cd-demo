var cash = 50000;
var factoryToiletPaper = 0;
var factoryMask = 0;
var factorySanitiser = 0;
var researchedVaccine = false;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

class Virus {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.v_x = randomNumber(-3, 3)*3;
        this.v_y = randomNumber(-3, 3)*3;
    }
}

var virusList = [];

function init() {
    var canvas = document.getElementById("canvas");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    for (i = 0; i < 50; i++) {
        var virus = {
            x: randomNumber(40, canvas.width-40),
            y: randomNumber(40, canvas.height-40),
            v_x: randomNumber(-5, 5),
            v_y: randomNumber(-5, 5),
        }
        virusList.push(virus);
    }
    loop();
}

var fps = 30;
function loop() {
    setTimeout(function() {
        // write code
        if (researchedVaccine) {
            virusList = [];
            document.getElementById("duck").src = "/static/img/duck.png"
            alert("You won, the world is saved!");
        } else {
            requestAnimationFrame(loop); 
        }                 
        
        cash += factoryToiletPaper * 5 / fps
        cash += factoryMask * 50 / fps
        cash += factorySanitiser * 100 / fps
        document.getElementById("cash").innerHTML = Math.round(cash * 100) / 100;

        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.src = "/static/img/corona.png"
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (i = 0; i < virusList.length; i++) {
            var virus = virusList[i];
            virus.x += virus.v_x;
            virus.y += virus.v_y;
            if (virus.x >= canvas.width ||  virus.x <= 0) {
                virus.v_x = -virus.v_x;
            }
            if (virus.y >= canvas.height ||  virus.y <= 0) {
                virus.v_y = -virus.v_y;
            }
            ctx.drawImage(img, virus.x, virus.y, 20, 20);    
        }
        
    }, 1000 / fps);
}

function buy(type) {
    if (type == 'toilet') {
        if (cash >= 50) {
            cash -= 50;
            factoryToiletPaper++;
            document.getElementById("numberToilet").innerHTML = factoryToiletPaper;
        }
    } else if(type == 'mask') {
        if (cash >= 500) {
            cash -= 500;
            factoryMask++;
            document.getElementById("numberMask").innerHTML = factoryMask;
        }
    } else if (type == 'sanitiser') {
        if (cash >= 5000) {
            cash -= 5000;
            factorySanitiser++;
            document.getElementById("numberSanitiser").innerHTML = factorySanitiser;
        }
    } else if('vaccine') {
        if (cash >= 50000) {
            cash -= 50000;
            researchedVaccine = true;
        }
    }
    document.getElementById("cash").innerHTML = Math.round(cash * 100) / 100;
}

function increaseCash() {
    cash++;
    document.getElementById("cash").innerHTML = Math.round(cash * 100) / 100;
}