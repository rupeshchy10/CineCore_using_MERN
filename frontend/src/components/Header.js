import React from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { API_END_POINT } from "../utils/constant.js";
import axios from "axios";
import { setUser } from "../redux/userSlice.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {
	const user = useSelector((store) => store.app.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logoutHandler = async () => {
		try {
			const res = await axios.get(`${API_END_POINT}/logout`);
			if(res.data.success){
				toast.success(res.data.message);
			}
			console.log(res);
			dispatch(setUser(null));
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="absolute z-10 flex w-[100vw] items-center justify-between px-6 bg-gradient-to-b from-black">
			<img className="w-40" src="/cinecore_logo.png" alt="cinecore-logo" />
			{user && (
				<div className="flex items-center">
					<MdOutlineArrowDropDownCircle size="24px" color="white" />
					<h1 className="text-lg font-medium text-white">
						{user.fullName}
					</h1>
					<div className="ml-4">
						<button
							onClick={logoutHandler}
							className="bg-red-800 text-white px-4 py-2"
						>
							Logout
						</button>
						<button className="bg-red-800 text-white px-4 py-2 ml-2">
							Search Movie
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
