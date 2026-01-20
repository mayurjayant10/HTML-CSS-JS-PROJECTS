const input = document.getElementById("text");
const buttons = document.querySelectorAll("button");

let expression = "";
let arr=Array.from(buttons);

arr.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;

    if (value === "=") {
      try {
        expression = eval(expression).toString();
        input.value = expression;
      } catch (err) {
        input.value = "Error";
        expression = "";
      }
    } else if (value === "AC") {
      expression = "";
      input.value = "";
    } else if (value === "DEL") {
      expression = expression.slice(0, -1);
      input.value = expression;
    } else {
      expression += value;
      input.value = expression;
    }
  });
});
