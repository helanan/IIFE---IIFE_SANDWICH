// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat");
var breadChooser = document.getElementById("bread");
var cheeseChooser = document.getElementById("cheese");
var condimentsChooser = document.getElementById("condiments");
var veggiesChooser = document.getElementById("veggies");
var finalOutput = document.getElementById("output");




/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Determine the price of the topping chosen
  var toppingPrice = SandwichMaker.addMeat(selectedTopping)
  // Add the topping to the SandwichMaker to increase the total price
  SandwichMaker.addTopping(toppingPrice);
  finalOutput.innerHTML = SandwichMaker.gettotalPrice();
});

breadChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  var toppingPrice = SandwichMaker.addBread(selectedTopping)
  SandwichMaker.addTopping(toppingPrice);
});

cheeseChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  var toppingPrice = SandwichMaker.addCheese(selectedTopping)
  SandwichMaker.addTopping(toppingPrice);
});

veggiesChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  var toppingPrice = SandwichMaker.addVeggies(selectedTopping)
  SandwichMaker.addTopping(toppingPrice);
});

condimentsChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
  var toppingPrice = SandwichMaker.addCondiments(selectedTopping)
  SandwichMaker.addTopping(toppingPrice);
});

 finalOutput.innerHTML = SandwichMaker.gettotalPrice()



