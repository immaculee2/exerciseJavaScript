let data = [1, 5, 2, 8, 5, 1, 9, 2];
let uniqueData = data.filter(function(item, index) {
  return data.indexOf(item) === index;
});

console.log(uniqueData);
let uniqueData2 = [];
for (let i = 0; i < data.length; i++) {
  if (!uniqueData2.includes(data[i])) {
    uniqueData2.push(data[i]);
  }
}

console.log(uniqueData2);
