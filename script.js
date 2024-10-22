let input= document.getElementById("input");
let button = document.querySelectorAll("button");


// adding event listener for each button clicked.
button.forEach(element => {
    element.addEventListener("click",(e)=>{
           console.log(e.target.textContent)

    if (e.target.textContent === "C") {
      input.innerText= "";
    } else if (e.target.textContent === "<") {
      input.innerText = input.innerText.slice(0, -1);
    } else if (e.target.textContent === "=") {
      input.innerText = eval(input.innerText);
    } else {
      input.innerText += e.target.textContent;
    }       
    input.scrollLeft = input.scrollWidth;  
    })
});

const display = document.getElementById("display");

// Append value to the display
function appendToDisplay(value) {
  // Prevent multiple operators or invalid input
  if (isOperator(display.value.slice(-1)) && isOperator(value)) {
    return;
  }

  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Delete the last character (backspace)
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Perform calculation and handle errors
function calculate() {
  try {
    // Prevent division by zero
    if (display.value.includes("/0")) {
      throw new Error("Cannot divide by zero.");
    }


    // Evaluate the expression
    let result = eval(display.value);

    // Check for invalid calculation (e.g., empty display or NaN results)
    if (isNaN(result) || result === undefined) {
      throw new Error("Invalid input.");
    }

    // Display the result
    display.value = result;
  } catch (error) {
    alert(error.message);
    clearDisplay();
  }
}