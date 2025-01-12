import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice.js";

const Login = () => {
	const [isLogin, setIsLogin] = useState(false);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const isLoading = useSelector((store) => store.app.isLoading);

	const loginHandler = () => {
		setIsLogin(!isLogin);
	};

	const getInputData = async (e) => {
		e.preventDefault();
		dispatch(setLoading(true));
		if (isLogin) {
			//login
			const userDetails = { email, password };
			try {
				const res = await axios.post(
					`${API_END_POINT}/login`,
					userDetails,
					{
						headers: {
							"Content-Type": "application/json",
						},
						withCredentials: true,
					}
				);
				if (res.data.success) {
					toast.success(res.data.message);
				}
				dispatch(setUser(res.data.user));
				navigate("/browse");
			} catch (error) {
				toast.error(error.response.data.message);
				console.log(error);
			} finally {
				dispatch(setLoading(false));
			}
		} else {
			//register
			dispatch(setLoading(true));
			const userDetails = { fullName, email, password };
			try {
				const res = await axios.post(
					`${API_END_POINT}/register`,
					userDetails,
					{
						headers: {
							"Content-Type": "application/json",
						},
						withCredentials: true,
					}
				);
				if (res.data.success) {
					toast.success(res.data.message);
				}
				setIsLogin(true);
			} catch (error) {
				toast.error(error.response.data.message);
				console.log(error);
			} finally {
				dispatch(setLoading(false));
			}
		}

		setFullName("");
		setEmail("");
		setPassword("");
	};

	return (
		<div>
			<Header />
			<div className="absolute">
				<img
					className="w-[100vw] h-[100vh] bg-cover"
					src="/cover_2.jpg"
					alt="cover-image"
				/>
			</div>
			<form
				onSubmit={getInputData}
				className="flex flex-col rounded-md w-3/12 my-36 p-12 left-0 right-0 mx-auto items-center justify-center absolute bg-black opacity-90"
			>
				<h1 className="text-3xl text-white mb-5 font-bold">
					{isLogin ? "Login" : "Signup"}
				</h1>
				<div className="flex flex-col">
					{!isLogin && (
						<input
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							type="text"
							placeholder="Full Name"
							className=" p-3 my-2 rounded-sm bg-gray-800 text-white"
						/>
					)}
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						placeholder="Email"
						className=" p-3 my-2 rounded-sm bg-gray-800 text-white"
					/>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="Password"
						className=" p-3 my-2 rounded-sm bg-gray-800 text-white"
					/>
					<button
						type="submit"
						className="bg-red-600 mt-5 p-3 text-white rounded-sm font-medium"
					>
						{`${isLoading ? "Loading..." : isLogin ? "Login" : "Signup"}`}
					</button>
					<p className="text-white mt-2">
						{isLogin ? "New to CineCore?" : "Already have an account?"}
						<span
							onClick={loginHandler}
							className="ml-1 text-blue-900 font-medium cursor-pointer"
						>
							{isLogin ? "Signup" : "Login"}
						</span>
					</p>
				</div>
			</form>
		</div>
	);
};

export default Login;
