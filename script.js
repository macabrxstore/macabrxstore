document.addEventListener('DOMContentLoaded', () => {
    // Código para ordenar los productos
    const productGrid = document.getElementById('product-grid');
    const products = Array.from(productGrid.children);

    products.sort((a, b) => {
        const nameA = a.querySelector('p').textContent.toLowerCase().trim();
        const nameB = b.querySelector('p').textContent.toLowerCase().trim();
        
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    products.forEach(product => {
        productGrid.appendChild(product);
    });

    // --- Código para el zoom de las imágenes ---
    const productImages = document.querySelectorAll('.product-item img');

    productImages.forEach(img => {
        img.addEventListener('click', () => {
            if (img.style.transform === 'scale(1.2)') {
                img.style.transform = 'scale(1)';
                img.style.zIndex = '1';
            } else {
                img.style.transform = 'scale(1.2)';
                img.style.zIndex = '10';
            }
        });
    });
});