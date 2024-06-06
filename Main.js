// @ts-nocheck
document.addEventListener("DOMContentLoaded", function() {
    var grids = document.querySelectorAll('.grid');

    grids.forEach((grid) => {
        var readMore = grid.querySelector('.read-more');

        grid.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) { 
                readMore.style.display = "block";
            }
        });

        grid.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) { 
                readMore.style.display = 'none';
            }
        });
    });
});
