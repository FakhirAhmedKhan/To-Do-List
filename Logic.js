// File: Logic.js
// Description: This script handles the functionality of a simple to-do list application.
// It allows users to add tasks to the list and remove them when completed.

let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

// Add Event Listener to the button (you need to connect this to a button in HTML, e.g. onclick="Add()")
function Add() {
  if (inputs.value.trim() === "") {
    alert("Please enter a task");
  } else {
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
    text.appendChild(newEle);
    inputs.value = "";

    // Add event listener to trash icon
    newEle.querySelector("i").addEventListener("click", () => {
      newEle.remove();
    });
  }
}
