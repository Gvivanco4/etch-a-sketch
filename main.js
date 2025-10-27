// Global variables

const DEFAULT_SIZE = 16;
const canvas = document.querySelector(".canvas-container");
const slider = document.querySelector(".slider");
console.log(slider.value);
const sliderSettingsText = document.querySelector(".slider-settings");
const resetButton = document.querySelector(".reset-btn");

// Div Creation Function (inside container)

function createCanvaSize (size = DEFAULT_SIZE) {

    canvas.innerHTML = "";
    let value = slider.value;

    for (let i = 1; i <= (size * size); i++) {

        let square = document.createElement("div");
        square.classList.add(`square-div`);
        square.setAttribute("style", `width: ${100 / size}%; height: ${100 / size}%`)
        canvas.appendChild(square);
    }

    sliderSettingsText.textContent = `Size is ${value}px x ${value}px`

    const squares = document.querySelectorAll(".square-div");

squares.forEach((sqr) => {

    sqr.addEventListener("mouseenter", () => {
        ran_col(sqr)
    })

     sqr.addEventListener("mouseleave", () => {
        ran_col(sqr)
    })

    resetButton.addEventListener("click", (e) => {
    sqr.style.backgroundColor = "white";
    e.stopPropagation();
})
})

   
    
}


//Add event listener for slider

createCanvaSize();

slider.addEventListener("change", () => {
    let value = slider.value;
    createCanvaSize(value);
    
});


// Establish color tracing mechanic

 

// Random color function

function ran_col(element) { 
  let color = '#'; 
  let letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0']; //Set your colors here
  color += letters[Math.floor(Math.random() * letters.length)];
  element.style.background = color; // 
   }

