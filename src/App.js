import React from 'react';
import { useParams } from 'react-router-dom';
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

/*

{props.items.map(place =>
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
          onDelete={props.onDeletePlace}
        />)}

*/
