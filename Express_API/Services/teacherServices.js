const Teacher = require("../models/definations/users/teachers");

module.exports = {
  getTeacher: async () => {
    const result = await Teacher.find();
    return result;
  },
  createTeacher: async (data) => {
    // console.log("data", data);


    const result = await Teacher.create({
        scale: data.scale,
        department: data.department
    });
    // console.log("result", result);
    return result;
  },
};