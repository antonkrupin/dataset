import React from 'react';
import { useSelector } from 'react-redux';
import { fetchCheckedPoints } from '../slices/selectors';

const MatchedCoordinatesList = () => {
	const checkedPoints = useSelector(fetchCheckedPoints);
	return (
		<div>
			<ul>
				{checkedPoints.map((point, index) => 
					<li key={index}>{`${point[0]/10}, ${point[1]/10}`}</li>
				)}
			</ul>
		</div>
	)
};

export default MatchedCoordinatesList;