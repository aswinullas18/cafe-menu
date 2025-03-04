// script.js

// Function to toggle category visibility
function toggleCategory(categoryId) {
    var categoryContent = document.getElementById(categoryId);
    if (categoryContent.style.display === "block") {
        categoryContent.style.display = "none";
    } else {
        categoryContent.style.display = "block";
    }
}

// Functions to increase/decrease item count
function increase(itemId) {
    var itemCount = document.getElementById(itemId);
    itemCount.textContent = parseInt(itemCount.textContent) + 1;
    updateCartCount();
}

function decrease(itemId) {
    var itemCount = document.getElementById(itemId);
    var count = parseInt(itemCount.textContent);
    if (count > 0) {
        itemCount.textContent = count - 1;
        updateCartCount();
    }
}

// Function to update the cart count
function updateCartCount() {
    var cartCount = document.getElementById("cart-count");
    var totalCount = 0;
    var menuItems = document.querySelectorAll(".menu-item span");
    menuItems.forEach(function(item) {
        totalCount += parseInt(item.textContent);
    });
    cartCount.textContent = totalCount;
}

// Event listener for Checkout button
var checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", function() {
    var customerName = document.getElementById("customer-name").value;
    var tableNumber = document.getElementById("table-number").value;
    var cartItemsList = document.getElementById("cart-items").querySelectorAll("li"); // Get all cart items
    var cartItemsText = "";

    // Build the cart items text
    cartItemsList.forEach(function(item) {
        cartItemsText += item.textContent + "\n";
    });

    // Check if the cart is empty
    if (cartItemsText.trim() === "") {
        alert("Your cart is empty. Please add items to your cart.");
        return; // Stop the checkout process
    }

    // Check if customer name and table number are provided
    if (customerName.trim() === "" || tableNumber.trim() === "") {
        alert("Please enter your name and table number.");
        return; // Stop the checkout process
    }

    // Construct the WhatsApp message
    var whatsappMessage = "Order from " + customerName + " (Table " + tableNumber + "):\n\n" + cartItemsText;

    // Encode the message for WhatsApp URL
    var encodedMessage = encodeURIComponent(whatsappMessage);

    // Redirect to WhatsApp with the message
    window.open("https://wa.me/918129553200?text=" + encodedMessage, "_blank");

    // Clear the cart after sending the order
    document.getElementById("cart-items").innerHTML = "";
    document.getElementById("customer-name").value = "";
    document.getElementById("table-number").value = "";
    var menuItems = document.querySelectorAll(".menu-item span");

    menuItems.forEach(function(item){
        item.textContent = "0";
    });

    updateCartCount();

    //Hide the cart box after checkout
    cartBox.style.display = "none";
});

// Event listener for Cart icon
var cartIcon = document.getElementById("cart-icon");
var cartBox = document.getElementById("cart-box");
cartIcon.addEventListener("click", function() {
    if (cartBox.style.display === "block") {
        cartBox.style.display = "none";
    } else {
        cartBox.style.display = "block";
    }
});