//global variables
const c = console.log.bind(console);
const buttons = document.querySelectorAll("button");
const sidebar = document.querySelector(".sidebar");
const sideBarToggle = () => {
  sidebar.classList.toggle("show-sidebar");
  c(sidebar);
};

const closeSideBar = () => {
  sidebar.classList.remove("show-sidebar");
  c(sidebar);
};

//event listeners
for (const btn of buttons) {
  btn.addEventListener("click", (e) => {
    const currentBtn = e.currentTarget.classList;
    if (currentBtn.contains("sidebar-toggle")) {
      sideBarToggle();
    }
    if (currentBtn.contains("close-btn")) {
      closeSideBar()
    }
  });
}
