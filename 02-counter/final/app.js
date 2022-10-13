let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

for (const btn of btns) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget;
    switch (styles.innerHTML) {
      case "decrease":
        count -= 1;
        if (count < 0) {
          value.style.color = "red";
        }
        break;
      case "increase":
        count += 1;
        if (count > 0) {
          value.style.color = "green";
        }
        break;
      case "reset":
        count=0
        if (count === 0) {
          value.style.color = "black";
        }
        break;
    }
    value.innerHTML = count;
    
  });
}
// for (const btn of btns)
// {
//   btn.addEventListener("click", function (e) {
//     const styles = e.currentTarget.classList;
//     if (styles.contains("decrease")) {
//       count--;
//     } else if (styles.contains("increase")) {
//       count++;
//     } else {
//       count = 0;
//     }

//     if (count > 0) {
//       value.style.color = "green";
//     }
//     if (count < 0) {
//       value.style.color = "red";
//     }
//     if (count === 0) {
//       value.style.color = "#222";
//     }
//     value.textContent = count;
//   });
// };
