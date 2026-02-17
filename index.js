// let productCategories = ["book","chair","table","electronics","computer"];
// console.log( "the first element is "+ productCategories[0]);
// console.log( "last element is " + productCategories[productCategories.length-1]);
// console.log("length of array :" + productCategories.length);
// productCategories[1]="furniture";
// console.log(productCategories);
// console.log("updated array after modification"+productCategories);
//  //question 2
//  let inventory = [10, 20, 30];
//  inventory.push(40)//add last element 
//  console.log(inventory)
//  inventory.pop()//remove last element 
//  console.log(inventory)
//  inventory.unshift(0)//add first element 
//  console.log(inventory)
//  inventory.shift()// remove first element 
//  console.log(inventory)
//  inventory.splice(1,1,25,35)// replace 20 => 25,35 value
//  console.log(inventory)
//  inventory.splice(1,3)
//  console.log(inventory)
//  inventory.splice(1,0,25,35,30)
//  console.log(inventory)
 // part 3
 let originalScores = [90, 85, 78]
let referenceCopy = originalScores // referenceCopy
// console.log(referenceCopy)
referenceCopy[0] = 100 //change first element in both change one apply in both element
// console.log(referenceCopy)
// console.log(originalScores)
// originalScores[1]=40 // wherever you change affect all arrays
// console.log(referenceCopy)
// console.log(originalScores)
shallowCopyUseSpreadCopy = [...originalScores]
// console.log(shallowCopyUseSpreadCopy)
shallowCopyUseSpreadCopy[1]=90
// console.log(shallowCopyUseSpreadCopy)
shallowCopyUseSpreadCopy[0] = 30
// console.log(shallowCopyUseSpreadCopy)
// console.log(originalScores)
shallowCopyUseSpreadCopy[shallowCopyUseSpreadCopy.length-1] = 50
console.log(shallowCopyUseSpreadCopy)
console.log(originalScores)// to change the spreadCopy element  didn't change originalScore as referenceCopy do
