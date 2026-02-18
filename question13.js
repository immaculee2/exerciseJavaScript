let users = [
  { name: "Zoe", age: 30 },
  { name: "Adam", age: 25 },
  { name: "Charlie", age: 30 }
];
let sortedByAge = users.sort((a, b) => a.age - b.age);

console.log(sortedByAge);
let sortedByAgeAndName = users.sort((a, b) => {
  if (a.age !== b.age) {
    return a.age - b.age;   // sort by age
  } else {
    return a.name.localeCompare(b.name); // sort by name alphabetically
  }
});

console.log(sortedByAgeAndName);
