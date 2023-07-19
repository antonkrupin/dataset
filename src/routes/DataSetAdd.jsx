import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';

const DataSetAdd = () => {
	const [labelsCounter, setLabelsCounter] = useState(1);

	const ref = useRef();

	const addLabelInput = (e) => {
		e.preventDefault();
	}

	const addNewDataSet = (e) => {
		e.preventDefault();
		const formData = new FormData(ref.current);
		const result = {};
		result.name = formData.get('inputName');
		result.coordinates = formData.get('inputCoordinates').split(' ');
		result.labels = formData.get('inputLabels').split(' ');
		console.log(result);
		/* const result = {};
		const formData = new FormData(e.target);
		result.name = formData.get('inputName');
		result.coordinates = formData.get('inputCoordinates');
		result.labels = formData.get('inputLabels');
		console.log(result); */
	}
	return (
		<div className="addForm">
			<h3>Edit dataset</h3>
			<form className="d-flex flex-column" ref={ref}>
				<label htmlFor="inputName">Name</label>
				<input id="inputName" type="text" placeholder="Name" name="inputName"/>
				<label htmlFor="inputCoordinates">Coordinates</label>
				<input id="inputCoordinates" type="text" placeholder="coordinates are separated by spaces" name="inputCoordinates"/>
				<label >Labels</label>
				<div className="d-flex" id="newLabels" >
					<input type="text" placeholder="Input labels" name="inputLabels"/>
					<h4 onClick={addLabelInput}>+</h4>
				</div>
			</form>
			<Button onClick={addNewDataSet} className='m-1' variant="success">Add</Button>
		</div>
	)
}

export default DataSetAdd;