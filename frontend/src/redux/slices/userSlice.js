import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    username: '',
    image: '',
    orderHistory: [],
    cart: [],
    isLoggedIn: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state,action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes.
			state.name = action.payload.name;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.image = action.payload.image;
            state.orderHistory = action.payload.orderHistory;
            state.cart = action.payload.cart;
            state.isLoggedIn = true;
		},
		getUser: (state) => {
            state;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setUser, getUser } = userSlice.actions;

export default userSlice.reducer;