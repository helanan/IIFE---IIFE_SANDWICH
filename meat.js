// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(meat) {
  var toppingPrice;
  // Private variable to store the different meat prices
  var meat = {
  	pepperoni: .5,
  	salami: .45,
  	turkey: .75,
  	ham: 1.00,
  	"No Meat" : 0.00
  };

  // Augment the original object with another method
  meat.addMeat = function(selectedTopping) {
    toppingPrice = meat[selectedTopping];
    SandwichMaker.addTopping(toppingPrice);
  };

  // Return the new, augmented object with the new method on it
  return newMeat;
})(SandwichMaker);