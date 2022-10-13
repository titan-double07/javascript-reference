const c = console.log.bind(console);
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");
const value = document.querySelector("#value");
let count = 0;

function decrease() {
  count -= 1;
  value.innerHTML = count;
  if (count < 0) return (value.style.color = "red");
}

function increase() {
  count += 1;
  value.innerHTML = count;
  if (count > 0) return (value.style.color = "green");
}

function reset() {
  count = 0;
  (value.innerHTML = count);
  if (count === 0) return (value.style.color = "black");

}

decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
increaseBtn.addEventListener("click", increase);
