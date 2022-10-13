// ****** SELECT ITEMS **********
const c = console.log.bind(console);
let alert = document.querySelector(".alert");
const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");
const input = document.querySelector("#grocery");
const groceryList = document.querySelector(".grocery-list");
const groceryContainer = document.querySelector(".grocery-container");
let groceries = [];
let editedTxt;
let nonedited;
const items = JSON.parse(localStorage.getItem("groceries"));
if (items) {
  groceries = items;
  createItem(groceries);
}

// edit option

// ****** EVENT LISTENERS **********
// submit
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (submitBtn.textContent === "submit") {
    if (input.value !== "") {
      addItem();
      alertMsg("alert-success", "item added to the list");
    } else {
      alertMsg("alert-danger", "please enter value");
    }

    input.value = "";
  }
});
input.addEventListener("keypress", (e) => {
  if (submitBtn.textContent === "submit") {
    if (e.key === "enter") {
      if (input.value !== "") {
        addItem();
        alertMsg("alert-success", "item added to the list");
      } else {
        alertMsg("alert-danger", "please enter value");
      }
      input.value = "";
    }
  }
});
/////////
// clear one

// clear all
clearBtn.addEventListener("click", () => {
  groceryContainer.classList.remove("show-container");
  groceryList.innerHTML = "";
  groceries = [];
  localStorage.clear();
  alertMsg("alert-danger", "empty list");
});
// ****** FUNCTIONS **********

function alertMsg(type, msg) {
  let altMsg = setInterval(() => {
    alert.classList.add(type);
    alert.innerHTML = msg;
  }, 100);

  setTimeout(() => {
    alert.classList.remove(type);
    alert.innerHTML = "";
    clearInterval(altMsg);
  }, 1000);
}
function createItem(arr) {
  groceryContainer.classList.add("show-container");
  let text = "";
  for (const item of arr) {
    text += `
        <div class="grocery-item">
        <p>${item}</p>
        <div class="btn-container">
                  <!-- edit btn -->
                  <button type="button" class="edit-btn">
                    <i class="fas fa-edit"></i>
                  </button>
                  <!-- delete btn -->
                  <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
        </div>
        `;
  }
  groceryList.innerHTML = text;

  //  EDIT AND DELETE BUTTON/////////
  const buttons = document.querySelectorAll("button");
  for (const btn of buttons) {
    btn.addEventListener("click", (e) => {
      const currentBtn = e.currentTarget.classList;
      const groceryItem = e.currentTarget.parentElement.parentElement;
      let p = groceryItem.querySelector("p").innerHTML;
      if (currentBtn.contains("edit-btn")) {
        submitBtn.textContent = "edit";
        editedTxt = e.currentTarget.parentElement.previousElementSibling;
        nonedited = editedTxt.innerHTML;
        input.value = editedTxt.innerHTML;
      }
      if (currentBtn.contains("delete-btn")) {
        groceryItem.parentNode.removeChild(groceryItem);
        alertMsg("alert-danger", "item removed");
        removeFromArr(groceries, p);
        c(groceries);
        localStorage.setItem("groceries", JSON.stringify(groceries));
        if (groceries.length < 1)
          groceryContainer.classList.remove("show-container");
      }
    });
  }
  // ///////////////////////////////////////

  // SUBMIT BUTTON WHEN EDITTED//

  submitBtn.addEventListener("click", () => {
    if (submitBtn.textContent === "edit") {
      editedTxt.innerHTML = input.value;
      editedTxt = editedTxt.innerHTML;
      alertMsg("alert-success", "item edited");

      c(editedTxt);

      groceries = groceries.map((item) => {
        if (item === nonedited) {
          c(item);
          item = editedTxt;
        }

        return item;
      });
      localStorage.setItem("groceries", JSON.stringify(groceries));
      input.value = "";
    }
    setTimeout(() => {
      submitBtn.textContent = "submit";
    }, 100);
  });

  // ON KEYPRESS
  input.addEventListener("keypress", (e) => {
    if (submitBtn.textContent === "edit") {
      if (e.key === "enter") {
        if (submitBtn.textContent === "edit") {
          editedTxt.innerHTML = input.value;
          editedTxt = editedTxt.innerHTML;
          alertMsg("alert-success", "item edited");

          groceries = groceries.map((item) => {
            if (item === nonedited) {
              item = editedTxt;
            }

            return item;
          });
          localStorage.setItem("groceries", JSON.stringify(groceries));
        }
        setTimeout(() => {
          submitBtn.textContent = "submit";
        }, 100);
        input.value = "";
      }
    }
  });
  // /////////////
}
// REMOVE ITEM FROM ARRAY
function removeFromArr(arr, val) {
  const i = arr.indexOf(val);
  if (i > -1) {
    arr.splice(i, 1);
  }
}
// ADD ITEMS
function addItem() {
  groceries.push(input.value);
  localStorage.setItem("groceries", JSON.stringify(groceries));
  createItem(groceries);
}

window.addEventListener("load", () => {
  if (groceries.length === 0)
    groceryContainer.classList.remove("show-container");
});
// import u, { listSkills } from "../../15-slider/setup/sliderapp.js";
// ****** LOCAL STORAGE **********
// localStorage.clear()
// ****** SETUP ITEMS **********
//try to get change the input.value when btn is clicked; input.value = new input.value
import * as testModule from "/15-slider/setup/sliderapp.js";
let jobs = ["wigs", "moohing", "sass"];
const girl = new testModule.User("ama", 22, ...jobs);
let test = {
  class: "ss2",
  position: "5th",
  skills: ["sdsfs", "fwv", "wvWER"],
};
c(testModule.listSkills(girl));
