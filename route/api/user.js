const express = require('express');
const UserController = require('../../controllers/users');

const router = express.Router();

module.exports = app => {
	app.use('/api/user', router);
	router.post('/', UserController.postUser);
	router.get('/', UserController.getUser);
	router.get('/:userId', UserController.getUserById);
	router.put('/:userId', UserController.updateUser);
	router.delete('/:userId', UserController.deleteUser);
};
