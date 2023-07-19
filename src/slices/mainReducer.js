import { createSlice, } from '@reduxjs/toolkit';

const initialState = {
	rectangleCoords: null,
	isRectangleCoordsLoaded: false,
	error: null,
	points: [],
}

const slice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		setRectangleCoords: (state, action) => {
			state.rectangleCoords = [...action.payload];
		},
		setIsRectangleCoordsLoaded: (state, action) => {
			state.isRectangleCoordsLoaded = !state.isRectangleCoordsLoaded;
		}
	}
});

export const {
	setRectangleCoords,
	setIsRectangleCoordsLoaded,
} = slice.actions;

export default slice.reducer;