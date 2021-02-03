let container = document.querySelector('#container');
const button=document.querySelector('#buttons');
const range=document.querySelector('#numberOfBoxes');
const numberLabel = document.querySelector('#numberLabel');
const color = document.querySelector('#colorOfBoxes');
const toggleDrawing = document.querySelector('#toggleDrawing');
const rainbowToggle=document.querySelector('#rainbow');
const opacityToggle=document.querySelector('#opacity');
let rainbowIndicator = 0;
button.addEventListener('click', clear);
range.addEventListener('change', sketch);
range.addEventListener('input', changeLabel);
window.addEventListener('resize', resize);
window.addEventListener('load', sketch);
let drawing = 0; //Toggle for drawing
document.addEventListener('keydown', draw);




//Real time display of the input range value;
function changeLabel(){
    let numberBoxes = document.getElementById("numberOfBoxes").value;
    numberLabel.textContent = `${numberBoxes} x ${numberBoxes} `;
    sketch();
}

//Assigning of addEventListener for each box
function sketch(){
    boxCreate(); 
    boxes = Array.from(document.querySelectorAll(".boxes"));
    boxes.forEach(box => box.addEventListener('mouseover', hoverMouse));
    boxes.forEach(box => box.addEventListener('touchmove', hoverMouse));
}

//function when mouse is hovered upon the box
function hoverMouse(e){
    if(drawing===1){
    let colorBoxes = (rainbowToggle.checked === true) ? rainbow() : document.getElementById("colorOfBoxes").value
    e.target.style.backgroundColor = colorBoxes;
    let boxOpacity = Number(e.target.style.opacity);
    e.target.style.opacity = (opacityToggle.checked === true) ? (boxOpacity+0.3) : 1;
    }
    else{
        return;
    }
}

function rainbow(){
    switch(rainbowIndicator){
        case 0:
            rainbowIndicator +=1;
            return 'red';
        case 1:
            rainbowIndicator +=1;
            return 'orange';
        case 2:
            rainbowIndicator +=1;
            return 'yellow';
        case 3:
            rainbowIndicator +=1;
            return 'green';
        case 4:
            rainbowIndicator +=1;
            return 'blue';
        case 5:
            rainbowIndicator +=1;
            return 'indigo';
        case 6:
        rainbowIndicator = 0;
        return 'violet';
    }

}

function resize(){
    let numberBoxes = document.getElementById("numberOfBoxes").value
    numberLabel.textContent = `${numberBoxes} x ${numberBoxes} `
    let x = numberBoxes;
    let rules = [];
    if (document.styleSheets[0].cssRules){
        rules = document.styleSheets[0].cssRules;
    }
    else if (document.styleSheets[0].rules){
        rules = document.styleSheets[0].rules;
    }
        rules[2].style.width = `${100/x}%`;
        rules[2].style.height = `${100/x}%`;
    return x;
}

//function to clear
function clear(){
    container = document.querySelector('#container');
    const boxes = Array.from(document.querySelectorAll(".boxes"));
    boxes.forEach(box => container.removeChild(box));
    sketch();
}

//function to resize and create boxes;
function boxCreate(){
    let boxes = Array.from(document.querySelectorAll(".boxes"));
    boxes.forEach(box => container.removeChild(box));
    //Modifies the third rule on css which is .boxes by updating its width and height;
        let x = resize();

            for (i=1; i<=x; i++){
                for(j=1; j<=x; j++){
                    let div = document.createElement("div");
                    div.setAttribute(`data-x`,`${i}`);
                    div.setAttribute(`data-y`,`${j}`);
                    div.classList.add('boxes');
                    container.appendChild(div);
                }
            }
}
//function to toggle drawing;
function draw(event){
    let x=event.which||event.keyCode;
    if(x === 68){
        if(drawing === 0){
            drawing = 1; 
            toggleDrawing.textContent = "Drawing is On";
            toggleDrawing.setAttribute("style", "color:green;");
        }
        else if(drawing === 1){
            drawing = 0;
            toggleDrawing.textContent = "Drawing is Off";
            toggleDrawing.setAttribute("style", "color:red;");
        }
    }
    else{ 
        return
    };
    
}