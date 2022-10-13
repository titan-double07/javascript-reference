const c = console.log.bind(console);
const buttons = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");
for (const btn of buttons) {
  btn.addEventListener("click", (e) => {
    const currentBtn = e.currentTarget;
    const current = e.currentTarget.dataset.id;

    switch (current) {
        case 'history':
          displayActive(current,currentBtn)
            
            break;
        case 'vision':
          displayActive(current,currentBtn)

            break;
        case 'goals':
          displayActive(current,currentBtn)

            break;
    

    }
  });
}

function displayActive(current,currentBtn){
    const currentTab= document.getElementById(current)
    for (const item of content) {
       if(item!==currentTab){
           item.classList.remove('active')
            
    }else{
           currentTab.classList.add('active')          
         
       }
    }
    for (const btn of buttons) {
        if(btn!==currentBtn){
            btn.classList.remove('active')
         
     }else{        
          currentBtn.classList.add('active')
        }
        
    }
}