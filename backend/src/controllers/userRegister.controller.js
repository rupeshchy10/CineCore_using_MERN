import { User } from "../models/user.model.js";

export const Register = async (req, res) => {
	try {
		const { fullName, email, password } = req.body;
		if (!fullName || !email || !password) {
			return res.status(401).json({
				message: "Invalid Data",
				success: false,
			});
		}
		const user = await User.findOne({ email });
		if (user) {
			return res.status(401).json({
				message: "This email already exists",
				success: false,
			});
		}

		await User.create({
			fullName,
			email,
			password,
		});

		return res.status(201).json({
			message: "Account created successfully",
		});
	} catch (error) {
		console.log(error);
	}
};
