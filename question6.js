let userAges = [18, 24, 33, 16, 40];
console.log(userAges.some(function(age){
    return age < 18
}))
console.log(userAges.every(function(age){
    return age < 18
}))
console.log(userAges.some(function(age){
    return age % 5==0
}))