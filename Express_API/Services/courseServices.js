const Course = require("../models/definations/users/courses");

module.exports = {
  getCourse: async () => {
    const result = await Course.find();
    return result;
  },
  createCourse: async (data) => {

    const result = await Course.create({
        subject: data.subject,
        description: data.description
    });
    // console.log("result", result);
    return result;
  },
};