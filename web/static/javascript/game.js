window.onload = loop;

var cash = 0;
var factoryToiletPaper = 0;
var factoryMask = 0;
var factorySanitiser = 0;
var researchedVaccine = false;


var fps = 1;
function loop() {
    setTimeout(function() {
        // write code
        if(!researchedVaccine) requestAnimationFrame(loop);                    
                
        cash += factoryToiletPaper * 5
        cash += factoryMask * 50
        cash += factorySanitiser * 100
        document.getElementById("cash").innerHTML = cash;
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
    document.getElementById("cash").innerHTML = cash;
}

function increaseCash() {
    cash++;
    document.getElementById("cash").innerHTML = cash;
}