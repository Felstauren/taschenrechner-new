


function RechnenAddition(){
let x = document.getElementById('add1').value;
let y = document.getElementById('add2').value;
let output = document.querySelector('#output')
x = x.replace(/,/, ".");     // Ersetzt ein Komma in der 
y = y.replace(/,/, ".");     // Zahl durch einen Dezimalpunkt


    if (isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
        output.value = "Fehler: keine Zahl";
      } else {
        output.value = parseFloat(x) + parseFloat(y);
      }
    }


function RechnenSubstraktion(){
  let x = document.querySelector('#input1').value
  let y =document.querySelector('#input2').value
  let output = document.querySelector('#output2')
  x = x.replace(/,/, ".");
  y= y.replace(/,/, ".");

  if(isNaN(parseFloat(x)) || isNaN(parseFloat(y))){
    output.value = "Fehler: keine Zahl"
  } else {
    output.value = parseFloat(x) - parseFloat(y);
  }
}


function RechnenMultiplikation(){
  let x = document.querySelector('#input3').value
  let y =document.querySelector('#input4').value
  let output = document.querySelector('#output3')
  x = x.replace(/,/, ".");
  y= y.replace(/,/, ".");

  if(isNaN(parseFloat(x)) || isNaN(parseFloat(y))){
    output.value = "Fehler: keine Zahl"
  } else {
    output.value = parseFloat(x) * parseFloat(y);
  }
}


function RechnenDivision(){
  let x = document.querySelector('#input5').value
  let y =document.querySelector('#input6').value
  let output = document.querySelector('#output4')
  x = x.replace(/,/, ".");
  y= y.replace(/,/, ".");

  if(isNaN(parseFloat(x)) || isNaN(parseFloat(y))){
    output.value = "Fehler: keine Zahl"
  } else {
    output.value = parseFloat(x) / parseFloat(y);
  }
}
