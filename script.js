// Função para carregar produtos do localStorage
function loadProducts() {
    const products = JSON.parse(localStorage.getItem('discos')) || [];
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name} - ${product.artist}</h3>
            <p>Preço: R$${product.price.toFixed(2)}</p>
        `;
        productList.appendChild(productDiv);
    });
}

// Inicializa os produtos quando a página carrega
document.addEventListener('DOMContentLoaded', loadProducts);
