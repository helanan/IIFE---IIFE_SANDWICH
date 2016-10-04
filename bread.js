// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(bread) {

  // Private variable to store the different bread prices
  var breadPrices = {
  white: 1.00,
  wheat: .50,
  italian: .75,
  sourdough: .99,
  "No bread" : 0.00
  };


  // Augment the original object with another method
  bread.addBread = function(selectedTopping) {
    toppingPrice = breadPrices[selectedTopping];
    SandwichMaker.addTopping(toppingPrice);
  };

  // Return the new, augmented object with the new method on it
  return newBread;
})(SandwichMaker);