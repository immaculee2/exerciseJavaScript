let company = [
  { name: "A", details: { city: "NY" } }
];
let spreadCopy = [...company]; // shallow copy
spreadCopy[0].details.city = "LA";
console.log("Original company:", company);
console.log("Shallow copy:", spreadCopy);
 
let deepCopy = JSON.parse(JSON.stringify(company));
deepCopy[0].details.city = "Chicago";
console.log("Original company:", company);
console.log("Deep copy:", deepCopy);
