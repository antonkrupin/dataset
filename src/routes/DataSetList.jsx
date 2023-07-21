import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Table from 'react-bootstrap/Table';
import { Spinner } from 'react-bootstrap';

import DataSetEntity from './DataSetEntity';
import RectangleCoordsForm from '../components/RectangleCoordsForm';
import MatchedCoordinatesList from '../components/MatchedCoordinatesList';
import VisualisedDataSet from '../components/VisualisedDataSet';
import VisualisedMatchedPoints from '../components/VisualisedMatchedPoints';
import {
	fetchIsRectangleCoordsLoaded,
	fetchDataSet,
	fetchIsLoading
} from '../slices/selectors';
import { loadDataSet, setIsLoading } from '../slices/mainReducer';

const DataSetList = () => {
	const dispatch = useDispatch();

	const isRectangleCoords = useSelector(fetchIsRectangleCoordsLoaded);
	const rectangleCoords = useSelector(fetchIsRectangleCoordsLoaded);
	const isLoading = useSelector(fetchIsLoading);
	const points = useSelector(fetchDataSet);

	useEffect(() => {
		const sendRequest = async () => {
			
			try {
				dispatch(setIsLoading());
				const response = await fetch('http://localhost:5000/api/');

				const responseData = await response.json();
				dispatch(loadDataSet(responseData.dataSets));
				dispatch(setIsLoading());
			} catch (err) {
				console.log(err);
			}
		}
		sendRequest();
	}, [dispatch]);

	return (
		<>
			{points.length === 0 && (
				<div className="d-flex justify-content-center">
					<h4>Add at least one dataset</h4>
				</div>
			)}
			{points.length !== 0 && (
				<div className="d-flex justify-content-center align-items-center flex-column">
					{isLoading && (
						<>
							<Spinner animation="border" role="status">
							</Spinner>
							<span >Loading dataset</span>
						</>
					)}
					{!isLoading && (
						<>
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
									points.map((elem) =>
										<DataSetEntity key={elem._id} dataSet={elem}/>
									)
								}
								</tbody>
						</Table>
						<div className="d-flex">
							<VisualisedDataSet />
							{isRectangleCoords && (<MatchedCoordinatesList />)}
						</div>
						<RectangleCoordsForm />
						{isRectangleCoords && (
							<div className="d-flex">
								<VisualisedMatchedPoints coords={rectangleCoords}/>
							</div>
						)}
						</>
					)}
				</div>
			)}
		</>
	)
}

export default DataSetList;
