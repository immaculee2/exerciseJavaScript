let dataPoints = [42, 10, 500, 2, 77];

console.log(dataPoints.slice().sort(function(a,b){
    return a-b
}))
console.log(dataPoints.slice().sort(function(a,b){
    return b-a
}))
console.log( dataPoints.slice().reverse());
console.log(dataPoints)