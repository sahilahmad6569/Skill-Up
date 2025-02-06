const mongoose = require('mongoose');

const CourseContentSchema = new mongoose.Schema({
  _id: { type: String, required: true },  // Define custom _id
  course: { type: String, required: true },
  description: { type: String, required: true },
  topics: [String],
  videos: [
    {
      title: String,
      url: String
    }
  ],
  assignments: [
    {
      title: String,
      dueDate: Date
    }
  ]
});

module.exports = mongoose.model('CourseContent', CourseContentSchema, 'course_contents');
