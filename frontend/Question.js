const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    Questionname: {
      type: String,
      required: true,
    },
  
    Answers: {
      type: String,
    },
  
    userId: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", QuestionSchema);