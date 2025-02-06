// const mongoose = require('mongoose');

// const CourseSchema = new mongoose.Schema({
//   _id: { type: String, required: true },  // Define custom _id
//   name: { type: String, required: true },
//   semester: { type: String, required: true },
// });

// module.exports = mongoose.model('Course', CourseSchema, 'courses');


const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  _id: { type: String, required: true },  // Custom _id for meaningful identifiers
  name: { type: String, required: true },
  description: { type: String, required: true },  // Add description field as per your data
});

module.exports = mongoose.model('Course', CourseSchema, 'courses');
