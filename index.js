'use strict'

let input = document.getElementById("input")
let btn = document.getElementById('btn')
let output = document.getElementById("output")

function getdata(){
    output.innerHTML = input.value;
    let data = output.innerText
    let fullAmount
let tax
let amountYouReceive
let content = data.replace(/\s+/g, ' ').trim().split(' ')

let newArr = [];

for(let element of content){
    if(element == 'B3'){
        newArr.push(11)
    }else if(element == 'G'){
        newArr.push(3)
    }else if(element == 'A반'){
        newArr.push(4)
    }else if(element == 'A4'){
        newArr.push(12)
    }
    else if(element == '반E'){
        newArr.push(4)
    }
    else if(element == 'M'){
        newArr.push(5)
    }
    else if(element == 'OFF'){
        continue
    }
    else{
        newArr.push(8) 
    }
}
console.log(newArr)
let totalHours = newArr.reduce( (acc, curr)=> {
   return acc + curr
 });
console.log(totalHours);
fullAmount = totalHours * 10000 
tax = fullAmount * 0.033
amountYouReceive = fullAmount - tax

document.getElementById('hours').innerText = totalHours
document.getElementById('am1').innerText = fullAmount
document.getElementById('tax').innerText = tax
document.getElementById('am2').innerText = amountYouReceive 
}

btn.addEventListener('click', getdata)

// let data = prompt("Enter your shifts right here: ")
