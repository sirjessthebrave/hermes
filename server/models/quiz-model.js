const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Quiz = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  questions: [{ questionText: { type: String }, answerText: { type: String } }],
});

module.exports = mongoose.model("quizzes", Quiz);
