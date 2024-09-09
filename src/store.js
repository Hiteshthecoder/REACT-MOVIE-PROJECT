import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

// action, reducer

// coffeshop owner -> reducer -> who takes some decision on an event or an action.

// initial_state -> the initial phase of a store.
// payload -> the content that is delivered after the reaction to an event or an action. -> object


// returns an reducer.
// how to trigger action ->useDispatch;
// useSelector 

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

let allReducers = combineReducers({ coffeeShopOwner });

let store = configureStore({
    reducer: { allReducers },
})

export { store }