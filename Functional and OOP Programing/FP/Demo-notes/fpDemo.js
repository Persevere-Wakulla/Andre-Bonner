// declarative
//? 5 multiple little functions than one big function
// Pure Functions
calculateTip(500.29, 30);
totalBill(500.29, calculateTip(500.29, 30));

// Display Data



function calculateTip(number, percentage) {
  const tip = percentage / 100;
  return number * tip;
}

function totalBill(value, tip) {
  return value + tip;
}




//* ie: split bigger functions into smaller ones
// tip calculator
// array of bills
