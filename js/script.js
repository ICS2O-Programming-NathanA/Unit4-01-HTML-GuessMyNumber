// Copyright (c) 2022 Nathan Araujo All rights reserved
//
// Created by: Nathan Araujo
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function sees if you can guess what the computer will generate
 */
function numberGen () {
  	// initialize variables
	const MAX = 6
	const MIN = 1
	
	// get user input
	let number = parseInt(document.getElementById('number').value)

	// generate number
	let generate = Math.floor((Math.random() * MAX) + MIN);

  // if the number is equal to the generated number then display Correct
  if (number == generate) {
    document.getElementById("display").innerHTML = "Correct! Play Again!";
  }
		
  // if the number is not equal to the generated number then display Incorrect	
	else {
    document.getElementById("display").innerHTML = "Incorrect! The number was " + generate + " Play Again!";
  }
}