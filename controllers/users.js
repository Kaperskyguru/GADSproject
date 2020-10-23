const User = require('../model/user');

//user api

exports.getUser = async (req, res) => {
	try {
		const data = await User.findAll({});
		return res.success({ data });
	} catch (err) {
		return err;
	}
};

exports.getUserById = async (req, res) => {
	const { userId } = req.params;
	try {
		const data = await User.findByPk({ id: userId });
		return res.success({ data });
	} catch (err) {
		return err;
	}
};

exports.postUser = async (req, res) => {
	const { name, username, email, password } = req.body;
	try {
		const data = await User.create({
			email,
			name,
			password,
			username
		});
		return res.success({ data });
	} catch (err) {
		return err;
	}
};

exports.updateUser = async (req, res) => {
	const { userId } = req.params;

	try {
		const data = await User.update(req.body, { where: { id: userId } });
		return res.success({ data });
	} catch (err) {
		return err;
	}
};

exports.deleteUser = async (req, res) => {
	const { userId } = req.params;
	try {
		const data = await User.destroy({ where: { id: userId } });
		return res.success({ data });
	} catch (err) {
		return err;
	}
};
