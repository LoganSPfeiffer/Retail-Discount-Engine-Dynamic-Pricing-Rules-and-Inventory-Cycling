// Products data with name, category, price, and inventory
let products = [
    { name: "Headphones", category: "electronics", price: 89.99, inventory: 25 },
    { name: "Crocs", category: "apparel", price: 64.99, inventory: 40 },
    { name: "Organic Watermelons", category: "groceries", price: 12.49, inventory: 100 },
    { name: "Soap", category: "household", price: 4.99, inventory: 75 },
    { name: "Pickle Balls", category: "fitness", price: 29.99, inventory: 30 }
];

// loop with switch to apply discounts by category

for (let product of products) {
    let discount = 0;

    switch (product.category) {
        case "electronics":
            discount = 0.20; // 20% off
            break;
        case "apparel":
            discount = 0.15; // 15% off
            break;
        case "groceries":
        case "household":
            // both groceries and household get 10% off
            discount = 0.10;
            break;
        default:
            discount = 0; // no discount
            break;
    }

    // store the discount info on the product
    product.discountRate = discount;
    product.discountedPrice = Math.round(product.price * (1 - discount) * 100) / 100;

    console.log(product.name + " (" + product.category + ")| $" + product.price +
        " -> $" + product.discountedPrice + " (" + (discount * 100) + "% off)");

}
// additional discount based on customer type and sim checkout 

let customers = [
    { name: "Customer #1", type: "student", items: ["Headphones", "Crocs"], quantities: [1, 2] },
    { name: "Customer #2", type: "senior", items: ["Organic Watermelons", "Soap", "Pickle Balls"], quantities: [3, 2, 1] },
    { name: "Customer #3", type: "regular", items: ["Headphones", "Pickle Balls"], quantities: [2, 3] }
];

console.log("=== Checkout Simulation ===");

for (let i = 0; i < customers.length; i++) {
    let customerType = customers[i].type;
    let extraDiscount = 0;
    let cartTotal = 0;

    console.log("--- " + customers[i].name + " (" + customerType + ") ---");

    // if chain to apply additional discount based on customer type

    if (customerType === "student") {
        extraDiscount = 0.05;
        console.log("Extra discount: 5% off (student)");
    } else if (customerType === "senior") {
        extraDiscount = 0.07;
        console.log("Extra discount: 7% off (senior)");
    } else {
        extraDiscount = 0;
        console.log("Extra discount: none (regular)");
    }

    // loop through what this customer is buying
    console.log("Items purchased:");

    for (let j = 0; j < customers[i].items.length; j++) {
        let itemName = customers[i].items[j];
        let qty = customers[i].quantities[j];

        // find the matching product in the products 
        for (let product of products) {
            if (product.name === itemName) {
                if (product.inventory >= qty) {
                    // calculate price with both discounts
                    let finalPrice = product.discountedPrice * (1 - extraDiscount);
                    let lineTotal = finalPrice * qty;
                    cartTotal = cartTotal + lineTotal;

                    // reduce inventory by the quantity purchased
                    product.inventory = product.inventory - qty;

                    console.log("  " + itemName + " x" + qty + " @ $" + finalPrice.toFixed(2) + " = $" + lineTotal.toFixed(2));
                } else {
                    console.log("  " + itemName + " - not enough in stock! (only " + product.inventory + " left)");
                }
            }
        }
    }

    console.log("Cart Total: $" + cartTotal.toFixed(2));
}

// Log each key/value pair for a single product
console.log("=== Product Details ===");

for (let key in products[0]) {
    console.log(key + ": " + products[0][key]);
}

// Log all product info after inventory is updated
console.log("=== All Products After Inventory Update ===");

for (let product of products) {
    console.log("" + product.name + ":");
    for (let [key, value] of Object.entries(product)) {
        console.log("  " + key + " = " + value);
    }
}
