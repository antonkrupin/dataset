import React from 'react';
import { useSelector } from 'react-redux';

import Table from 'react-bootstrap/Table';

import DataSetEntity from './DataSetEntity';
import RectangleCoordsForm from '../components/RectangleCoordsForm';
import MatchedCoordinatesList from '../components/MatchedCoordinatesList';
import Canvas from '../components/Canvas';
import { fetchIsRectangleCoordsLoaded } from '../slices/selectors';

const dataset = [
	{name: 'Entity1', coordinates: [-5, 10], labels: ['labelF', 'labelB', 'labelC']},
	{name: 'Entity2', coordinates: [3, 6], labels: ['labelA', 'labelC']},
	{name: 'Entity3', coordinates: [4, -1], labels: ['labelD', 'labelC']},
	{name: 'Entity4', coordinates: [4, -1], labels: ['labelD', 'labelC']},
]

const DataSetList = () => {
	const isRectangleCoords = useSelector(fetchIsRectangleCoordsLoaded);
	const rectangleCoords = useSelector(fetchIsRectangleCoordsLoaded);
	return (
		<div className="d-flex justify-content-center align-items-center flex-column">
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Coordinates</th>
						<th>Labels</th>
						<th>Interact buttons</th>
					</tr>
				</thead>
				<tbody>
					{
						dataset.map((elem, index) =>
							<DataSetEntity key={index} id={index}/>
						)
					}
				</tbody>
			</Table>
			<RectangleCoordsForm />
			{isRectangleCoords && (
				<div className="d-flex">
					<Canvas coords={rectangleCoords}/>
					<MatchedCoordinatesList />
				</div>
			)}
		</div>
	)
}

export default DataSetList;
