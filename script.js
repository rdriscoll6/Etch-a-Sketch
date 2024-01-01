let color = 'black';

document.addEventListener('DOMContentLoaded',()=>{
  const gridSize = document.querySelector(".gridSize");
  createContainer(16)
  gridSize.addEventListener("click",()=>{
    let size = decideGridSize();
    createContainer(size);
  })
  setColorFromPicker();
  
})

let createContainer = (size) => {
  const container = document.querySelector(".container");
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for(let i = 0; i < numDivs; i++){
    const boxes = document.createElement('div')
    boxes.className = ('boxes')
    container.insertAdjacentElement("beforeend",boxes);
    boxes.addEventListener('mouseover',colorDiv)
  }

  
  }

let decideGridSize = () => {
  message = document.querySelector("#message");
  determineSize = prompt("What would you like the grid size to be?");

    if (determineSize == ""){
      message.innerHTML = "Please enter a number 1 - 100";

    }
    else if (determineSize < 1 || determineSize > 100){
      message.innerHTML = "The range must be 1 - 100";
    }
    else{
      message.innerHTML = "Have fun drawing";
      return determineSize;
    }
};

function colorDiv() {
  if (color == "random"){
    this.style.backgroundColor = `hsl(${Math.random()*360}, 110%, 50%)`
  }
  else{
    this.style.backgroundColor = 'black';
  }

}
let setColor = (colorChoice) => {
   color = colorChoice;
}

function resetBoard(){
  let divs = document.querySelectorAll('div');
  divs.forEach((div) => div.style.backgroundColor = 'white')
  }

