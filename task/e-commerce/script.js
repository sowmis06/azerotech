let searchbox = document.getElementById("searchbox");
let categories = document.getElementById("categories");


//search box
searchbox.addEventListener("click",function(event){
    event.stopPropagation();
    categories.style.display = "block";

});

//click category
let categoryItems = document.querySelectorAll(".categories div");

categoryItems.forEach(function(item) {

    item.addEventListener("click", function(event) {

        event.stopPropagation();
        searchbox.value = item.innerText;

        categories.style.display = "none";

    });

});

//hide search when i click
document.addEventListener("click",function(){
    categories.style.display = "none";
});

const products = [
    {
        id: 1,
        name: "Women Kurta",
        category: "Clothing",
        price: 399,
        image: "assets/kurti.png"
    },
    {
        id: 2,
        name: "Women Pant",
        category: "Clothing",
        price: 899,
        image: "assets/pant.png"
    },
    {
        id: 3,
        name: "Men Shirt",
        category: "Clothing",
        price: 799,
        image: "assets/shirt1.png"
    },
    {
        id: 4,
        name: "Men Shoes",
        category: "Clothing",
        price: 1999,
        image: "assets/shoes.png"
    },
    {
        id: 5,
        name: "Women Short Kurti",
        category: "Clothing",
        price: 299,
        image: "assets/kuri3.png"
    },
    {
        id: 6,
        name: "Women's Pant",
        category: "Clothing",
        price: 599,
        image: "assets/pant2.png"
    },
    {
        id: 7,
        name: "Men's Shirt",
        category: "Clothing",
        price: 999,
        image: "assets/shirt2.png"
    },
    {
        id: 8,
        name: "Men's casual Shoes",
        category: "Clothing",
        price: 2499,
        image: "assets/shoes2.png"
    }
];
//add to cart
let cart= [];

function addToCart(productId){
    let product = products.find(function(product){
        return product.id === productId;
    });

    /*let alreadyExists = cart.some(function(item){
        return item.id === productId;
    });
    if (alreadyExists){
        alert("Product already added to cart");
        return;
    }*/
    product.quantity = 1;
cart.push(product);
updateCartCount();
}

//remove
function removeFromCart(productId){
    cart = cart.filter(function(item){
        return item.id !== productId;
    });
    updateCartCount();
}

function updateCartCount(){
    let cartCount = document.getElementById("cart-count");
    if(cartCount){
        cartCount.innerText = cart.length;
    }
}





const searchInput = document.getElementById("searchbox");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(function(product) {

        return product.name.toLowerCase().includes(searchText);

    });

    displayProducts(filteredProducts);
});

function displayProducts(productList) {

    const productCards = document.getElementById("productCards");

    productCards.innerHTML = productList.map(function(product) {

        return `
            <div class="product-card1">
                <img class="image1" src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <h3> ₹${product.price}</h3>
                <button class="b1" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;

    }).join("");
}
function displayCart() {

    let cartProducts = document.getElementById("cartProducts");

    if (cartProducts) {

        cartProducts.innerHTML = cart.map(function(product) {

            return `
                <div class="product-card1">

                    <img class="image1" src="${product.image}">

                    <p>${product.name}</p>

                    <h3>₹${product.price}</h3>

                    <p>Quantity: ${product.quantity}</p>

                    <button class="b2" onclick="removeFromCart(${product.id})">
                        Let It Go😖
                    </button>

                </div>
            `;

        }).join("");
    }
}
displayCart();