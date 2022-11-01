const express = require('express');
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const userValidation = require('./user.validation');
const userController = require('./user.controller');

const router = express.Router();

router.route('/manageUsers', validate(userValidation.createUser), userController.createUser)

module.exports = router;
