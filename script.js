document.addEventListener('DOMContentLoaded',()=>{
  createContainer(10);
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
  }
}