"use strict";

let VeggieModule = {

  veggiePrices: {
    Tomato: 0.50, 
    Onion: 0.40,
    Pickles: 0.20
  },
  addVeggie: function(ingredient) {
    return VeggieModule.veggiePrices[ingredient];
  }
  
};

module.exports = VeggieModule;





//    ************* Original Version *************
// // This SandwichMaker IIFE augments the original one
// var SandwichMaker = (function(maker) {

//   // Private variable to store the different meat prices
//   var veggiePrices = {
//   	Tomato: 0.50, 
//   	Onion: 0.40,
//   	Pickles: 0.20
//   };

//   // Augment the original object with another method
//   maker.addVeggie = function(ingredient) {
//     return veggiePrices[ingredient];
//   };

//   // Return the new, augmented object with the new method on it
//   return maker;
// })(SandwichMaker);
