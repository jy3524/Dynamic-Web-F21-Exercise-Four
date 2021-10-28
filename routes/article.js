const express  = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <h1>Individual Article</h1>
    <p>Articles coming soon...</p>
  `)
});

module.exports = router;