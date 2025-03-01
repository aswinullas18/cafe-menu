function addMenuItem(name, price, description, category) {
    const categoryContainer = document.getElementById(category);
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `
      <div class="item-name">${name}</div>
      <div class="item-price">${price}</div>
      <div class="item-description">${description}</div>
    `;
    categoryContainer.appendChild(menuItem);
  }
  
  function showCategory(categoryId) {
    const categories = document.getElementsByClassName('category-items');
    for (let i = 0; i < categories.length; i++) {
      categories[i].style.display = 'none';
    }
    const categoryItems = document.getElementById(categoryId);
    categoryItems.style.display = 'block';
  }
  
  // Add items to the hot drinks category
  addMenuItem('NESCAFE LATTE', '20', '', 'hot-drinks');
  addMenuItem('CAPPUCCINO', '50', '', 'hot-drinks');
  addMenuItem('HAZELNUT/FRENCH VANILLA', '70', '', 'hot-drinks');
  addMenuItem('HOT CHOCOLATE', '50', '', 'hot-drinks');
  addMenuItem('MOCHA', '60', '', 'hot-drinks');
  addMenuItem('PREMIUM BADAM MILK', '40', '', 'hot-drinks');
  addMenuItem('HAZELNUT/FRENCH VANILLA', '70', '', 'hot-drinks');
  addMenuItem('SARBATH', '25', '', 'hot-drinks');
  addMenuItem('SODA SARBATH', '30', '', 'hot-drinks');
  addMenuItem('MILK SARBATH', '40', '', 'hot-drinks');
  addMenuItem('NORMAL AVIL MILK', '45', '', 'hot-drinks');
  addMenuItem('SPECIAL AVIL MILK', '60', '', 'hot-drinks');
  addMenuItem('ROYAL AVIL MILK', '70', '', 'hot-drinks');
  
  // Add items to the cold drinks category
  addMenuItem('PREMIUM COLD COFFEE', '80', '', 'cold-drinks');
  addMenuItem('CHOCOLATE CHEESE CAKE', '70', '', 'cold-drinks');
  addMenuItem('HAZELNUT/FRENCH VANILLA', '99', '', 'cold-drinks');
  addMenuItem('BLUEBERRY CHEESE CAKE', '70', '', 'cold-drinks');
  addMenuItem('STRAWBERRY CHEESE CAKE', '70', '', 'cold-drinks');
  
  // Add items to the frappuccino category
  addMenuItem('CHOCOLATE OREO FRAPPE', '80', '', 'frappuccino');
  addMenuItem('MOCHA FRAPPE', '99', '', 'frappuccino');
  addMenuItem('LOTUS BISCOFF FRAPPE', '120', '', 'frappuccino');
  
  // Add items to the fries category
  addMenuItem('AMERICAN MUD PIE', '99', '', 'fries');
  addMenuItem('FRENCH FRIES (M)', '60', '', 'fries');
  addMenuItem('FRENCH FRIES (L)', '100', '', 'fries');
  addMenuItem('PERI PERI FRIES (M)', '70', '', 'fries');
  addMenuItem('PERI PERI FRIES (L)', '110', '', 'fries');
  
  // Add items to the kerala special dinner combos category
  addMenuItem('POROTTA + CHICKEN CURRY/STEW', '99', '', 'kerala-special-dinner-combo');
  addMenuItem('PUTTU + CHICKEN CURRY/STEW', '99', '', 'kerala-special-dinner-combo');
  addMenuItem('CHAPPATHI + CHICKEN CURRY/STEW', '99', '', 'kerala-special-dinner-combo');
  addMenuItem('BREAD + CHICKEN CURRY/STEW', '99', '', 'kerala-special-dinner-combo');
  