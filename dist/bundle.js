(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let BreadModule = {

  breadPrices: {
    White: 0.65, 
    Wheat: 0.65,
    Rye: 0.85
  },
  addBread: function(ingredient) {
    return BreadModule.breadPrices[ingredient];
  }

};

module.exports = BreadModule;





//    ************* Original Version *************
// // This SandwichMaker IIFE augments the original one
// var SandwichMaker = (function(maker) {

//   // Private variable to store the different meat prices
//   var breadPrices = {
//   	White: 0.65, 
//   	Wheat: 0.65,
//   	Rye: 0.85
//   };

//   // Augment the original object with another method
//   maker.addBread = function(ingredient) {
//     return breadPrices[ingredient];
//   };

//   // Return the new, augmented object with the new method on it
//   return maker;
// })(SandwichMaker);

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";

let CondimentModule = {

  condimentPrices: {
    Mustard: 0.09, 
    Mayo: 0.12,
    Ketchup: 0.15
  },
  addCondiment: function(ingredient) {
    return CondimentModule.condimentPrices[ingredient];
  }
  
};

module.exports = CondimentModule;





//    ************* Original Version *************
// // This SandwichMaker IIFE augments the original one
// var SandwichMaker = (function(maker) {

//   // Private variable to store the different meat prices
//   var condimentPrices = {
  	// Mustard: 0.09, 
  	// Mayo: 0.12,
  	// Ketchup: 0.15
//   };

//   // Augment the original object with another method
//   maker.addCondiment = function(ingredient) {
//     return condimentPrices[ingredient];
//   };

//   // Return the new, augmented object with the new method on it
//   return maker;
// })(SandwichMaker);

},{}],4:[function(require,module,exports){
"use strict";

let MakerModule = require("./SandwichMaker");
let BreadModule = require("./Bread");
let MeatModule = require("./Meat");
let VeggieModule = require("./Veggies");
let CheeseModule = require("./Cheese");
let CondimentModule = require("./Condiments");

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

var finalSandwichEl = document.getElementById("finalSandwich"); //PH
var finalPriceElContainer = document.getElementById("finalPrice"); //PH
var finalPriceEl = finalPriceElContainer.getElementsByTagName("p")[1]; //PH

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");
var veggieChooser = document.getElementById("veggie-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var condimentChooser = document.getElementById("condiment-chooser");
var breadChooser = document.getElementById("bread-chooser");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", function(event) {
  
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

	 if (selectedTopping !== 'None') {
	  // Determine the price of the topping chosen
	  var meatPrice = MeatModule.addMeat(selectedTopping);

	  // Add the topping to the MakerModule to increase the total price
	  MakerModule.addTopping(meatPrice);

	  finalSandwichEl.innerHTML += `<p>$${meatPrice.toFixed(2)} ${selectedTopping} </p>`;
	  finalPriceEl.innerHTML = `<p>$${MakerModule.getTotal().toFixed(2)}</p>`;
	};
});

// Veggies
veggieChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
	 if (selectedTopping !== 'None') {
	  var veggiePrice = VeggieModule.addVeggie(selectedTopping);
	  MakerModule.addTopping(veggiePrice);
	  finalSandwichEl.innerHTML += `<p>$${veggiePrice.toFixed(2)} ${selectedTopping} </p>`;
	  finalPriceEl.innerHTML = `<p>$${MakerModule.getTotal().toFixed(2)}</p>`;
	};
});

// Cheeses
cheeseChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
	 if (selectedTopping !== 'None') {
	  var cheesePrice = CheeseModule.addCheese(selectedTopping);
	  MakerModule.addTopping(cheesePrice);
	  finalSandwichEl.innerHTML += `<p>$${cheesePrice.toFixed(2)} ${selectedTopping} </p>`;
	  finalPriceEl.innerHTML = `<p>$${MakerModule.getTotal().toFixed(2)}</p>`;
	};
});

// Condiments
condimentChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
	 if (selectedTopping !== 'None') {
	  var condimentPrice = CondimentModule.addCondiment(selectedTopping);
	  MakerModule.addTopping(condimentPrice);
	  finalSandwichEl.innerHTML += `<p>$${condimentPrice.toFixed(2)} ${selectedTopping} </p>`;
	  finalPriceEl.innerHTML = `<p>$${MakerModule.getTotal().toFixed(2)}</p>`;
	};
});

// Breads
breadChooser.addEventListener("change", function(event) {
  selectedTopping = event.target.value;
	 if (selectedTopping !== 'None') {
	  var breadPrice = BreadModule.addBread(selectedTopping);
	  MakerModule.addTopping(breadPrice);
	  finalSandwichEl.innerHTML += `<p>$${breadPrice.toFixed(2)} ${selectedTopping} </p>`;
	  finalPriceEl.innerHTML = `<p>$${MakerModule.getTotal().toFixed(2)}</p>`;
	};
});













},{"./Bread":1,"./Cheese":2,"./Condiments":3,"./Meat":5,"./SandwichMaker":6,"./Veggies":7}],5:[function(require,module,exports){
"use strict";

let MeatModule = {

  meatPrices: {
    Turkey: 0.90, 
    Beef: 1.10,
    Chicken: 1.00
  },
  addMeat: function(ingredient) {
    return MeatModule.meatPrices[ingredient];
  }
  
};

module.exports = MeatModule;





//    ************* Original Version *************
// // This SandwichMaker IIFE augments the original one
// var SandwichMaker = (function(maker) {

//   // Private variable to store the different meat prices
//   var meatPrices = {
//   	Turkey: 0.90, 
//   	Beef: 1.10,
//   	Chicken: 1.00
//   };

//   // Augment the original object with another method
//   maker.addMeat = function(ingredient) {
//     return meatPrices[ingredient];
//   };

//   // Return the new, augmented object with the new method on it
//   return maker;
// })(SandwichMaker);

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}]},{},[4])


//# sourceMappingURL=bundle.js.map
