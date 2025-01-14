import axios from "axios";
import { getTopRatedMovies } from "../redux/movieSlice.js";
import { Top_Rated_Movies, options } from "../utils/constant.js";
import { useDispatch } from "react-redux";

const useTopRatedMovies = async () => {
	const dispatch = useDispatch();
	try {
		const res = await axios.get(Top_Rated_Movies, options);
		dispatch(getTopRatedMovies(res.data.results));
	} catch (error) {
		console.log(error);
	}
};
export default useTopRatedMovies;
