// script.js

document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const categoryId = this.getAttribute('data-category');
            const itemsContainer = document.getElementById(categoryId);

            // Close all other item containers
            document.querySelectorAll('.items-container').forEach(container => {
                if (container.id !== categoryId) {
                    container.style.display = 'none';
                }
            });

            // Toggle the clicked item container
            if (itemsContainer.style.display === 'block') {
                itemsContainer.style.display = 'none';
            } else {
                itemsContainer.style.display = 'block';
            }
        });
    });
});