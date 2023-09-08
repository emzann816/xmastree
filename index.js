let star = "**"

for (let i = 0; i < 2; i++){
    document.getElementById("tree_star").innerHTML 
    += star + "<br>";
    star = star + "***";
}

let starTwo = "*X*M*"

for (let i = 0; i < 16; i++){
    document.getElementById("tree_star").innerHTML 
    += starTwo + "<br>";
    starTwo = starTwo + "A*S*";
}

function treeLights(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let rGb = "RGB ("+ red +", "+ green +", "+ blue +")";

    document.getElementById("rgb_code_tree").textContent = rGb;

    document.getElementById("rgb_code_tree").style.color = "white";

    document.getElementById("tree_star").style.color = rGb;

    document.getElementById("gifts").style.color = rGb;
    document.getElementById("gifts2").style.color = rGb;
    document.getElementById("gifts3").style.color = rGb;
    document.getElementById("gifts4").style.color = rGb;
    document.getElementById("lines").style.color = rGb;
    document.getElementById("lines2").style.color = rGb;
}


function on(){
    start = setInterval(treeLights, 500);
}

function off(){
    clearInterval(start);
}

let audio = new Audio("music.mp3");
function playSound(){
    audio.play();
}

function pauseSound(){
    audio.pause();
}

