const c = console.log.bind(console);
const modalOverlay = document.querySelector(".modal-overlay");
const buttons = document.querySelectorAll("button");

for (const btn of buttons) {
  btn.addEventListener("click", (e) => {
    const current = e.currentTarget.classList;
    if (current.contains("modal-btn")) {
      modalOverlay.classList.add("open-modal");
    }
    if (current.contains("close-btn")) {
      modalOverlay.classList.remove("open-modal");
    }
  });
}
