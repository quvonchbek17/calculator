let calcForm = document.querySelector(".calc-form")
let moneySelect = document.querySelector(".money-type")
let result12Month = document.querySelector(".result-usz-12-month")
let result6Month = document.querySelector(".result-usz-6-month")
let moneyInput = document.querySelector(".money-input")

let type = ""

calcForm.addEventListener("submit", function(e) {
    e.preventDefault()

    if(type != ""){
        let money = moneyInput.value*1
        if(type == "usz"){
            let sum12 = ((money/0.85) + 0.44)*0.12
            let sum6 = ((money/0.85)*1.26)/6
            result12Month.textContent = `12 oyga: ${Math.floor(sum12).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm`
            result6Month.textContent = `6 oyga: ${Math.floor(sum6).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm`
        } else if(type == "usd"){
            let sum12 = ((money*12600/0.85) +0.44)*0.12
            let sum6 = ((money*12600/0.85)*1.26)/6
            result12Month.textContent = `12 oyga: ${Math.floor(sum12).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm`
            result6Month.textContent = `6 oyga: ${Math.floor(sum6).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm`
        }
    } else {
        alert("Pul birligini tanlang !")
    }


})

moneySelect.addEventListener("change", function(e){
    type = e.target.value
})

// moneyInput.addEventListener("input", function(e){
//                let value

//                if(moneyInput.placeholder == "Miqdorni kiriting"){
//                 value = moneyInput.value;
//                } else {
//                  value = moneyInput.placeholder.split(" ").push(moneyInput.value).filter(el => el != " ").join("")
//                }
//                value = value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
//                if(moneyInput.placeholder == "Miqdorni kiriting"){
//                 moneyInput.placeholder = value
//                } else if(moneyInput.placeholder == ""){
//                 moneyInput.placeholder = "Miqdorni kiriting"
//                 moneyInput.value = "";
//                }
// })