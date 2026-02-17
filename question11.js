testScores = [45, 78, 92, 30, 65, 88];
console.log(testScores.filter(function(score){
    return score >= 70
}))



let  total = testScores.reduce(function(sum, score) {
    return sum + score;
}, 0);

// Calculate average
let  average = total / testScores.length;
console.log("Average score:", average);

// Below average scores
let  belowAverage = testScores.filter(function(score) {
    return score < average;
});
console.log("Below average scores:", belowAverage);