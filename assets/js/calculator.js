document.addEventListener("DOMContentLoaded", function () {
  let screen = document.querySelector(".default-screen h1");
  let buttons = document.querySelectorAll("button");
  let currentInput = "";
  let operator = null;
  let firstOperand = null;

  buttons.forEach(button => {
      button.addEventListener("click", () => {
          let value = button.textContent;

          if (button.classList.contains("del")) {
              currentInput = currentInput.slice(0, -1);
              screen.textContent = currentInput || "0";
          } else if (button.classList.contains("reset")) {
              currentInput = "";
              operator = null;
              firstOperand = null;
              screen.textContent = "0";
          } else if (button.classList.contains("equal")) {
              if (firstOperand !== null && operator !== null && currentInput !== "") {
                  let secondOperand = parseFloat(currentInput);
                  let result;
                  switch (operator) {
                      case "+":
                          result = firstOperand + secondOperand;
                          break;
                      case "-":
                          result = firstOperand - secondOperand;
                          break;
                      case "x":
                          result = firstOperand * secondOperand;
                          break;
                      case "/":
                          result = firstOperand / secondOperand;
                          break;
                  }
                  screen.textContent = result;
                  currentInput = result;
                  operator = null;
                  firstOperand = null;
              }
          } else if (["+", "-", "x", "/"].includes(value)) {
              if (currentInput !== "") {
                  firstOperand = parseFloat(currentInput);
                  operator = value;
                  currentInput = "";
              }
          } else {
              currentInput += value;
              screen.textContent = currentInput;
          }
      });
  });
});


