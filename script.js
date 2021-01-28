let container = document.querySelector('#container');
const button=document.querySelector('#buttons');
const range=document.querySelector('#numberOfBoxes');
const numberLabel = document.querySelector('#numberLabel');
const color = document.querySelector('#colorOfBoxes');
const toggleDrawing = document.querySelector('#toggleDrawing');
let drawing = 0;



button.addEventListener('click', clear);
range.addEventListener('change', sketch);
range.addEventListener('input', changeLabel);
window.addEventListener('resize', cssChange);

function changeLabel(){
    let numberBoxes = document.getElementById("numberOfBoxes").value;
    numberLabel.textContent = `${numberBoxes} x ${numberBoxes} `;
}

function sketch(){
    container = document.querySelector('#container');
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
                // rules[2].style.width = `${z/x}px`;
                // rules[2].style.height = `${y/x}px`;
                rules[2].style.width = `${100/x}%`;
                rules[2].style.height = `${100/x}%`;

        //creates the boxes        
        for (i=1; i<=x; i++){
            for(j=1; j<=x; j++){
                let div = document.createElement("div");
                div.setAttribute(`data-x`,`${i}`);
                div.setAttribute(`data-y`,`${j}`);
                div.classList.add('boxes');
                container.appendChild(div);
            }
        }

        boxes = Array.from(document.querySelectorAll(".boxes"));
        boxes.forEach(box => box.addEventListener('mouseover', hoverMouse));
       
}


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


function clear(){
    console.log('hello');
    container = document.querySelector('#container');
    const boxes = Array.from(document.querySelectorAll(".boxes"));
    boxes.forEach(box => container.removeChild(box));
    sketch();
}

function cssChange(){
    let numberBoxes = document.getElementById("numberOfBoxes").value
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
                rules[2].style.width = `${z/x}px`;
                rules[2].style.height = `${y/x}px`;
}


document.addEventListener('keydown', draw);

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