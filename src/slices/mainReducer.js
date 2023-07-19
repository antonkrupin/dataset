import { createSlice, } from '@reduxjs/toolkit';

const initialState = {
	rectangleCoords: null,
	isRectangleCoordsLoaded: false,
	error: null,
	points: [[22*10, 25*10],
	[30*10, 50*10],
	[4*10, 6*10],
	[2*10, 3*10]],
	checkedPoints: [],
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
		},
		setCheckedPoints: (state, action) => {
			state.checkedPoints = [...action.payload];
		},
	}
});

export const {
	setRectangleCoords,
	setIsRectangleCoordsLoaded,
	setCheckedPoints,
} = slice.actions;

export default slice.reducer;