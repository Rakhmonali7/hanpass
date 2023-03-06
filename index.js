'use strict'

let input = document.getElementById("input")
let btn = document.getElementById('btn')
let output = document.getElementById("output")
let clearbtn = document.getElementById('clear')
let myTable = document.getElementById('myTable')



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
    if(element == 'A'){
        newArr.push(8)
        arr.push("09:00-18:00")
    }else if(element == 'A1'){
        newArr.push(9)
        arr.push("09:00-19:00") 
    }else if(element == 'A2'){
        newArr.push(10)
        arr.push("09:00-20:00") 
    }else if(element == 'A4'){
        newArr.push(12)
        arr.push("09:00-22:00") 
    }else if(element == 'A반'){
        newArr.push(4)
        arr.push("09:00-13:00") 
    }else if(element == '반A'){
        newArr.push(4)
        arr.push("14:00-18:00") 
    }else if(element == '1B'){
        newArr.push(7)
        arr.push("10:00-18:00") 
    }else if(element == 'B'){
        newArr.push(8)
        arr.push("10:00-19:00") 
    }else if(element == 'B1'){
        newArr.push(9)
        arr.push("10:00-20:00") 
    }else if(element == 'B2'){
        newArr.push(10)
        arr.push("10:00-21:00") 
    }else if(element == 'B3'){
        newArr.push(11)
        arr.push("10:00-22:00") 
    }else if(element == 'B반'){
        newArr.push(4)
        arr.push("10:00-14:00") 
    }else if(element == '반B'){
        newArr.push(4)
        arr.push("15:00-19:00") 
    }else if(element == 'E'){
        newArr.push(8)
        arr.push("13:00-22:00") 
    }else if(element == 'E1'){
        newArr.push(9)
        arr.push("12:00-22:00") 
    }else if(element == 'E2'){
        newArr.push(10)
        arr.push("11:00-22:00") 
    }else if(element == '2E'){
        newArr.push(6)
        arr.push("16:00-22:00") 
    }else if(element == '1E'){
        newArr.push(7)
        arr.push("14:00-22:00") 
    }else if(element == '반E'){
        newArr.push(4)
        arr.push("18:00-22:00") 
    }else if(element == 'E반'){
        newArr.push(4)
        arr.push("13:00-17:00") 
    }else if(element == 'C'){
        newArr.push(8)
        arr.push("11:00-20:00") 
    }else if(element == 'D'){
        newArr.push(8)
        arr.push("12:00-21:00") 
    }else if(element == 'M'){
        newArr.push(5)
        arr.push("12:00-17:00") 
    }else if(element == 'S'){
        newArr.push(5)
        arr.push("11:00-20:00") 
    }else if(element == 'G'){
        newArr.push(3)
        arr.push("19:00-22:00") 
    }else if(element == 'OS'){
        newArr.push(8)
        arr.push("17:00-22:00") 
    }else if(element == 'OFF'){
        newArr.push(0)
        arr.push("off") 
    }else{
        newArr.push(0)
        arr.push("ERROR") 
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
//revresh window
function refreshWind(){
    // window.parent.location = window.parent.location.href;
    input.value = '';
    output.value= '';
    myTable.innerHTML='';

    document.getElementById('hours').innerText = '?'
    document.getElementById('am1').innerText = '?'
    document.getElementById('tax').innerText = '?'
    document.getElementById('am2').innerText = '?'
}
clearbtn.addEventListener('click', refreshWind)

//Dark mode
var clicked = false
document.querySelector(".cont").addEventListener("click", () => {
    document.querySelector(".sun-logo").classList.toggle("animate-sun");
    document.querySelector(".moon-logo").classList.toggle("animate-moon");
    document.querySelector("body").classList.toggle("dark");
   
    if(clicked == false){
        btn.style.color = '#999999'
        clearbtn.style.color = '#999999'
        clicked = true;
    }else{
        btn.style.color = 'black'
        clearbtn.style.color = 'black'
        clicked = false
    }
    
})




