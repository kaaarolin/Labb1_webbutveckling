// 1. Array med produkter
const products = [
    { name: "Miffy Plush", price: 79.99, image: "miffy-plush.jpg" },
    { name: "Miffy Lamp", price: 89.99, image: "miffy_lamp.jpeg" }, 
    { name: "Miffy Humidifier", price: 129.99, image: "miffy_hum.jpg" },
    { name: "Miffy Wireless Speaker", price: 149.99, image: "miffy_speaker.jpg" }
];

// 2. Selektorer för produkterna och cart
const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// 3. Array för varukorg
let cart = [];

// 4. Visa produkterna
function displayProducts() {
    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="150" />
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-index="${index}">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });

    // Lyssna på klick på "Add to Cart"
    document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", addToCart);
    });
}

// 5. Funktion för att lägga till i varukorgen
function addToCart(e) {
    const index = e.target.dataset.index; // Hämta produktens index
    const selectedProduct = products[index];

    // Kolla om produkten redan finns i cart
    const existingProduct = cart.find(item => item.name === selectedProduct.name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        // Lägg till ny produkt med quantity = 1
        cart.push({ ...selectedProduct, quantity: 1 });
    }
    updateCart();
}

// 6. Uppdatera cart-listan i botten
function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        const itemSubtotal = item.price * item.quantity;
        total += itemSubtotal;

        cartItem.innerHTML = `
            <p>${item.name} x ${item.quantity} = $${itemSubtotal.toFixed(2)}
               <button class="remove-item" data-name="${item.name}">X</button>
            </p>
        `;

        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;

    // Koppla remove-funktion
    document.querySelectorAll(".remove-item").forEach(btn => {
        btn.addEventListener("click", removeFromCart);
    });
}

// 7. Ta bort produkt från varukorgen
function removeFromCart(e) {
    const productName = e.target.dataset.name;
    cart = cart.filter(item => item.name !== productName);
    updateCart();
}

// 8. Kör vid sidladdning
displayProducts();
updateCart();






