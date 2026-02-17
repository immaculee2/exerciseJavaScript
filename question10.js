let pricesUSD = [10.50, 20.00, 5.25];
console.log(pricesUSD.map(function(price){
    return price * 1.3
}))
console.log(pricesUSD.map(function(price){
    return "Item price: $ " + price.toFixed(2);
}))

