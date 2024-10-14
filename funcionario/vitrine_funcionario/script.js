// Seleciona todos os ícones de lápis
const editIcons = document.querySelectorAll('.edit-overlay');

editIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        const productBox = icon.closest('.box');
        const productName = productBox.querySelector('h3');
        const productPrice = productBox.querySelector('.price');
        const productImage = productBox.querySelector('.img');

        const newName = prompt('Editar nome do produto:', productName.textContent);
        const newPrice = prompt('Editar preço do produto:', productPrice.textContent);
        const newImage = prompt('Editar URL da imagem do produto:', productImage.src);

        if (newName) productName.textContent = newName;
        if (newPrice) productPrice.textContent = newPrice;
        if (newImage) productImage.src = newImage;
    });
});
