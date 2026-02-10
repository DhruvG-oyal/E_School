const express = require('express');
const router = express.Router();
const { Comment } = require('../models/comments.model');


router.post('/', async (req, res) => {
  const { username, email, comment, time, courseId } = req.body;

  try {
    const newComment = new Comment({
      username,
      email,
      comment,
      time,
      courseId,
    });
    
    const savedComment = await newComment.save();

    res.status(201).json({ message: 'Comment posted successfully', comment: savedComment });
  } catch (error) {
    console.error('Error saving comment:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:courseId', async (req, res) => {
  const { courseId } = req.params;

  try {
    const comments = await Comment.find({ courseId });
    
    if (!comments.length) {
      return res.status(404).json({ message: 'No comments found for this course' });
    }

    res.status(200).json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
