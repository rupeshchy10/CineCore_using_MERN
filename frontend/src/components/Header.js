import React from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const Header = () => {
	return (
		<div className="absolute z-10 flex w-[100vw] items-center justify-between px-6 bg-gradient-to-b from-black">
			<img className="w-40" src="/cinecore_logo.png" alt="cinecore-logo" />
			<div className="flex items-center">
				<MdOutlineArrowDropDownCircle size="24px" color="white"/>
				<h1 className="text-lg font-medium text-white">Nightmare</h1>
				<div className="ml-4">
					<button className="bg-red-800 text-white px-4 py-2">
						Logout
					</button>
					<button className="bg-red-800 text-white px-4 py-2 ml-2">
						Search Movie
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
