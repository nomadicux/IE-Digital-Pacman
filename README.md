# IE Digital Pacman

This is the IE code for the IE Digital Code Challenge 1. Task was to create a grid simulation the could take in coordinates and movement from the user and output the updated position. Program logic was written in JavaScript and presented using HTML and CSS.

## Instructions

- To run the code, clone or download repository then open index.html in a browser window.
- Input your starting x and y coordinate positions and select an initial orientation from the drop-down.
- click "Place" to begin.
- Change orientation by selecting either left or right.
- Move in current direction by clicking "Move".
- To reset position click "Re-place".

## Reasoning

- I decided to use a html file for user inputs to make it easier for the user to visulise and understand the controls.
- I used a drop-down menu for orientation selection as well as left and right buttons as we way to control user input and make it clearer on what the valid options were.
- If the player tries to move out of bounds of the 5x5 grid then they are kept in their current position and given a suggestion on how to make a valid move.
- Hiding the starting input screen once Pacman has been placed was to allow the screeen to be less cluttered and options clearer for the user.
- I also wanted to give instant feedback to the user, so the users current location and orientation is given everytime they make an input.
