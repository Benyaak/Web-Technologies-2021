const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log("The server is running on http://localhost:" + port);
});

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

let students = [
  {
    id: 1,
    firstName: "Dan",
    lastName: "Andrei",
    averageGrade: 9.01,
    faculty: "CSIE",
  },
  {
    id: 2,
    firstName: "Manuela",
    lastName: "Visan",
    averageGrade: 10,
    faculty: "CSIE",
  },
  {
    id: 3,
    firstName: "MihaI",
    lastName: "Gabriel",
    averageGrade: 8.88,
    faculty: "EAM",
  },
  {
    id: 4,
    firstName: "Flavia",
    lastName: "Calin",
    averageGrade: 7.3,
    faculty: "CSIE",
  },
];

app.get("/students", (req, res) => {
  let result = [];
  if (req.query.sort && req.query.sort === "ASC") {
    result = students.sort((a, b) => {
      if (a.firstName > b.firstName) {
        return 1;
      } else if (a.firstName < b.firstName) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (req.query.sort && req.query.sort === "DESC") {
    result = students.sort((a, b) => {
      if (a.firstName > b.firstName) {
        return -1;
      } else if (a.firstName < b.firstName) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    result = students;
  }

  res.json(result);
});

app.post("/add-student", (req, res) => {
  let newStudent = {
    id: students.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    averageGrade: req.body.averageGrade,
    faculty: req.body.faculty
  }

  students.push(newStudent);
  return res.json(newStudent);
});

app.put("/students/:studentId", (req, res) => {
  let result = students.find((student) => student.id === Number(req.params.studentId));
  result.firstName = req.body.firstName;
  result.lastName = req.body.lastName;
  result.averageGrade = req.body.averageGrade;
  result.faculty = req.body.faculty;

  return res.json(result);
});

app.delete("/students/:studentId", (req, res) => {
  let result = students.find((student) => student.id === Number(req.params.studentId));
  const index = students.indexOf(result);
  students.splice(index, 1);

  return res.json(students);
});
