let container = document.querySelector('#container');

function sketch(){
    let x = prompt('How many squares?');
    let z= document.getElementById('container').clientWidth;
    let rules = [];

        //Modifies the third rule on css which is .boxes by updating its width and height;
            if (document.styleSheets[0].cssRules){
                rules = document.styleSheets[0].cssRules;
            }
            else if (document.styleSheets[0].rules){
                rules = document.styleSheets[0].rules;
            }
                rules[2].style.width = `${z/x}px`;
                rules[2].style.height = `${z/x}px`;

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

        const boxes = Array.from(document.querySelectorAll(".boxes"));
        boxes.forEach(box => box.addEventListener('mouseover', hoverMouse));
}

sketch();

function hoverMouse(e){
        e.target.classList.add('hover');
}

const button=document.querySelector('#buttons');
button.addEventListener('click', clear);

function clear(){
    console.log('hello');
    container = document.querySelector('#container');
    const boxes = Array.from(document.querySelectorAll(".boxes"));
    boxes.forEach(box => container.removeChild(box));
    sketch();
}


