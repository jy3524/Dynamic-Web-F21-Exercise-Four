const express  = require('express');
const router = express.Router();

// TODO: Hook up firebase, get all articles
// Get all articles from firebase
router.get('/', (req, res) => {
  res.send(`
  <h1>All Articles</h1>
  <p>Articles coming soon...</p>
  `)
});

module.exports = router;