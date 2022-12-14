import { dateCalcForm } from "./main.js";
import { getStart } from "./timer.js";

const checkbox = document.querySelector(".input-checkbox");
const text = document.querySelector(".text");
const timer = document.querySelector(".timer");

export const isChecked = checkbox.addEventListener("change", function () {
    if (this.checked) {
        dateCalcForm.classList.add("hidden");
        timer.classList.remove("hidden");
        text.textContent = "Переключиться на калькулятор дат";
    } else {
        timer.classList.add("hidden");
        dateCalcForm.classList.remove("hidden");
        text.textContent = "Переключиться на таймер";
    }
});