document.addEventListener('DOMContentLoaded',()=>{
  const gridSize = document.querySelector(".gridSize");
  createContainer(0)


  gridSize.addEventListener("click",()=>{
    let size = decideGridSize();
    createContainer(size);
  })
  
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
    boxes.addEventListener('mouseover',()=>{
      boxes.style.backgroundColor = 'black';
    })
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

let colorDiv = (colorChoice) => {

}
let setColor = (colorChoice) => {
   color = colorChoice;
}