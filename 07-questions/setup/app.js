const c = console.log.bind(console);
const buttons = document.querySelectorAll("button");
const questions = document.querySelectorAll(".question");
//Traversing the DOM method
for (const btn of buttons) {
    btn.addEventListener("click", (e) => {
        //specifies the PARENT of the PARENT clicked(.question .question-title .question-btn)
        const current = e.currentTarget.parentElement.parentElement;
        c(current)
        //toggles class on the parent
        current.classList.toggle("show-text");
        //loops through questions
        for (const item of questions) {
            //checks if ITEM (from list of question) matches the CURRENT(question clicked)
            if (item !== current) {
                item.classList.remove('show-text')
            }
        }
    });
}

//OR
//Using slectors inside the element
        //loops through questions
// for (const question of questions) {
//   const btn=  question.querySelector('.question-btn')
        //adds eventListeners to the buttn in the question div
//   btn.addEventListener('click',()=>{
        //toggles class on the parent
    //     question.classList.toggle('show-text')
         //checks if ITEM (from list of question) matches the QUESTION(question clicked)
    //     for (const item of questions) {
    //         if (item !== question) {
    //             item.classList.remove('show-text')
    //         }
    //     }

//   })
// }
