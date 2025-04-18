//Get references to HTML elements
const costInput = document.getElementById('cost');
const litersInput = document.getElementById('liters');
const calculateBtn = document.getElementById('calculateBtn');
const totalDisplay = document.getElementById('total');

//Function to calculate the total cost
function calculateTotal() {
    //Get the input values
    const costPerLiter = parseFloat(costInput.value);
    const liters = parseFloat(litersInput.value);

    //Calculate the total cost
    const total = costPerLiter * liters;

    //Display the total cost in the 'total' paragraph
    totalDisplay.textContent = `Total Cost: $${total.toFixed(2)}`;
}

//Calculate the total when the button is clicked
calculateBtn.addEventListener('click', calculateTotal);
