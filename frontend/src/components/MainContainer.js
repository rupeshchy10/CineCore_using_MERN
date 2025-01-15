import React from "react";
import VideoTitle from "./VideoTitle.js";
import VideoBackground from "./VideoBackground.js";
import { useSelector } from "react-redux";

const MainContainer = () => {
	const movie = useSelector((store) => store.movie?.nowPlayingMovies);
	if (!movie) return; //early return in react

	const { overview, id, title } = movie[3];

	return (
		<div>
			<VideoTitle title={title} overview={overview} />
			<VideoBackground movieId={id} />
		</div>
	);
};

export default MainContainer;
