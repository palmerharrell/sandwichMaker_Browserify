"use strict";

let CheeseModule = {

  cheesePrices: {
    Turkey: 0.90, 
    Beef: 1.10,
    Chicken: 1.00
  },
  addCheese: function(ingredient) {
    return cheesePrices[ingredient];
  }
  
};

module.exports = CheeseModule;





//    ************* Original Version *************
// // This SandwichMaker IIFE augments the original one
// var SandwichMaker = (function(maker) {

//   // Private variable to store the different meat prices
//   var cheesePrices = {
//   	Swiss: 0.50, 
//   	Cheddar: 0.40,
//   	Provolone: 0.60
//   };

//   // Augment the original object with another method
//   maker.addCheese = function(ingredient) {
//     return cheesePrices[ingredient];
//   };

//   // Return the new, augmented object with the new method on it
//   return maker;
// })(SandwichMaker);
