import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Table from 'react-bootstrap/Table';

import DataSetEntity from './DataSetEntity';
import RectangleCoordsForm from '../components/RectangleCoordsForm';
import MatchedCoordinatesList from '../components/MatchedCoordinatesList';
import Canvas from '../components/Canvas';
import { fetchIsRectangleCoordsLoaded } from '../slices/selectors';

/* const dataset = [
	{name: 'Entity1', coordinates: [-5, 10], labels: ['labelF', 'labelB', 'labelC']},
	{name: 'Entity2', coordinates: [3, 6], labels: ['labelA', 'labelC']},
	{name: 'Entity3', coordinates: [4, -1], labels: ['labelD', 'labelC']},
	{name: 'Entity4', coordinates: [4, -1], labels: ['labelD', 'labelC']},
] */

const DataSetList = () => {
	const isRectangleCoords = useSelector(fetchIsRectangleCoordsLoaded);
	const rectangleCoords = useSelector(fetchIsRectangleCoordsLoaded);

	const [dataSet, setDataSet] = useState();
	const [isLoading, setIsLoading] = useState(false);
	let test;
	useEffect(() => {
		const sendRequest = async () => {
			
			try {
				setIsLoading(true);
				const response = await fetch('http://localhost:5000/api/');

				const responseData = await response.json();
				//console.log(responseData.dataSets)
				// setDataSet(responseData.dataSets);
				setDataSet(responseData.dataSets);
				//console.log(dataSet)
				setIsLoading(false);
			} catch (err) {
				console.log(err);
			}
		}
		sendRequest();
	}, []);

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
				{!isLoading && (
					<tbody>
					{
						dataSet.map((elem, index) =>
							<DataSetEntity key={elem._id} dataSet={elem}/>
						)
					}
					</tbody>
				)}
				{!isLoading && (
					<div>
						<h1>loading</h1>
					</div>
				)}
				{isLoading && (
					<h1>loading</h1>
				)}
			</Table>
			{!isLoading && (
				<h1>not loading</h1>
			)}
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

/*
{isLoading && (<RectangleCoordsForm points={dataSet}/>)}

{isLoading && (
					<tbody>
					{
						dataSet.map((elem, index) =>
							<DataSetEntity key={elem._id} dataSet={elem}/>
						)
					}
					</tbody>
				)}
				{!isLoading && (
					<div>
						<h1>loading</h1>
					</div>
				)}
*/
