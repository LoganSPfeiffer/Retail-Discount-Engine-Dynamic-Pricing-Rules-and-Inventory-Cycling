// Products 
let products = [
    { name: "Headphones", category: "electronics", price: 89.99, inventory: 25 },
    { name: "Crocs", category: "apparel", price: 64.99, inventory: 40 },
    { name: "Organic Watermelons", category: "groceries", price: 12.49, inventory: 100 },
    { name: "Soap", category: "household", price: 4.99, inventory: 75 },
    { name: "Pickle Balls", category: "fitness", price: 29.99, inventory: 30 }
];

for (let product of products) {
    let discount = 0; // Start with 0 discount

    // Determine discount based on category
    switch (product.category) {
        case "electronics":
            discount = 0.20; // 20% off
            break;
        case "apparel":
            discount = 0.15; // 15% off
            break;
        case "groceries":
        case "household":
            // groceries and household both get 10% off
            discount = 0.10;
            break;
        default:
            // other categories get no discount
            discount = 0;
            break;
    }
        // calculate the discounted price and store it on the product
    product.discountRate = discount;
    product.discountedPrice = +(product.price * (1 - discount)).toFixed(2);

    console.log(product.name + " (" + product.category + "): $" + product.price +
        " -> $" + product.discountedPrice + " (" + (discount * 100) + "% off)");
}
