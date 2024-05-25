# BrainJS

BrainJS is a JavaScript library for compiling Brainf**k code directly in the web browser.

## Installation:

To use BrainJS, include the library in your HTML file:

```html
<script src="https://raw.githubusercontent.com/SquirrelCorn/BrainJS/main/lib.js"></script>

Usage:
Current Library Version:

You can check the current version of the BrainJS library:

javascript

brainjs.version

Compiling Brainf**k Code:

You can use the compile method to compile Brainf**k code:

javascript

brainjs.compile(BrainF**k, Ender);

    BrainF**k: The Brainf**k code to be compiled (string).
    Ender: Optional parameter specifying the output destination:
        If not provided, the output will be printed to the console.
        You can pass a callback function to handle the output differently (e.g., display in a UI element).

Example:

javascript

// Compile Brainf**k code and display output in a UI element with ID "output"
brainjs.compile(",.+.", "Hello", function(output) {
    document.getElementById("output").textContent = output;
});
