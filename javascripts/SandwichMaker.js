"use strict";

let MakerModule = {
  totalPrice: 0,
  addTopping: function(toppingPrice) {
    MakerModule.totalPrice += toppingPrice;
  },
  getTotal: function() {
    return MakerModule.totalPrice;
  }
};

module.exports = MakerModule;

//    ************* Original Version *************
// let SandwichMaker = (function() {

//   // Private variable to store the price
//   var totalPrice = 0;

//   // Return the public interface that other code can interact with
//   return {
//     addTopping: function(toppingPrice) {
//       totalPrice += toppingPrice;
//     },
//     getTotal: function() {
//       return totalPrice;
//     }
//   };
// })();
