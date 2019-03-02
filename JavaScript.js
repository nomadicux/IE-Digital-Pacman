// IE Digital Code Challenge 1
// Author: Josh Hiles (2019)
// ***************************************************

// Initalise global variables for coordinates and orientation
var xPos = 0;
var yPos = 0;
var orientation = '';

// Function called when Place button is clicked. 
function start() {
    // Get inputs from text fields and set them to our x and y coordinates
    xPos = parseInt(document.getElementById("startingX").value);
    yPos = parseInt(document.getElementById("startingY").value);

    // Check to make sure that no illegal values (out of bounds) were input
    if (xPos >= 0 && xPos <= 4 && yPos >= 0 && yPos <= 4) {

        // If the coordinate values are valid then set the orientation to selection from
        // drop down menu
        // Drop down menu used to control user input and improve usability.
        orientation = document.getElementById("startingOrientation").value;

        // Hide placement inputs div once they have been submitted.
        // Show the movement control div.
        // This keeps the screen less cluttered and confusing for the user.
        document.getElementById("startingScreen").style.display = "none";
        document.getElementById("gameScreen").style.display = "block";

        // Output the current location and orientation of pacman.
        document.getElementById("output").innerHTML = xPos + ", " + yPos + ", " + orientation;
    } else {
        // If coordinate values are not valid, then let the user know and suggest valid inputs.
        alert("That is not a valid location. Please enter a number between 0-4");
    }
}

// Restart function is called when the user wants to re-place packman in a different location.
function restart() {
    // Reset values
    xPos = '';
    yPos = '';
    orientation = '';

    // reset the input fields, so they they're empty
    document.getElementById("startingX").value = '';
    document.getElementById("startingY").value = '';

    // hide the movement controls div and re-show the initial placemnt controls div
    document.getElementById("startingScreen").style.display = "block";
    document.getElementById("gameScreen").style.display = "none";

    // reset the output section to original text
    document.getElementById("output").innerHTML = 'Positional output will be here';
}

// Check the current orientation of the player and set new orientation to replicate
// a left-hand turn.
function left() {

    // Check orientation and update accordingly
    if (orientation.toUpperCase() === "NORTH") {
        orientation = 'West';
    }
    else if (orientation.toUpperCase() === "WEST") {
        orientation = 'South';
    }
    else if (orientation.toUpperCase() === "SOUTH") {
        orientation = 'East';
    }
    else if (orientation.toUpperCase() === "EAST") {
        orientation = 'North';
    }

    // Output Pacmans location to the screen each time a move is made
    document.getElementById("output").innerHTML = xPos + ", " + yPos + ", " + orientation;
}

// Check the current orientation of the player and set new orientation to replicate
// a right-hand turn.
function right() {

    // Check orientation and update accordingly
    if (orientation.toUpperCase() === "NORTH") {
        orientation = 'East';
    }
    else if (orientation.toUpperCase() === "WEST") {
        orientation = 'North';
    }
    else if (orientation.toUpperCase() === "SOUTH") {
        orientation = 'West';
    }
    else if (orientation.toUpperCase() === "EAST") {
        orientation = 'South';
    }

    // Output Pacmans location to the screen each time a move is made
    document.getElementById("output").innerHTML = xPos + ", " + yPos + ", " + orientation;
}

// check the current orientation of the player and update the x or y 
// value depending on which direction Pacman is facing.
function move() {
    // Check orientation and move x or y value accordingly
    if (orientation.toUpperCase() === "NORTH") {
        yPos += 1;
    }
    else if (orientation.toUpperCase() === "WEST") {
        xPos -= 1;
    }
    else if (orientation.toUpperCase() === "SOUTH") {
        yPos -= 1;
    }
    else if (orientation.toUpperCase() === "EAST") {
        xPos += 1;
    }

    // Check for any out of bounds moves
    try {
        if (xPos < 0) throw xPos = 0;
        if (xPos > 4) throw xPos = 4;
        if (yPos < 0) throw yPos = 0;
        if (yPos > 4) throw yPos = 4;
    }
    catch(e) {
        // Suggest that the user tries to turn in a different direction
        alert("Oops! You've hit the wall. try turning to face another direction.");
    }

    // Output Pacmans location to the screen each time a move is made
    document.getElementById("output").innerHTML = xPos + ", " + yPos + ", " + orientation;
}
