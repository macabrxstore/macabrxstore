document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos el contenedor y todos los productos
    const productGrid = document.getElementById('product-grid');
    const products = Array.from(productGrid.children);

    // Ordenamos los productos alfabéticamente
    products.sort((a, b) => {
        // Obtenemos el texto del nombre del producto (el primer <p>) y lo normalizamos
        const nameA = a.querySelector('p').textContent.toLowerCase().trim();
        const nameB = b.querySelector('p').textContent.toLowerCase().trim();
        
        // Hacemos la comparación alfabética
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0; // Si son iguales, no hay cambio de orden
    });

    // Reemplazamos los productos en el contenedor con la lista ordenada
    products.forEach(product => {
        productGrid.appendChild(product);
    });
});