// Get DOM elements
const costInput = document.getElementById('cost');
const litersInput = document.getElementById('liters');
const calculateBtn = document.getElementById('calculateBtn');
const totalDisplay = document.getElementById('total');

// Function to calculate total cost
function calculateTotal() {
    // Get values from inputs
    const costPerLiter = parseFloat(costInput.value);
    const liters = parseFloat(litersInput.value);

    // Calculate total
    const total = costPerLiter * liters;

    // Update result in the <p> tag
    totalDisplay.textContent = `Total Cost: $${total.toFixed(2)}`;
}

// Add event listener to the button
calculateBtn.addEventListener('click', calculateTotal);
