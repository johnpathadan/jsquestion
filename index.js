let classObj = {
  name: "class A",
  teacherName: "Mary",
  students: [
    {
      name: "Ravi",
      id: "101",
      marks: [
        { subject: "English", mark: 25 },
        { subject: "Maths", mark: 48 },
        { subject: "Physics", mark: 40 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 20 },
      ],
    },
    {
      name: "Aju",
      id: "102",
      marks: [
        { subject: "English", mark: 35 },
        { subject: "Maths", mark: 38 },
        { subject: "Physics", mark: 33 },
        { subject: "Chemistry", mark: 34 },
        { subject: "Computer", mark: 30 },
      ],
    },
    {
      name: "Mini SS",
      id: "103",
      marks: [
        { subject: "English", mark: 12 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 18 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 40 },
      ],
    },
    {
      name: "Binu",
      id: "104",
      marks: [
        { subject: "English", mark: 49 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 47 },
        { subject: "Chemistry", mark: 46 },
        { subject: "Computer", mark: 50 },
      ],
    },
  ],
};

let user = {};
//function to add new user to the user object, pushed to user object
function studentUser(name, email, age, phoneNumber) {
  (user.name = name),
    (user.email = email),
    (user.age = age),
    (user.phone = phoneNumber);
}

studentUser("Akshay", "akhay@gmail.com", 18, 123456897);
console.log(user);
//1. Add a student
function addStudent(name, id) {
  classObj.students.push({
    name: name,
    id: id,
  });
}

addStudent("John", "105");

//2. Enter mark for a student
let marksOfJohn = [
  { subject: "English", mark: 49 },
  { subject: "Maths", mark: 48 },
  { subject: "Physics", mark: 45 },
  { subject: "Chemistry", mark: 47 },
  { subject: "Computer", mark: 50 },
];
function enterMark(id, marks) {
  for (var i = 0; i < classObj.students.length; i++) {
    if (classObj.students[i].id === id) {
      classObj.students[i].marks = marks;
    }
  }
}
enterMark("105", marksOfJohn);

//3. Enter marks for a subject for multiple students
function addSubject(id, subject, mark) {
  for (var i = 0; i < classObj.students.length; i++) {
    if (classObj.students[i].id === id) {
      classObj.students[i].marks.push({ subject: subject, mark: mark });
    }
  }
}
addSubject("102", "Biology", 28);
addSubject("104", "Biology", 39);

//4. Edit mark of a student
function editMarks(id, subject, mark) {
  for (var i = 0; i < classObj.students.length; i++) {
    if (classObj.students[i].id === id) {
      for (let j = 0; j < classObj.students[i].marks.length; j++) {
        if (classObj.students[i].marks[j].subject === subject) {
          classObj.students[i].marks[j].mark = mark;
        }
      }
    }
  }
}

editMarks("101", "English", 35);

//5. Change the class teacher of a class
function newTeacher(division, teacherName) {
  if (classObj.name === division) {
    classObj.teacherName = teacherName;
  }
}
newTeacher("class A", "Kevin");

//6. Remove a student from a class
function removeStudent(id) {
  for (var i = 0; i < classObj.students.length; i++) {
    if (classObj.students[i].id === id) {
      classObj.students.splice(i, 1);
    }
  }
}
removeStudent("103");

//7. Delete a subject entry from every students
function deleteSubject(subjectName) {
  for (let i = 0; i < classObj.students.length; i++) {
    for (let j = 0; j < classObj.students[i].marks.length; j++) {
      if (classObj.students[i].marks[j].subject === subjectName) {
        classObj.students[i].marks.splice(j, 1);
      }
    }
  }
}
deleteSubject("Chemistry");
console.log(classObj);

//8. Find the topper of a class given a subject
function topper(subject) {
  let topmark = 0;
  let scorer;
  for (let i = 0; i < classObj.students.length; i++) {
    for (let j = 0; j < classObj.students[i].marks.length; j++) {
      if (classObj.students[i].marks[j].subject === subject) {
        if (classObj.students[i].marks[j].mark > topmark) {
          topmark = classObj.students[i].marks[j].mark;
          scorer = classObj.students[i].name;
        }
      }
    }
  }
  console.log(`${subject} topper: ${scorer}, topmark: ${topmark} `);
}
topper("English");

//9. Average marks for a given subject
function averageMarks(subject) {
  let totalMarks = 0;
  let average;
  for (let i = 0; i < classObj.students.length; i++) {
    for (let j = 0; j < classObj.students[i].marks.length; j++) {
      if (classObj.students[i].marks[j].subject === subject) {
        totalMarks += classObj.students[i].marks[j].mark;
      }
    }
  }
  average = totalMarks / classObj.students.length;
  console.log(`The average marks for ${subject} is ${average}`);
}
averageMarks("Maths");

//10. Sort and display the list of students in any order
function sortedStudents() {
  let namesArray = [];
  for (let i = 0; i < classObj.students.length; i++) {
    namesArray.push(classObj.students[i].name);
  }
  namesArray.sort();
  console.log(namesArray);
}

sortedStudents();
// console.log(classObj);

// extra things - total mark for a student and save it in the user object
function totalMarks(id) {
  let totalMark = 0;
  for (let i = 0; i < classObj.students.length; i++) {
    if (classObj.students[i].id === id) {
      for (let j = 0; j < classObj.students[i].marks.length; j++) {
        totalMark += classObj.students[i].marks[j].mark;
      }
      classObj.students[i].total = totalMark;
    }
  }
  console.log(totalMark);
}
totalMarks("104");
console.log(classObj);
