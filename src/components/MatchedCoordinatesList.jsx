import React from 'react';
import { useSelector } from 'react-redux';
import { fetchCheckedPoints } from '../slices/selectors';

const MatchedCoordinatesList = () => {
	const checkedPoints = useSelector(fetchCheckedPoints);
	return (
		<div>
			<ul>
				{checkedPoints.map((point, index) => 
					<li key={index}>{`${point.name}, ${point.labels}`}</li>
				)}
			</ul>
		</div>
	)
};

export default MatchedCoordinatesList;