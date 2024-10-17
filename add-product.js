document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const productName = document.getElementById('product-name').value;
    const productArtist = document.getElementById('product-artist').value;
    const productPrice = document.getElementById('product-price').value;
    const productImage = document.getElementById('product-image').files[0];

    const reader = new FileReader();
    reader.onloadend = function() {
        const product = {
            name: productName,
            artist: productArtist,
            price: parseFloat(productPrice),
            image: reader.result // Armazenar a URL da imagem
        };

        // Armazenar o produto em localStorage
        let products = JSON.parse(localStorage.getItem('discos')) || [];
        products.push(product);
        localStorage.setItem('discos', JSON.stringify(products));

        alert(`${productName} adicionado!`);
        document.getElementById('product-form').reset(); // Limpa o formulário
    };

    if (productImage) {
        reader.readAsDataURL(productImage); // Lê a imagem como URL
    }
});
