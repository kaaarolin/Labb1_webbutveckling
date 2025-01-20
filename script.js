// Produktdata
const products = [
    { name: "Miffy Plush", price: 19.99, image: "miffy-plush.jpg" },
    { name: "Miffy Lamp", price: 9.99, image: "miffy_lamp.jpeg" },
    { name: "Miffy Mat", price: 7.99, image: "miffy_mat.jpg" },
    { name: "Miffy T-shirt", price: 14.99, image: "miffy-shirt.jpg" }
];

// Funktion för att visa produkter
function displayProducts() {
    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}')">Add to Cart</button>
        `;

        productList.appendChild(productElement);
    });
}

// Simpel funktion för att lägga till i varukorg (kan byggas ut)
function addToCart(productName) {
    alert(`${productName} added to cart!`);
}

// Kör funktionen vid sidladdning
window.onload = displayProducts;
