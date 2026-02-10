const express = require('express');
const { Content } = require('../models/content.model'); 
const router = express.Router();

// GET /api/v1/content/:id
router.get('/:id', async (req, res) => {
  try {
    const content = await Content.findOne({ id: req.params.id });
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.json(content);
  } catch (error) {
    console.error('Error fetching content:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
  

router.post('/', async (req, res) => {
  try {
    const { length, id, content } = req.body;
    if (!length || !id || !content) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const newContent = await Content.create({
      length,
      id,
      content
    });

    res.status(201).json({
      message: 'Content created successfully',
      content: {
        id: newContent.id,
        length: newContent.length,
        content: newContent.content
      },
    });
  } catch (err) {
    console.error('Error creating content:', err);
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }

    res.status(500).json({ message: 'Failed to create content' });
  }
});

module.exports = router;
