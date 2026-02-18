let students = [
  { name: "A", score: 85 },
  { name: "B", score: 45 },
  { name: "C", score: 92 },
  { name: "D", score: 68 }
];
let passedStudents = students.filter(function(student) {
  return student.score >= 70;
});

console.log("Passed Students:", passedStudents);
let totalScore = students.reduce(function(sum, student) {
  return sum + student.score;
}, 0); // 0 is the initial value

let averageScore = totalScore / students.length;

console.log("Average Score:", averageScore);
let topScorer = students.reduce(function(max, student) {
  return (student.score > max.score) ? student : max;
}, students[0]); // start with first student as initial max

console.log("Top Scorer:", topScorer);


