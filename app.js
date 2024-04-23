
const inputNumber = document.querySelectorAll(".number");
const inputArithemic = document.querySelectorAll(".operation");
const ButtonResult = document.querySelector(".Ergebnis");
let screen = document.querySelector("textarea");
const delAll = document.querySelector(".C");
const delLast = document.querySelector(".delete")

// put in Number
for (let i = 0; i<inputNumber.length; i++){
    inputNumber[i].addEventListener("click", (e) => {
        if(inputNumber[i].innerHTML = ","){
            screen.innerHTML += "."
        } else {   
            const number= Number(inputNumber[i].innerHTML)
            screen.innerHTML += number
        }
        
       
 })}



// put in Operation
for (let i = 0; i<inputArithemic.length; i++){
    inputArithemic[i].addEventListener("click", (e) => {
        const operation= inputArithemic[i].innerHTML
        
        if(screen.innerHTML == ""){
            alert("Bitte Zahl eingeben")
        }else if(operation == "+"){
            screen.innerHTML += " + "
        }
        
        if(operation == "-"){
            screen.innerHTML += " - "
        }
        if(operation == "x"){
            screen.innerHTML += " * "
        }
        if(operation == "/"){
            screen.innerHTML += " / "

        }
        
        
 })}




// result 
ButtonResult.addEventListener("click", e =>{
    result = eval(screen.innerHTML)
    screen.innerHTML = result
})


// delete All

delAll.addEventListener("click", e =>{
    screen.innerHTML = ""
})



//delete Last
delLast.addEventListener("click", e =>{
    if(screen.innerHTML.endsWith(' ')) {
        screen.innerHTML = screen.innerHTML.slice(0, -3)
    } else {
        screen.innerHTML = screen.innerHTML.slice(0, -1)
    }
    
})


