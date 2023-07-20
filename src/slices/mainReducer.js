import { createSlice, } from '@reduxjs/toolkit';

const initialState = {
	rectangleCoords: null,
	isRectangleCoordsLoaded: false,
	isLoading: false,
	error: null,
	matchedDatasets: null,
	dataSet: [],
	editableDataset: [],
}

const slice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		setRectangleCoords: (state, action) => {
			if (action.payload) {
				state.rectangleCoords = [...action.payload];
			} else {
				state.rectangleCoords = null;
			}
		},
		setIsRectangleCoordsLoaded: (state, action) => {
			state.isRectangleCoordsLoaded = !state.isRectangleCoordsLoaded;
		},
		setMatchedDatasets: (state, action) => {
			if (action.payload) {
				state.matchedDatasets = [...action.payload];
			} else {
				state.matchedDatasets = null;
			}
		},
		loadDataSet: (state, action) => {
			state.dataSet = [...action.payload];
		},
		setEditableDataset: (state, action) => {
			state.editableDataset = action.payload;
		},
		setIsLoading: (state, action) => {
			state.isLoading = !state.isLoading;
		},
		setError: (state, action) => {
			state.error = action.payload;
		}
	}
});

export const {
	setRectangleCoords,
	setIsRectangleCoordsLoaded,
	setMatchedDatasets,
	loadDataSet,
	setEditableDataset,
	setIsLoading,
	setError,
} = slice.actions;

export default slice.reducer;