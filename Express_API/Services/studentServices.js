
const Student = require("../models/definations/users/students");


module.exports = {
  getStudent: async () => {
    const result = await Student.find();
    return result;
  },
  createStudent: async (data) => {
    // console.log("data", data);


    const result = await Student.create({
      rollNumber: data.rollNumber,
      semester: data.semester,
      department: data.department,
    });
    // console.log("result", result);
    return result;
  },
};

  // module.exports = {
  //   getStudents: (data) => {
  //     return Students;
  //   },
  //   updateStudent: (id,reqdata) => {
  //     const student = Students.find((c) => c.id === parseInt(id));
  //     if (!student) {
  //       return "The Student with the given ID was not found."; //404
  //     } else {
  //       student.name = reqdata.name;
  //       return student;
  //     }
  //   },
  //   deleteStudent: (id) => {
  //     const student = Students.find((c) => c.id === parseInt(id));
  //     if (!student) {
  //       return "The Student with the given ID was not found."; //404
  //     } else {
  //       const index = Students.indexOf(student);
  //       Students.splice(index, 1);
  //       return Students;
  //     }
  //   },
  //   addStudent: (data) => {
  //     const students = {
  //       id: Students.length + 1,
  //       name: data.name,
  //     };
  //     Students.push(students);
  //     return students;
  //   },
  // };