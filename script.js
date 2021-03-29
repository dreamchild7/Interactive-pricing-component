

    //Get all the DOM elements for Manipulation
const pageView = document.querySelector(".num-pageview");
const monthBill = document.querySelector(".month-bill");
const yearBill = document.querySelector(".year-bill");
const range = document.querySelector("#range-bar");
const billingToggle = document.querySelector("#billing-toggle");
const annual = document.querySelector(".annual")
const submitBtn =document.querySelector(".btn");





// range.oninput = function(){
//     if(range.value === 50){
//         pageView.innerHTML = range.value * 0.2;

//     }
// }




function updateRange(val) {
    if(val == 50){
        pageView.innerHTML =val * 0.2 + "k";
        monthBill.innerHTML = 8 + ".00";
        yearBill.innerHTML = (8 * 12)-(8 * 12)*0.25;
    }else if (val == 100) {
        pageView.innerHTML =val * 0.5 + "k";
        monthBill.innerHTML = 12 + ".00";
        yearBill.innerHTML = (12 * 12)-(12 * 12)*0.25;
    } else if(val == 150){
        pageView.innerHTML =(val *2) / 3 + "k";
        monthBill.innerHTML = 16 + ".00";
        yearBill.innerHTML = (16 * 12)-(16 * 12)*0.25;
    } else if(val == 200){
        pageView.innerHTML = (val *2) + 100 + "k";
        monthBill.innerHTML = 24 + ".00";
        yearBill.innerHTML = (24 * 12)-(24 * 12)*0.25;
    }else if(val == 250){
        pageView.innerHTML = (val / val) + "m";
        monthBill.innerHTML = 36 + ".00";
        yearBill.innerHTML = (36 * 12)-(36 * 12)*0.25;
    }
              
}


function checkFunction(){
    if (billingToggle.checked == true){
        annual.style.display = "block";
    }
    else{
        annual.style.display="none"
    }
}





    
