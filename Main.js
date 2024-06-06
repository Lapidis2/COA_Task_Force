// @ts-nocheck
document.addEventListener("DOMContentLoaded", function() {
    var grids = document.querySelectorAll('.grid');
   grids.forEach((grid)=>{
    var readMore = grid.querySelector('.read-more');

    grid.addEventListener('mouseenter',()=>{
        readMore.style.display="block"
        
    })
    grid.addEventListener('mouseleave',()=>{
        readMore.style.display='none'
    })
   })
 
    
})
  