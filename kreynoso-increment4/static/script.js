// MonoMuse - script.js

// ===== Console Practice (Increment 3) =====

var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

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


// ===== Time-Based Greeting (Increment 3) =====

var now = new Date();
var hour = now.getHours();

function greeting(h) {
    var greetingEl = document.getElementById("greeting");

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


// ===== Dynamic Footer Year (Increment 3) =====

function addYear() {
    var yearEl = document.getElementById("copyYear");
    if (yearEl) {
        var currentYear = new Date().getFullYear();
        yearEl.innerHTML = "&copy; " + currentYear + " MonoMuse. All rights reserved.";
    }
}


// ===== Active Navigation Bar (Increment 4) =====

function ActiveNav() {
    var navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

ActiveNav();


// ===== Buy Tickets - Reveal Form (Increment 4) =====

function showTicketForm() {
    var ticketForm = document.getElementById("ticketForm");
    if (ticketForm) {
        ticketForm.style.display = "block";
        ticketForm.scrollIntoView({ behavior: "smooth" });
    }
}

function submitOrder() {
    alert("Redirecting to payment system.");
}
