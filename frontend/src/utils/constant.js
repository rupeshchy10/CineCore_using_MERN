export const API_END_POINT = "http://localhost:8000/api/v1/user";

export const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDc4MGRlZWQxZDg5OGM3ZTNkNDhmMGVhZmMzNTk3MyIsIm5iZiI6MTczNjc2MjUzOS4wOTIsInN1YiI6IjY3ODRlNGFiZGI0ZmUwMjJhZDRlNGZlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IQE7rTNaxW82gHbb9aULvvsSFiIk2gJCF49bXe-eeb0",
	},
};
export const Now_Playing_Movies =
	"https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movies = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movies = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movies = "https://api.themoviedb.org/3/movie/upcoming";

export const SEARCH_MOVIE_URL =
	"https://api.themoviedb.org/3/search/movie?query=";

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";
