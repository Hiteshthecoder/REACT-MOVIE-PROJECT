import { combineReducers, configureStore, createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";

// action, reducer

// coffeshop owner -> reducer -> who takes some decision on an event or an action.

// initial_state -> the initial phase of a store.
// payload -> the content that is delivered after the reaction to an event or an action. -> object


// returns an reducer.
// how to trigger action ->useDispatch;
// useSelector 

let fetchAllLatestMovies = createAsyncThunk("fetchAllLatestMovies", async function () {

    let movies = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
        headers: {
            "accept": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2E0YWY5ZjdmOWU1MzI4ZWI4NmUxMzI3YzliZjY2MyIsIm5iZiI6MTcyNDM5NTk3Ni4zNTE2MzEsInN1YiI6IjYzZDg3Y2VhM2RjMzEzMDBhZjIyZDZiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ChbyfvM1_tFGAMqihfRd2wwamTvRs39rQ-FAm_Po5sQ"
        }
    });

    return movies.json();
})

let movieReducer = createSlice({

    name: "moviesReducer",

    initialState: {
        movies: [],
    },

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchAllLatestMovies.fulfilled, function (state, action) {
            state.movies = action.payload['results']
        });

        builder.addCase(fetchAllLatestMovies.rejected, function (state, action) {
            state.movies = [];
        })
    }
})

let orderCoffee = "orderCoffee";

let coffeeShopOwner = createSlice({

    name: "coffeeShopOwner",

    initialState: {
        coffees: 0,
        cookies: 0,
    },

    reducers: (action, state) => {
        switch (action) {
            case orderCoffee:
                return {
                    ...state,
                    coffees: state.coffees + 1,
                }

            default:
                return {
                    ...state,
                }
        }
    },

})

let allReducers = combineReducers({
    reducer: {
        movieReducer: movieReducer,
    }
});

let store = configureStore({
    reducer: {
        movies: movieReducer.reducer,
    }
})

export { store, fetchAllLatestMovies }