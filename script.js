let container = document.querySelector('#container');
const button=document.querySelector('#buttons');
const range=document.querySelector('#numberOfBoxes');
const numberLabel = document.querySelector('#numberLabel');
const color = document.querySelector('#colorOfBoxes');
const toggleDrawing = document.querySelector('#toggleDrawing');
button.addEventListener('click', clear);
range.addEventListener('change', sketch);
range.addEventListener('input', changeLabel);
window.addEventListener('resize', cssChange);
let drawing = 0; //Toggle for drawing
document.addEventListener('keydown', draw);



//Real time display of the input range value;
function changeLabel(){
    let numberBoxes = document.getElementById("numberOfBoxes").value;
    numberLabel.textContent = `${numberBoxes} x ${numberBoxes} `;
    cssChange();
}

//Assigning of addEventListener for each box
function sketch(){
    cssChange(); 
    boxes = Array.from(document.querySelectorAll(".boxes"));
    boxes.forEach(box => box.addEventListener('mouseover', hoverMouse));
    boxes.forEach(box => box.addEventListener('touchmove', hoverMouse));
}

//function when mouse is hovered upon the box
function hoverMouse(e){
    if(drawing===1){
    let colorBoxes = document.getElementById("colorOfBoxes").value
    console.log(colorBoxes);
    e.target.setAttribute("style", `background-color: ${colorBoxes};`);
    }
    else{
        return;
    }
}

// function touchMove(e){
//     e.target.setAttribute("style", `background-color: ${colorBoxes};`);
// }

//function to clear
function clear(){
    console.log('hello');
    container = document.querySelector('#container');
    const boxes = Array.from(document.querySelectorAll(".boxes"));
    boxes.forEach(box => container.removeChild(box));
    sketch();
}

//function to resize and create boxes;
function cssChange(){
    let boxes = Array.from(document.querySelectorAll(".boxes"));
    boxes.forEach(box => container.removeChild(box));
    let numberBoxes = document.getElementById("numberOfBoxes").value
    numberLabel.textContent = `${numberBoxes} x ${numberBoxes} `
    let x = numberBoxes;
    let z= document.getElementById('container').clientWidth;
    let y= document.getElementById('container').clientHeight
    let rules = [];

        //Modifies the third rule on css which is .boxes by updating its width and height;
            if (document.styleSheets[0].cssRules){
                rules = document.styleSheets[0].cssRules;
            }
            else if (document.styleSheets[0].rules){
                rules = document.styleSheets[0].rules;
            }
                rules[2].style.width = `${100/x}%`;
                rules[2].style.height = `${100/x}%`;

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
        console.log('pumasok')
        if(drawing === 0){
            drawing = 1; 
            console.log('draw is on')
            toggleDrawing.textContent = "Drawing is On";
            toggleDrawing.setAttribute("style", "color:green;");
        }
        else if(drawing === 1){
            drawing = 0;
            console.log('draw is off')
            toggleDrawing.textContent = "Drawing is Off";
            toggleDrawing.setAttribute("style", "color:red;");
        }
    }
    else{ 
        return
    };
    
}