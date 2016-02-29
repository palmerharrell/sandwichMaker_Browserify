"use strict";

let CheeseModule = {

  cheesePrices: {
    Swiss: 0.50, 
    Cheddar: 0.40,
    Provolone: 0.60
  },
  addCheese: function(ingredient) {
    return CheeseModule.cheesePrices[ingredient];
  }
  
};

module.exports = CheeseModule;





//    ************* Original Version *************
// // This SandwichMaker IIFE augments the original one
// var SandwichMaker = (function(maker) {

//   // Private variable to store the different meat prices
//   var cheesePrices = {
  	// Swiss: 0.50, 
  	// Cheddar: 0.40,
  	// Provolone: 0.60
//   };

//   // Augment the original object with another method
//   maker.addCheese = function(ingredient) {
//     return cheesePrices[ingredient];
//   };

//   // Return the new, augmented object with the new method on it
//   return maker;
// })(SandwichMaker);
