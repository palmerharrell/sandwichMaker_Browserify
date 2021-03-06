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












