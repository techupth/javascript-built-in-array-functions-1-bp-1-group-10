const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  const sum = students.reduce(function(accumulator,students) {
    return accumulator + students.score
  }, 0)
  return sum / 4
}

const AverageStudentScore = getAverageStudentScore(students); 
console.log(AverageStudentScore)

// Output: 87.5
