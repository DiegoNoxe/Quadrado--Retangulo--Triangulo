document.addEventListener('keydown', function(event) { 
    const bola = document.getElementById('bola'); 
    let left = parseInt(window.getComputedStyle(bola).getPropertyValue('left')) || 50; 
    let top = parseInt(window.getComputedStyle(bola).getPropertyValue('top')) || 50; 

    switch (event.key) { 
        case 'ArrowLeft' : 
        case 'A':
            bola.style.left = `${left - 10}px`; 
            break;
        case 'ArrowRight':
        case 'D':
            bola.style.left = `${left + 10}px`; 
            break;
        case 'ArrowUp': 
        case 'W':
            bola.style.top = `${top - 10}px`; 
            break;
        case 'ArrowDown':
        case 'S': 
            bola.style.top = `${top + 10}px`; 
            break;
    }
});
