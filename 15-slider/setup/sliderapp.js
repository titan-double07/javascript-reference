const c = console.log.bind(console);
// const buttons = document.querySelectorAll("button");
// const slides = document.querySelectorAll(".slide");
// for (const [index, slide] of slides.entries()) {
//     slide.style.left = `${index * 100}%`;
// }
// let count = 0;
// // eventListeners

// let  prevBtn
// let  nextBtn
// for (const btn of buttons) {
//     if(btn.classList.contains("prevBtn")){
//         prevBtn =btn
//         prevBtn.style.display='none'
//     }
//     if(btn.classList.contains("nextBtn")){
//         nextBtn =btn
//     }

//   btn.addEventListener("click", (e) => {

//     const current = e.currentTarget.classList;
//     if (current.contains("nextBtn")) {
//       count++;
//       carousel(nextBtn,prevBtn);
//     } else if (current.contains("prevBtn")) {
//       count--;
//       carousel(nextBtn,prevBtn);

//     }
//   });
// }

// function carousel(nextBtn,prevBtn) {
//   for (const slide of slides) {
//     if (count < slides.length - 1) {
//         nextBtn.style.display = "block";
//       } else {
//         nextBtn.style.display = "none";
//       }
//       if (count > 0) {
//         prevBtn.style.display = "block";
//       } else {
//         prevBtn.style.display = "none";
//       }
//     c(count);
//     // (count<0)?count=slides.length-1:(count>slides.length-1)?count=0:count
//     (count<0)?count=slides.length-1:(count>slides.length-1)?count=0:count
//     slide.style.transform = `translateX(-${count * 100}%)`;
//   }
// }
// carousel()

///////////////////////////////////////////////////////////////\\
// Penny  	            $0.01 (PENNY)
// Nickel	              $0.05 (NICKEL)
// Dime	                $0.1 (DIME)
// Quarter	            $0.25 (QUARTER)
// Dollar	              $1 (ONE)
// Five Dollars	        $5 (FIVE)
// Ten Dollars	        $10 (TEN)
// Twenty Dollars	      $20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
const REGISTER_STATUS = { closed: "CLOSED", insufficientFunds: "INSUFFICIENT_FUNDS", open: "OPEN" };

function checkCashRegister(price, cash, cid) {
    
    // Here is your change, ma'am.
    let cashRegister = {status: "", change: cid};
    const changeNeeded = parseFloat(cash - price).toFixed(2);
    const changeAvailable = getTotalCashRegisterChange(cid);
    cashRegister.status = getTotalCashRegisterStatus(changeNeeded, changeAvailable);
   



    if(cashRegister.status === REGISTER_STATUS.insufficientFunds) {
        cashRegister.change = [];

        return cashRegister;
    }

    cashRegister.change = getCustomerChange(changeNeeded, cid);
    

    if(changeNeeded > getTotalCashRegisterChange(cashRegister.change)){
        cashRegister.status = REGISTER_STATUS.insufficientFunds;
        cashRegister.change = [];
    }
    if(cashRegister.status === REGISTER_STATUS.closed){
        cashRegister.change = [...cid]
    }
    return cashRegister;

    //console.log(cashRegister);
}

function getCustomerChange(changeNeeded, changeInDrawer){
    const change = [];
    const currencyDictionary = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.10,
        "QUARTER": 0.25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };
    for(let i = changeInDrawer.length - 1; i >= 0; i--){
        const coinName = changeInDrawer[i][0];
        const coinTotal = changeInDrawer[i][1];
        const coinValue = currencyDictionary[coinName];
        let coinAmount = (coinTotal / coinValue).toFixed(2);
        let coinsToReturn = 0;

        while (changeNeeded >= coinValue && coinAmount > 0){
            changeNeeded -= coinValue;
            changeNeeded = changeNeeded.toFixed(2);
            coinAmount--;
            coinsToReturn++;
        }
        
        if(coinsToReturn > 0){
            change.push([coinName, coinsToReturn * coinValue]);
        }
    }
    return change;
}

function getTotalCashRegisterStatus(changeNeeded, changeAvailable){
    if(Number(changeNeeded) > Number(changeAvailable)) {
        return REGISTER_STATUS.insufficientFunds;
    }
    if(Number(changeNeeded) < Number(changeAvailable)) {
        return REGISTER_STATUS.open;
    }
    return REGISTER_STATUS.closed;
}

function getTotalCashRegisterChange(changeInDrawer){
    let total = 0;
    for(let change of changeInDrawer){
        let changeValue = change[1];
        total += changeValue;
    }
    return total.toFixed(2);
}




c(
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
  )
