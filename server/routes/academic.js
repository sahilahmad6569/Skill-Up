const express = require('express');
const Course = require('../models/Course');
const CourseContent = require('../models/CourseContent');
const router = express.Router();

// Get all courses
router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find(); // Fetch all courses from the collection
    res.json(courses); // Return the complete list of courses
  } catch (err) {
    res.status(500).json({ message: 'Error fetching courses' });
  }
});


router.get('/course/:courseId', async (req, res) => {
    try {
      const courseContent = await CourseContent.findOne({ course: req.params.courseId });
      if (!courseContent) {
        return res.status(404).json({ message: 'Course content not found' });
      }
      res.json(courseContent);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching course contents' });
    }
  });
  
module.exports = router;
