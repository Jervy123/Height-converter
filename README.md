CM ↔ Feet Converter

A simple web app that converts between centimeters and feet/inches, built with HTML, CSS, and vanilla JavaScript.

Features
Convert centimeters to feet and inches (e.g. 182 → 5'12 is corrected to 6'0 feet)
Convert feet and inches to centimeters (e.g. 5'7 → 170.18 cm)
Accepts decimal feet too (e.g. 5.5 → 167.64 cm)
Toggle between the two conversion modes
How to Use
Open index.html in your browser.
Choose the conversion mode (cm to feet, or feet to cm).
Type your value in the input box.
For cm to feet: enter a number, like 170.
For feet to cm: enter 5'7 (feet and inches) or a plain number like 5.5.
Click the convert button to see the result.
Formulas
Conversion	Formula
Feet to cm	cm = (feet × 30.48) + (inches × 2.54)
cm to feet	feet = floor(cm / 30.48), inches = round((cm / 2.54) % 12)

Reference: 1 foot = 30.48 cm, 1 inch = 2.54 cm.

Examples
Input	Mode	Output
170	cm to feet	5'7 feet
5'7	feet to cm	170.18 cm
5.5	feet to cm	167.64 cm
Built With
HTML
CSS
JavaScript
Project Structure
.
├── index.html
├── style.css
├── script.js
└── README.md
Author

Jervy123

This is one of my beginner projects as I continue learning web development.