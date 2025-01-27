let sum1 = document.getElementById("sum");
let input1 = document.getElementById("i");
let input2 = document.getElementById("i1");
let totalSum = document.getElementById("totalsum");

// Function to calculate sum
function calculateSum() {
    let value1 = Number(input1.value);  // Get value from first input and convert to number
    let value2 = Number(input2.value);  // Get value from second input and convert to number
    totalSum.innerHTML = value1 + value2;  // Display sum in totalsum div
}

// Attach event listener to the button
sum1.addEventListener("click", calculateSum);
