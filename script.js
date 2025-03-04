// script.js

function toggleItems(categoryId) {
    var categoryContent = document.getElementById(categoryId);
    if (categoryContent.style.display === "block") {
        categoryContent.style.display = "none";
    } else {
        categoryContent.style.display = "block";
    }
}