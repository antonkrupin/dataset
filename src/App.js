import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom'


import Header from './components/Header';
import DataSetList from './routes/DataSetList';
import DataSetEdit from './routes/DataSetEdit';
import DataSetAdd from './routes/DataSetAdd';

import routes from './routes/routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
	
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path={routes.mainPath()} element={<DataSetList />}/>
					<Route path={routes.entityPath()} element={<DataSetEdit />}/>
					<Route path={routes.addPath()} element={<DataSetAdd />} />
				</Routes>
			</main>
		</BrowserRouter>
	)
}

export default App;
