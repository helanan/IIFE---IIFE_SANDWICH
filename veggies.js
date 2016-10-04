// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(veggies) {

  // Private variable to store the different meat prices
  var veggies = {
  lettuce: 1.00,
  tomato: .50,
  hotpeppers: .75,
  pickles: .99,
  "No veggies" : 0.00
  }


  // Augment the original object with another method
  veggies.addVeggies = function(toppingPrice) {
    toppingPrice = objectVeggies[selectedTopping];
    SandwichMaker.addTopping(toppingPrice);
  };

  // Return the new, augmented object with the new method on it
  return objectVeggies;
})(SandwichMaker);