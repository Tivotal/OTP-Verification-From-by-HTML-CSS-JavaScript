/* Created by Tivotal */

const inputs = document.querySelectorAll("input");
const btn = document.querySelector("button");

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input;
    const nextInput = currentInput.nextElementSibling;
    const prevInput = currentInput.previousElementSibling;

    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          input.value = "";
          prevInput.focus();
        }
      });
    }

    if (!inputs[3].disabled && inputs[3].value !== "") {
      btn.classList.add("active");
      return;
    }
    btn.classList.remove("active");
  });
});

//making first input focus on window starts
window.addEventListener("load", () => inputs[0].focus());
