// Function to toggle the visibility of items based on the category
function toggleItems(id) {
  // First, get all item containers
  const allItems = document.querySelectorAll('.items-container');
  
  // Close all the open items
  allItems.forEach(item => {
      if (item.id !== id) {
          item.style.display = 'none';
      }
  });

  // Get the current item container to toggle its visibility
  const itemsContainer = document.getElementById(id);
  itemsContainer.style.display = (itemsContainer.style.display === 'none' || itemsContainer.style.display === '') ? 'block' : 'none';
}
