import React from "react";
import { TMDB_IMG_URL } from "../utils/constant.js";
import { useDispatch } from "react-redux";
import { getId, setOpen } from "../redux/movieSlice.js";

const MovieCard = ({ posterPath, movieId }) => {
	const dispatch = useDispatch();

	if (posterPath === null) return null;

	const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  };

	return (
		<div className="w-48 pr-2" onClick={handleOpen}>
			<img src={`${TMDB_IMG_URL}/${posterPath}`} alt="Movie-Image" />
		</div>
	);
};

export default MovieCard;
