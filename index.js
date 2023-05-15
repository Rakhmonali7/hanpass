'use strict';

const modals = document.querySelectorAll('.modal'); // Get all modal elements
const overlay = document.querySelector('.overlay'); // Get the overlay element
const btnCloseModals = document.querySelectorAll('.close-modal'); // Get all close buttons
const btnsOpenModals = document.querySelectorAll('.show-modal'); // Get all open buttons

const input = document.getElementById("input");
const btn = document.getElementById('btn');
const output = document.getElementById("output");
const clearbtn = document.getElementById('clear');
const myTable = document.getElementById('myTable');
const hoursElement = document.getElementById('hours');
const am1Element = document.getElementById('am1');
const taxElement = document.getElementById('tax');
const am2Element = document.getElementById('am2');

const shifts = {
  'A': { hours: 8, time: "09:00-18:00" },
  'A1': { hours: 9, time: "09:00-19:00" },
  'A2': { hours: 10, time: "09:00-20:00" },
  'A4': { hours: 12, time: "09:00-22:00" },
  "A반": { hours: 4, time: "09:00-13:00" },
  '반A': { hours: 4, time: "14:00-18:00" },
  "1B": { hours: 7, time: "10:00-18:00" },
  'B': { hours: 8, time: "10:00-19:00" },
  'B1': { hours: 9, time: "10:00-20:00" },
  'B2': { hours: 10, time: "10:00-21:00" },
  'B3': { hours: 11, time: "10:00-22:00" },
  "B반": { hours: 4, time: "10:00-14:00" },
  '반B': { hours: 4, time: "15:00-19:00" },
  'E': { hours: 8, time: "13:00-22:00" },
  'E1': { hours: 9, time: "12:00-22:00" },
  'E2': { hours: 10, time: "11:00-22:00" },
  "2E": { hours: 6, time: "16:00-22:00" },
  "3E": { hours: 7, time: "14:00-22:00" },
  '반E': { hours: 4, time: "18:00-22:00" },
  'E반': { hours: 4, time: "13:00-17:00" },
  'C': { hours: 8, time: "11:00-20:00" },
  'D': { hours: 8, time: "12:00-21:00" },
  'M': { hours: 5, time: "12:00-17:00" },
  'S': { hours: 5, time: "17:00-22:00" },
  'G': { hours: 3, time: "19:00-22:00" },
  'OS': { hours: 8, time: "11:00-20:00" },
  'OFF': { hours: 0, time: "off" },
  'ERROR': { hours: 0, time: "ERROR" }
};

function getShiftData(shift) {
  // Get the corresponding shift data from the shifts object
  return shifts[shift] || shifts.ERROR;
}

function calculatePayment(shifts) {
    let totalHours = 0;
    let fullAmount = 0;
    let tax = 0;
    let amountYouReceive = 0;
  
    for (const shift of shifts) {
      const shiftData = getShiftData(shift);
      totalHours += shiftData.hours;
      const row = `
        <tr>
            <td>${shiftData.time}</td>
            <td>${shiftData.hours}</td>
        </tr>`;
      myTable.innerHTML += row;
    }
  
    fullAmount = totalHours * 10000;
    tax = fullAmount * 0.033;
    amountYouReceive = fullAmount - tax;
  
    hoursElement.innerText = totalHours;
    am1Element.innerText = fullAmount;
    taxElement.innerText = tax;
    am2Element.innerText = amountYouReceive;
    console.log('TEST');
  }
  
  function getdata() {
    output.innerHTML = input.value;
    const data = output.innerText;
    const content = data.replace(/\s+/g, ' ').trim().split(' ');
  
    myTable.innerHTML = '';
    calculatePayment(content);
    console.log('getdata');
  }
  
  btn.addEventListener('click', getdata);
  
  function refreshWind() {
    input.value = '';
    output.value = '';
    myTable.innerHTML = '';
  
    hoursElement.innerText = '?';
    am1Element.innerText = '?';
    taxElement.innerText = '?';
    am2Element.innerText = '?';
  }
  
  
  clearbtn.addEventListener('click', refreshWind);
  
  const btn2 = document.querySelector("#btn2")
  const h1 = document.querySelector("h1")
  let clicked = false;
  document.querySelector(".cont").addEventListener("click", () => {
    document.querySelector(".sun-logo").classList.toggle("animate-sun");
    document.querySelector(".moon-logo").classList.toggle("animate-moon");
    document.querySelector("body").classList.toggle("dark");
  
    if (clicked === false) {
      btn.style.color = '#999999';
      clearbtn.style.color = '#999999';
      btn2.style.color = '#999999'
      h1.style.color = '#999999'
      clicked = true;
    } else {
      btn.style.color = 'black';
      clearbtn.style.color = 'black';
      btn2.style.color = 'black'
      h1.style.color = 'black'
      clicked = false;
    }
  });


  // Modals


// Function to open a modal
var openModal = function (modal) {
  modal.classList.remove('hidden'); // Remove the 'hidden' class from the modal
  overlay.classList.remove('hidden'); // Remove the 'hidden' class from the overlay
};

// Function to close a modal
const closeModal = function (modal) {
  modal.classList.add('hidden'); // Add the 'hidden' class to the modal
  overlay.classList.add('hidden'); // Add the 'hidden' class to the overlay
};

// Add event listeners to open buttons
// btnsOpenModals.forEach(function (btn, index) {
//   btn.addEventListener('click', function () {
//     const modal = modals[index]; // Get the corresponding modal based on index
//     openModal(modal); // Open the modal
//   });
// });
btnsOpenModals.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
    const modal = modals[index];
    console.log(modal); // Get the corresponding modal based on index
    openModal(modal); // Open the modal
  });
});

// Add event listeners to close buttons
btnCloseModals.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
    const modal = modals[index]; // Get the corresponding modal based on index
    closeModal(modal); // Close the modal
  });
});

// Add event listener to overlay for closing modals
overlay.addEventListener('click', function () {
  modals.forEach(function (modal) {
    closeModal(modal); // Close all modals
  });
});

// Add event listener for the 'Escape' key to close modals
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modals.forEach(function (modal) {
      if (!modal.classList.contains('hidden')) {
        closeModal(modal); // Close the modal if it's not hidden
      }
    });
  }
});
const callTwo = function(){
  
}