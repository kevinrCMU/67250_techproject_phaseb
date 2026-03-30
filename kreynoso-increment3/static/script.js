// MonoMuse - script.js

// ===== Part 2: JavaScript Basics (Console Practice) =====

// Variable Declarations and Console Output
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

// Basic Function
function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

sumnPrint(x, y);
sumnPrint(A, B);

// Conditional Statement
if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

// Arrays + Loops
var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// forEach version of findTheBanana
function findTheBanana(arr) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("Found the Banana!");
        }
    });
}

// Commented out so alerts don't fire on every page load
// findTheBanana(L1);
// findTheBanana(L2);


// ===== Part 3: Time-Based Greeting (DOM Manipulation) =====

var now = new Date();
var hour = now.getHours();

function greeting(h) {
    var greetingEl = document.getElementById("greeting");

    // Only run if the greeting element exists on this page
    if (greetingEl) {
        if (h < 5 || h >= 20) {
            greetingEl.innerHTML = "Good night. Welcome to MonoMuse.";
        } else if (h < 12) {
            greetingEl.innerHTML = "Good morning. Welcome to MonoMuse.";
        } else if (h < 18) {
            greetingEl.innerHTML = "Good afternoon. Welcome to MonoMuse.";
        } else {
            greetingEl.innerHTML = "Good evening. Welcome to MonoMuse.";
        }
    }
}

greeting(hour);


// ===== Part 4: Dynamic Footer Year =====

function addYear() {
    var yearEl = document.getElementById("copyYear");
    if (yearEl) {
        var currentYear = new Date().getFullYear();
        yearEl.innerHTML = "&copy; " + currentYear + " MonoMuse. All rights reserved.";
    }
}
