// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(condiments) {

  // Private variable to store the different meat prices
  var condimentsPrices = {
  mayo: .50,
  vinegar: .25,
  oil: .75,
  'No Condiments' : 0.00
  };


  // Augment the original object with another method
  condiments.addCondiments = function(newCondiments) {
    toppingPrice = veggiesPrices[selectedTopping];
    SandwichMaker.addTopping(toppingPrice);
  };

  // Return the new, augmented object with the new method on it
  return condiments;
})(SandwichMaker);