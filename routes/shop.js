
const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin');

/**
 * 1. the use of `path.join()` makes it possible to use Windows and Linux as OS without many issues
 *    - Windows uses paths with back-slash '..\views\shop.html'
 *    - Linux uses paths with forward-slash '..\views\shop.html'/views/shop.html
 */

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  res.sendFile(path.join(rootDir,'views', 'shop.html')); /* 1 */
});

module.exports = router;