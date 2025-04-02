document.addEventListener('DOMContentLoaded ```javascript ', function() {
        const filters = document.querySelectorAll('.filter');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
    
        filters.forEach(filter => {
            filter.addEventListener('click', function(e) {
                e.preventDefault();
                const filterValue = this.getAttribute('data-filter');
    
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    });