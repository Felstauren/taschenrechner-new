
const Number0 = document.querySelector("#number0")
const Number1 = document.querySelector("#number1")
const Number2 = document.querySelector("#number2")
const Number3 = document.querySelector("#number3")
const Number4 = document.querySelector("#number4")
const Number5 = document.querySelector("#number5")
const Number6 = document.querySelector("#number6")
const Number7 = document.querySelector("#number7")
const Number8 = document.querySelector("#number8")
const Number9 = document.querySelector("#number9")

const Addition = document.querySelector("#Addition")
const Substraction = document.querySelector("#Substraction")
const Multiplikation = document.querySelector("#Multiplikation")
const Division = document.querySelector("#Division")



let Zahl1 = localStorage.getItem("Zahl1")
let screen1 = document.querySelector("#screen")

if (!Zahl1){
    Zahl1 = 0
}

Number0.addEventListener("click" , e =>screen1.innerText = e.target.innerText)
Number1.addEventListener("click" , e =>screen1.innerText = e.target.innerText)
Number2.addEventListener("click" , e =>screen1.innerText = e.target.innerText)
Number3.addEventListener("click" , e =>screen1.innerText = e.target.innerText)
Number4.addEventListener("click" , e =>screen1.innerText = e.target.innerText)
Number5.addEventListener("click" , e =>screen1.innerText = e.target.innerText)
Number6.addEventListener("click" , e =>screen1.innerText = e.target.innerText)
Number7.addEventListener("click" , e =>screen1.innerText = e.target.innerText)
Number8.addEventListener("click" , e =>screen1.innerText = e.target.innerText)
Number9.addEventListener("click" , e =>screen1.innerText = e.target.innerText)



screen1.innerText = Zahl1


if(screen1 > 1){
    Addition.addEventListener("click" , e =>{
        let arithmetic_sign = "+"
        Addition.style.filter = ("brightness(1.3)")

    })

    Substraction.addEventListener("click" , e =>{
        let arithmetic_sign = "-"
        Substraction.filter = ("brightness(1.3)")
    })

    Multiplikation.addEventListener("click" , e =>{
        let arithmetic_sign = "+"
        Multiplikation.style.filter = ("brightness(1.3)")
    })

    Division.addEventListener("click" , e =>{
        let arithmetic_sign = "+"
        Division.style.filter = ("brightness(1.3)")
    })
}

if(Addition.style.filter === "brightness(1.3)" || Substraction.style.filter === "brightness(1.3)" || Multiplikation.style.filter === "brightness(1.3)" || Division.style.filter === "brightness(1.3)" ){
    screen1 = 0
}
