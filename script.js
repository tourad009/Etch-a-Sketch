document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#grid'); 
    const resizeButton = document.getElementById('resizeButton');
    const containerSize = 500;

    function createGrid(size) {
        container.innerHTML = ''; 

        const itemSize = containerSize / size; 

        for (let i = 0; i < size * size; i++) {
            const div = document.createElement('div');
            div.className = 'grid-item';
            div.style.width = `${itemSize}px`;
            div.style.height = `${itemSize}px`;
            container.appendChild(div);
        }
    }

    createGrid(16); // Initial Grid

    resizeButton.addEventListener('click', () => {
        const newSize = parseInt(prompt("Enter number of squares by side for the new grid: "), 10);

        if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
            alert('Please enter a valid number.');
            return;
        }

        createGrid(newSize); 
    });

    container.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('grid-item')) {
            event.target.classList.add('hovered');
        }
    });

    container.addEventListener('mouseout', (event) => {
        if (event.target.classList.contains('grid-item')) {
            event.target.classList.remove('hovered');
        }
    });
});
