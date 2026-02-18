let cart = [
  { id: 1, name: "Shirt", price: 20, quantity: 2 },
  { id: 2, name: "Pants", price: 50, quantity: 1 }
];
let totalCost = cart.reduce(function(acc, item) {
  return acc + item.price * item.quantity;
}, 0);

console.log("Total Cost:", totalCost);
let updatedCart = cart.map(function(item) {
  if (item.id === 1) {
    return { ...item, quantity: 3 }; // update quantity
  }
  return item; // keep other items unchanged
});

console.log("Updated Cart:", updatedCart);
let filteredCart = updatedCart.filter(function(item) {
  return item.id !== 2;
});

console.log("Filtered Cart:", filteredCart);
let newTotalCost = filteredCart.reduce(function(acc, item) {
  return acc + item.price * item.quantity;
}, 0);

console.log("New Total Cost:", newTotalCost);



