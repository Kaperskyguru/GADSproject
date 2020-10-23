const express = require('express');
const ProductController = require('../../controllers/users');

const router = express.Router();

module.exports = app => {
	app.use('/api/product', router);
	router.post('/', ProductController.postProd);
	router.get('/', ProductController.getProd);
	router.get('/:prodId', ProductController.getProdById);
	router.put('/:prodId', ProductController.updateProd);
	router.delete('/:prodId', ProductController.deleteProd);
};