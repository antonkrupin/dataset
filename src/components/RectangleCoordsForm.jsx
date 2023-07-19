import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPoints, fetchRectangleCoords } from '../slices/selectors';
import { setCheckedPoints, setIsRectangleCoordsLoaded, setRectangleCoords } from '../slices/mainReducer';

const RectangleCoordsForm = () => {
	const dispatch = useDispatch();
	const formRef = useRef();
	const rectangleCoords = useSelector(fetchRectangleCoords);
	const points = useSelector(fetchPoints);

	const checkPoints = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const coordinates = [formData.get('x1'),formData.get('y1'),formData.get('x2'),formData.get('y2')].map((elem) => parseInt(elem));
		/*if (coordinates[0] === coordinates[2] || coordinates[1] === coordinates[3]) {
			console.log('нельзя построить')
		}
		console.log('test')*/
		const test = points.filter((point) => {
			if ((point[0] >= coordinates[0]*10 && point[0] <= coordinates[2]*10) && (point[1] >= coordinates[1]*10 && point[1] <= coordinates[3]*10)) {
				return point;
			}
		});
		dispatch(setRectangleCoords(coordinates));
		dispatch(setIsRectangleCoordsLoaded());
		dispatch(setCheckedPoints(test));
	}

	const clearRectangle = () => {
		dispatch(setRectangleCoords([]));
		dispatch(setIsRectangleCoordsLoaded());
	}
	return (
		<>
			<h4>Enter rectangle coordinates to check points</h4>
			<form onSubmit={checkPoints} type="submit" className="d-flex justify-content-around rectangleForm" ref={formRef}>
				<input id="x1" type="text" placeholder="x1" name="x1" required/>
				<input id="y1" type="text" placeholder="y1" name="y1" required/>
				<input id="x2" type="text" placeholder="x2" name="x2" required/>
				<input id="y2" type="text" placeholder="y2" name="y2" required/>
				<button type="submit" disabled={rectangleCoords ? true : false}>Check</button>
				<button onClick={clearRectangle} disabled={rectangleCoords ? false : true}>Clear</button>
			</form>
		</>
	)
};

export default RectangleCoordsForm;

/*

const formData = new FormData(ref.current);
		const result = {};
		result.name = formData.get('inputName');
		result.coordinates = formData.get('inputCoordinates').split(' ');
		result.labels = formData.get('inputLabels').split(' ');
		console.log(result);

*/