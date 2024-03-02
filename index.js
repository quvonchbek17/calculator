let calcForm = document.querySelector(".calc-form")
let moneySelect = document.querySelector(".money-type")
let resultUsz = document.querySelector(".result-usz")
let resultUsd = document.querySelector(".result-usd")
let moneyInput = document.querySelector(".money-input")

let type = ""

calcForm.addEventListener("submit", function(e) {
    e.preventDefault()

    if(type != ""){
        let money = moneyInput.value*1
        if(type == "usz"){
            let sum = ((money/0.85) + 0.44)*0.12
            let dollar = (((money/12600)/0.85) + 0.44)*0.12
            resultUsz.textContent = `Natija so'mda: ${sum.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm`
            resultUsd.textContent = `Natija dollarda: ${dollar.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} $`
        } else if(type == "usd"){
            let sum = ((money*12600/0.85) + 0.44)*0.12
            let dollar = ((money/0.85) + 0.44)*0.12
            resultUsz.textContent = `Natija so'mda: ${sum.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm`
            resultUsd.textContent = `Natija dollarda: ${dollar.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} $`
        }
    } else {
        alert("Pul birligini tanlang !")
    }


})

moneySelect.addEventListener("change", function(e){
    type = e.target.value
})
