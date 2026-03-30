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


// ===== Responsive Hamburger Nav (Increment 5) =====

function toggleNav() {
    var nav = document.querySelector('.nav_bar');
    if (nav) {
        nav.classList.toggle('responsive');
    }
}


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


// ===== Image Gallery / Slideshow (Increment 5) =====

var currentSlide = 0;

function changeSlide(direction) {
    var slides = document.querySelectorAll('.gallery img');
    if (slides.length === 0) return;

    slides[currentSlide].classList.remove('gallery-active');
    currentSlide = currentSlide + direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add('gallery-active');
}


// ===== Checkout Price Calculation =====

function updatePrice() {
    var quantityEl = document.getElementById("quantity");
    var priceEl = document.getElementById("priceDisplay");

    if (quantityEl && priceEl) {
        var qty = parseInt(quantityEl.value);
        if (isNaN(qty) || qty < 1) {
            priceEl.innerHTML = "Total: $0.00";
        } else {
            var total = qty * 18;
            priceEl.innerHTML = "Total: $" + total.toFixed(2);
        }
    }
}


// ===== Checkout Form Validation =====

function validateCheckout() {
    var isValid = true;

    // Clear previous errors
    var errors = document.querySelectorAll('.error-msg');
    errors.forEach(function(el) { el.style.display = 'none'; });

    var name = document.getElementById("name");
    if (name && name.value.trim() === "") {
        showError("name-error", "Please enter your name.");
        isValid = false;
    }

    var email = document.getElementById("email");
    if (email) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            showError("email-error", "Please enter a valid email address.");
            isValid = false;
        }
    }

    var visitDate = document.getElementById("visit-date");
    if (visitDate && visitDate.value === "") {
        showError("date-error", "Please select a visit date.");
        isValid = false;
    }

    var ticketType = document.getElementById("ticket-type");
    if (ticketType && ticketType.value === "") {
        showError("type-error", "Please select a ticket type.");
        isValid = false;
    }

    var quantity = document.getElementById("quantity");
    if (quantity) {
        var qty = parseInt(quantity.value);
        if (isNaN(qty) || qty < 1 || qty > 10) {
            showError("qty-error", "Please enter a quantity between 1 and 10.");
            isValid = false;
        }
    }

    var zip = document.getElementById("zipcode");
    if (zip && zip.value.trim() !== "") {
        var zipPattern = /^\d{5}$/;
        if (!zipPattern.test(zip.value)) {
            showError("zip-error", "Zip code must be exactly 5 digits.");
            isValid = false;
        }
    }

    if (isValid) {
        var qty = parseInt(quantity.value);
        var total = qty * 18;
        sessionStorage.setItem("orderTotal", total.toFixed(2));
        sessionStorage.setItem("orderQty", qty);
        sessionStorage.setItem("orderType", ticketType.options[ticketType.selectedIndex].text);
        sessionStorage.setItem("orderDate", visitDate.value);
        sessionStorage.setItem("orderEmail", email.value);
        window.location.href = "confirmation.html";
    }
}

function showError(id, message) {
    var el = document.getElementById(id);
    if (el) {
        el.innerHTML = message;
        el.style.display = "block";
    }
}


// ===== Confirmation Page =====

function loadConfirmation() {
    var totalEl = document.getElementById("confirmTotal");
    var detailsEl = document.getElementById("confirmDetails");

    if (totalEl && detailsEl) {
        var total = sessionStorage.getItem("orderTotal");
        var qty = sessionStorage.getItem("orderQty");
        var type = sessionStorage.getItem("orderType");
        var date = sessionStorage.getItem("orderDate");
        var email = sessionStorage.getItem("orderEmail");

        if (total) {
            totalEl.innerHTML = "Total Charged: $" + total;
            detailsEl.innerHTML =
                "<p>" + qty + " x " + type + "</p>" +
                "<p>Visit Date: " + date + "</p>" +
                "<p>Confirmation sent to: " + email + "</p>";
        }
    }
}


// ===== Leaflet Map (Increment 5) =====

function initMap() {
    var mapEl = document.getElementById("map");
    if (mapEl && typeof L !== 'undefined') {
        // Fix default marker icon path (prevents black box issue)
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
            iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
        });

        var map = L.map('map').setView([40.4443, -79.9437], 16);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([40.4443, -79.9437]).addTo(map)
            .bindPopup('MonoMuse<br>4721 Forbes Avenue')
            .openPopup();
    }
}

initMap();
