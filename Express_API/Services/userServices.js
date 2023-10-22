const User = require("../models/definations/users/users");

module.exports = {
  getUsers: async () => {
    const result = await User.find();
    return result;
  },
  createUser: async (data) => {
    // console.log("data", data);
    const result = await User.create({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
    });
    // console.log("result", result);
    return result;
  },
};