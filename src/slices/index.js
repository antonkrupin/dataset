import { configureStore } from '@reduxjs/toolkit';

import mainReducer from './mainReducer.js';

export default configureStore({
	reducer: {
		main: mainReducer,
	},
});