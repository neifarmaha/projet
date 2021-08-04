const mongoose = require("mongoose");
const {Schema }= mongoose;

const RegisterSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum:['Employer','Job Seeker'],
      
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  
    phonenumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  
);

module.exports = mongoose.model("User", RegisterSchema);