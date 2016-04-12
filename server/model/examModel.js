var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var examSchema = new Schema({
  courseName: {
    type: String,
    required: true,
    unique: true
  },
  year: {
    type: Number,
    required: true,
    min: 1,
    max: 3
  },
  semester: {
    type: Number,
    required: true,
    enum: [1, 2]
  },
  optional: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Exam', examSchema);
