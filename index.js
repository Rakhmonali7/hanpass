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
var newArr = [];
var arr = [];

for(let element of content){
    if(element == 'B3'){
        newArr.push(11)
        arr.push("10:00-22:00")
    }else if(element == 'G'){
        newArr.push(3)
        arr.push("19:00-22:00") 
    }else if(element == 'A2'){
        newArr.push(10)
        arr.push("09:00-20:00") 
    }else if(element == 'A'){
        newArr.push(8)
        arr.push("09:00-18:00") 
    }else if(element == 'B'){
        newArr.push(8)
        arr.push("10:00-19:00") 
    }else if(element == 'A반'){
        newArr.push(4)
        arr.push("09:00-13:00")
    }else if(element == 'B2'){
        newArr.push(10)
        arr.push("10:00-21:00")
    }
    else if(element == 'A4'){
        newArr.push(12)
        arr.push("09:00-22:00")
    }
    else if(element == '반E'){
        newArr.push(4)
        arr.push("18:00-22:00")
    }
    else if(element == 'E'){
        newArr.push(8)
        arr.push("13:00-22:00")
    }
    else if(element == 'M'){
        newArr.push(5)
        arr.push("12:00-17:00")
    }
    else if(element == 'J'){
        newArr.push(6)
        arr.push("16:00-22:00")
    }
    else if(element == 'OFF'){
        newArr.push(0)
        arr.push("Off ")
    }
    else if(element == 'A1'){
        newArr.push(9)
        arr.push("9:00-19:00")
    }
    else{
        newArr.push(8)
        arr.push("else") 
    }
}

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

console.log(newArr);
console.log(arr);
function buildTable(tabdata){
    var table = document.getElementById('myTable')
    for(let i = 0; i<tabdata.length; i++){
        var row = `
        <tr>
            <td>${arr[i]}</td>
            <td>${newArr[i]}</td>
        </tr>`
        table.innerHTML += row;
    }
    
}
console.log(buildTable(newArr));



}

btn.addEventListener('click', getdata)


// // let data = prompt("Enter your shifts right here: ")
// // This is test for git check





