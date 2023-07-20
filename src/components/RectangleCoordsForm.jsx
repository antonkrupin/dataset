import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRectangleCoords, fetchDataSet, fetchError } from '../slices/selectors';

import { Button } from 'react-bootstrap';

import {
	setMatchedDatasets,
	setIsRectangleCoordsLoaded,
	setRectangleCoords,
	setError,
} from '../slices/mainReducer';

const RectangleCoordsForm = () => {
	const dispatch = useDispatch();
	const formRef = useRef();
	const rectangleCoords = useSelector(fetchRectangleCoords);
	const points = useSelector(fetchDataSet);
	const error = useSelector(fetchError);
	
	const checkPoints = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const rectCoord = [formData.get('x1'),formData.get('y1'),formData.get('x2'),formData.get('y2')].map((elem) => parseInt(elem));

		if (rectCoord[0] === rectCoord[2] || rectCoord[1] === rectCoord[3]) {
			dispatch(setError('Check coordinates. Can`t build rectangle.'));
		} else {
			const checkedPoints = points.filter((point) => {
				const { coordinates } = point;
				if ((coordinates[0]*10 >= rectCoord[0]*10 && coordinates[0]*10 <= rectCoord[2]*10) && (coordinates[1]*10 >= rectCoord[1]*10 && coordinates[1]*10 <= rectCoord[3]*10)) {
					return point;
				}
			});
	
			dispatch(setRectangleCoords(rectCoord));
			dispatch(setIsRectangleCoordsLoaded());
			dispatch(setError());
			if (checkedPoints.length !== 0) {
				dispatch(setMatchedDatasets(checkedPoints));
			}
		}

	}

	const resetForm = (e) => {
		e.preventDefault();
		dispatch(setRectangleCoords(null));
		dispatch(setIsRectangleCoordsLoaded());
		dispatch(setMatchedDatasets(null));
		formRef.current.reset();
	}
	return (
		<>
			<h4>Enter rectangle coordinates to check points</h4>
			<form onSubmit={checkPoints} type="submit" className="d-flex justify-content-around rectangleForm" ref={formRef}>
				<input id="x1" type="text" placeholder="x1" name="x1" required disabled={rectangleCoords ? true : false}/>
				<input id="y1" type="text" placeholder="y1" name="y1" required disabled={rectangleCoords ? true : false}/>
				<input id="x2" type="text" placeholder="x2" name="x2" required disabled={rectangleCoords ? true : false}/>
				<input id="y2" type="text" placeholder="y2" name="y2" required disabled={rectangleCoords ? true : false}/>
				<Button type="submit" disabled={rectangleCoords ? true : false}>Check</Button>
				<Button onClick={resetForm} className="btn btn-danger" disabled={rectangleCoords ? false : true}>Clear</Button>
			</form>
			<div>{error}</div>
		</>
	)
};

export default RectangleCoordsForm;
