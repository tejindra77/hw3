# hw3

# Multiplication Table Generator

This is a single-page web application for generating multiplication tables dynamically based on user input.

## How to Use

1. Enter starting and ending numbers for both horizontal and vertical axes of the multiplication table.
2. Click on the "Generate Table" button.
3. The multiplication table will be displayed below the form.

## Requirements

- The program should be able to handle at least numbers between -50 to 50.
- Any unexpected input from the user should be handled gracefully (validation with JavaScript and proper useful error message should be displayed; no popup windows).
- The page should not render unresponsive when a large number is given as input. This should be error handled and prevented.
- The generated table should be nicely formatted; The table should be placed in a scrollable container, with two headers (top row and first column fixed).
- The table should still display in a reasonable way when it is bigger than the screen size.

## Project Structure

- `index.html`: HTML file containing the form and table container.
- `style.css`: CSS file for styling the form and table.
- `script.js`: JavaScript file for handling form submission and generating the multiplication table dynamically.
