import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        topRatedMovies : null,
        upcomingMovies: null,
        trailerVideo : null,
    },
    reducers: {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
});
export const {addNowPlayingMovies, addTrailerVideo, addTopRatedMovies, addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;
