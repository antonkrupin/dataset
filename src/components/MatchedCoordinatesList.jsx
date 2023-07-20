import React from 'react';
import { useSelector } from 'react-redux';
import { fetchMatchedDatasets } from '../slices/selectors';

const MatchedCoordinatesList = () => {
	const matchedPoints = useSelector(fetchMatchedDatasets);
	return (
		<div>
			<h5>Matched points:</h5>
			{matchedPoints && (
				<ul>
				{matchedPoints.map((point, index) => 
					<li key={index}>{`Name: ${point.name}, Labels: ${point.labels}`}</li>
				)}
			</ul>
			)}
			{!matchedPoints && (
				<h5>No matches found.</h5>
			)}
		</div>
	)
};

export default MatchedCoordinatesList;