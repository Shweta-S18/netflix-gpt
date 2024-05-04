import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState: {
        showGptSearch : false,
        searchMovies : null,
    },
    reducers: {
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addSearchMovieResult : (state, action) => {
            const {movieName, movieResult} = action.payload;
            state.movieName = movieName;
            state.movieResult = movieResult;
        }
    },
});

export const {toggleGptSearchView, addSearchMovieResult} = gptSlice.actions;
export default gptSlice.reducer;