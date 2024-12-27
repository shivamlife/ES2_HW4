console.log('Hello!');
// 1. Write an arrow function that calculates the average of an array of numbers. Print the average.
const calculateAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;
  }
  return sum / arr.length;
};
console.log(calculateAverage([5, 10, 15]));
// Expected output: 10

// 2. Write an arrow function that reverses a string using for-loop. Print the reversed string.
const reverseString = (str) => {
  let rev = '';
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  return rev;
};
console.log(reverseString('world'));
// Expected output: dlrow

// 3. Write an arrow function that returns the longest word in an array of words. Print the longest word.
const findLongestWord = (arr) => {
  let word = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > word.length) {
      word = arr[i];
    }
  }
  return word;
};
console.log(findLongestWord(['apple', 'banana', 'grapefruit']));
// Expected output: grapefruit

// 4. Write an arrow function that calculates the length of a string using for-loop. Print the length.
const calculateStringLength = (str) => {
  return str.length;
};
console.log(calculateStringLength('hello'));
// Expected output: 5

// 5. Given an array of objects:

const students = [
  { name: 'Alice', age: 20, grade: 85 },
  { name: 'Bob', age: 22, grade: 92 },
  { name: 'Charlie', age: 19, grade: 88 },
];

//  5.1 Write an arrow function to calculate the average grade of all students.
const calculateAverageGrade = (students) => {
  let avgGrade = 0;
  for (let i = 0; i < students.length; i++) {
    avgGrade = students[i].grade + avgGrade;
  }
  return avgGrade / students.length;
};
console.log('Average Grade: ', calculateAverageGrade(students));

// 5.2 Write an arrow function that takes the array of students and returns an array of their names.
const getNames = (students) => {
  let names = [];
  for (let i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
};
console.log(getNames(students));
// Expected output: ["Alice", "Bob", "Charlie"]

// 5.3 Write an arrow function that calculates the average age of students in the array.
const calculateAverageAge = (students) => {
  let avgAge = 0;
  for (let i = 0; i < students.length; i++) {
    avgAge = students[i].age + avgAge;
  }
  return avgAge;
};
console.log(calculateAverageAge(students));

// 5.4 Write an arrow function that filters the students with a grade greater than or equal to 90. Use for-loops.
const highGrades = (students) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade >= 90) {
      return students[i];
    }
  }
};
console.log(highGrades(students));
// Expected output: [{ name: "Bob", age: 22, grade: 92 }]

// 5.5 Write an arrow function that checks if there is any student below the age of 18.
const isAnyBelow18 = (students) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].age < 18) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(isAnyBelow18(students));
// Expected output: false

// 5.6 Write an arrow function to find a student by their name.
const findStudentByName = (students, name) => {
  for (let i = 0; i < students.length; i++) {
    if (name === students[i].name) {
      return students[i];
    }
  }
};
console.log(findStudentByName(students, 'Charlie'));
// Expected output: { name: "Charlie", age: 19, grade: 88 }

// 5.7 Write an arrow function to get the names of students who have scored grade above 85.
const getHighScoreStudents = (students) => {
  let hscores = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade > 85) {
      hscores.push(students[i].name);
    }
  }
  return hscores;
};
console.log(getHighScoreStudents(students));
// Expected output: ["Bob", "Charlie"]
