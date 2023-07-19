import React from 'react';
import { useSelector } from 'react-redux';
import { fetchRectangleCoords } from '../slices/selectors';

const MatchedCoordinatesList = () => {
	const coords = useSelector(fetchRectangleCoords);
	console.log('coords', coords);
	return (
		<div>
			<ul>
				<li>first</li>
				<li>third</li>
				<li>fourth</li>
			</ul>
		</div>
	)
};

export default MatchedCoordinatesList;