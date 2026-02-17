 pricesUSD = [10.50, 20.00, 5.25];
 let totalCost = pricesUSD.reduce(function(totalToAll,price){
    return totalToAll + price
 },0)
console.log(totalCost)
let  maxPrice = pricesUSD.reduce(function(max, price) {
    if (price > max) {
        return price;
    } else {
        return max;
    }
}, 0); 

console.log("Maximum price:", maxPrice);

let  countAbove15 = pricesUSD.reduce(function(count, price) {
    if (price > 15) {
        return count + 1;
    } else {
        return count;
    }
}, 0);

console.log("Number of prices > $15:", countAbove15);
