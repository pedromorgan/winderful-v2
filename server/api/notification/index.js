'use strict';

var express = require('express');
var controller = require('./notification.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/:id', controller.create);
router.delete('/:id', controller.destroy);

module.exports = router;
