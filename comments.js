// Create web server for comment
// ---------------------------------------------------------

// Import module
const express = require('express');
const router = express.Router();

// Import model
const Comment = require('../models/comment');

// Import middleware
const checkAuth = require('../middleware/check-auth');

// Create comment
router.post('/', checkAuth, (req, res, next) => {
  // Create new comment
  const comment = new Comment({
    content: req.body.content,