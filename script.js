// Function to show a specific category and hide the others
function showCategory(categoryId) {
  const categories = document.getElementsByClassName('category-items');
  for (let i = 0; i < categories.length; i++) {
    categories[i].classList.remove('active');
  }
  const categoryItems = document.getElementById(categoryId);
  categoryItems.classList.add('active');
}

// Add items to the hot drinks category
addMenuItem('NESCAFE LATTE', '20', 'hot-drinks');
addMenuItem('CAPPUCCINO', '50', 'hot-drinks');
addMenuItem('HAZELNUT/FRENCH VANILLA', '70', 'hot-drinks');
addMenuItem('HOT CHOCOLATE', '50', 'hot-drinks');
addMenuItem('MOCHA', '60', 'hot-drinks');

// Add items to the cold drinks category
addMenuItem('PREMIUM COLD COFFEE', '80', 'cold-drinks');
addMenuItem('CHOCOLATE CHEESE CAKE', '70', 'cold-drinks');
addMenuItem('HAZELNUT/FRENCH VANILLA', '99', 'cold-drinks');

// Add items to the frappuccino category
addMenuItem('CHOCOLATE OREO FRAPPE', '80', 'frappuccino');
addMenuItem('MOCHA FRAPPE', '99', 'frappuccino');
addMenuItem('LOTUS BISCOFF FRAPPE', '120', 'frappuccino');

// Show the first category by default
document.addEventListener('DOMContentLoaded', function () {
  showCategory('hot-drinks');
});
