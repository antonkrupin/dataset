import React from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { Button } from 'react-bootstrap';

const dataset = [
	{name: 'Entity1', coordinates: [-5, 10], labels: ['labelF', 'labelB', 'labelC']},
	{name: 'Entity2', coordinates: [3, 6], labels: ['labelA', 'labelC']},
	{name: 'Entity3', coordinates: [4, -1], labels: ['labelD', 'labelC']},
]


const DataSetEdit = () => {
	const id = useParams().id;
	const navigate = useNavigate();

	const test = (e) => {
		e.preventDefault();
		navigate('/');
	}

	return (
		<div className="updateForm d-flex flex-column">
			<h3>Edit dataset</h3>
			<label htmlFor="inputName">Name</label>
			<input id="inputName" type="text" defaultValue={dataset[id].name} name="inputName"/>
			<label htmlFor="inputCoordinates">Coordinates</label>
			<input id="inputCoordinates" type="text" defaultValue={`${dataset[id].coordinates[0]} ${dataset[id].coordinates[1]}`} name="inputName"/>
			<label >Labels</label>
			{dataset[id].labels.map((label, index) => <input key={index} defaultValue={label} />)}
			<Button onClick={test} className='m-1' variant="success">Save</Button>
		</div>
	)
};

export default DataSetEdit; 
