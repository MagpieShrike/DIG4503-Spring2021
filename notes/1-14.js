// VARIABLES //
let varTest = 5;        // any variable whose value will change
const varTest2 = 6;      // any variable whose value will not or should not change

// FUNCTIONS //
    // original 
    function functionTest() {

    }

    // Arrow Function
    () => {}

// OBJECT //
    // Individual variables
    const color = "orange";
    const legs = 4;
    const hasTail = true;

    // Put into an object, note : and {}; and ,
    // color, legs, and hasTail are properties of the object "cat"
    const cat = {
        color : "orange",
        legs : 4,
        hasTail : true,
        example: function() {       // example is a property with a function as a value
            console.log("Hi!");     // method
        }
    };

    // Access Properties of Objects using Dot Notation
    const saveColor = cat.color;    // object.property

// TERMINAL //
    // Terminal > New Terminal > bash
    // use "node" to run javascript files in terminal
    // node directory/file
    // node ./notes/1-14.js

    cat.example();  // method