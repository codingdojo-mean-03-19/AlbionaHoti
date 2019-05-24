const router = require('express').Router();
const path = require('path');

module.exports = router;

router.all('*', function(req, res) {
  res.sendFile(path.resolve('dist/public/index.html'));
});
