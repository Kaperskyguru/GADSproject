const Product = require('../model/user');

exports.getProd = async (req, res) => {
	try {
		const data = await Product.findAll({});
		return res.success({ data });
	} catch (err) {
		return err;
	}
};

exports.getProdById = async (req, res) => {
	const { prodId } = req.params;
	try {
		const data = await Product.findByPk({ id: prodId });
		return res.success({ data });
	} catch (err) {
		return err;
	}
};

exports.postProd = async (req, res) => {
	const { productcode, amount, qualityinkg, name, description} = req.body;
	try {
		const data = await Product.create({
			productcode,
			amount,
			qualityinkg,
            name,
            description
		});
		return res.success({ data });
	} catch (err) {
		return err;
	}
};

exports.updateProd = async (req, res) => {
	const { prodId } = req.params;

	try {
		const data = await Product.update(req.body, { where: { id: prodId } });
		return res.success({ data });
	} catch (err) {
		return err;
	}
};

exports.deleteProd = async (req, res) => {
	const { prodId } = req.params;
	try {
		const data = await Product.destroy({ where: { id: prodId } });
		return res.success({ data });
	} catch (err) {
		return err;
	}
};
