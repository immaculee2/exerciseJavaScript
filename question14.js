
let users = [
  { name: "Zoe", age: 30 },
  { name: "Adam", age: 25 },
  { name: "Charlie", age: 30 }
];

let names = users.map(function(user) {
  return user.name;
});

console.log(names);
let olderThan28 = users.filter(function(user) {
  return user.age > 28;
});

console.log(olderThan28);
