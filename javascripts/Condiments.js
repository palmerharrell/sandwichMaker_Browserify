"use strict";

let CondimentModule = {

  condimentPrices: {
    Turkey: 0.90, 
    Beef: 1.10,
    Chicken: 1.00
  },
  addCondiment: function(ingredient) {
    return condimentPrices[ingredient];
  }
  
};

module.exports = CondimentModule;





//    ************* Original Version *************
// // This SandwichMaker IIFE augments the original one
// var SandwichMaker = (function(maker) {

//   // Private variable to store the different meat prices
//   var condimentPrices = {
//   	Mustard: 0.09, 
//   	Mayo: 0.12,
//   	Ketchup: 0.15
//   };

//   // Augment the original object with another method
//   maker.addCondiment = function(ingredient) {
//     return condimentPrices[ingredient];
//   };

//   // Return the new, augmented object with the new method on it
//   return maker;
// })(SandwichMaker);
