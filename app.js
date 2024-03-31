
const inputNumber = document.querySelectorAll(".number");
const inputArithemic = document.querySelectorAll(".operation");
const inputErgebnis = document.querySelectorAll(".Ergebnis");
let screen = document.querySelector("textarea");

        for (let i = 0; i<inputNumber.length; i++){
            inputNumber[i].addEventListener("click", (e) => {
                const Zahl1= Number(inputNumber[i].innerHTML)
                       screen.value = Zahl1

                       for (let i = 0; i<inputArithemic.length;i++){
                        inputArithemic[i].addEventListener("click", () => {
                        arithemic = inputArithemic[i].innerHTML
                                screen.value =`${Zahl1} ${arithemic}`;

                                for (let i = 0; i<inputNumber.length; i++){
                                    inputNumber[i].addEventListener("click", () =>{
                                        Zahl2 = Number(inputNumber[i].innerHTML)
                                                screen.value = `${Zahl1} ${arithemic} ${Zahl2}`


                                                for (let i=0; i<inputErgebnis.length;i++){
                                                    inputErgebnis[i].addEventListener("click", () =>{
                                                        Ergebnis = inputErgebnis[i].innerHTML
                                                            if(arithemic == "+"){
                                                                screen.value = Zahl1 + Zahl2
                                                            }

                                                            if(arithemic == "-"){
                                                                screen.value = Zahl1 - Zahl2
                                                            }

                                                            if(arithemic == "x"){
                                                                screen.value = Zahl1 * Zahl2
                                                            }
                                                            
                                                            if(arithemic == "/"){
                                                                screen.value = Zahl1 / Zahl2
                                                            }                                                  
                                                            
                                                    })
                                                }
                                            
                                    })
                                }
    })
    }
    
    })
    }
    
                            
                               

