import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const dataset = [
	{name: 'Entity1', coordinates: [-5, 10], labels: ['labelF', 'labelB', 'labelC']},
	{name: 'Entity2', coordinates: [3, 6], labels: ['labelA', 'labelC']},
	{name: 'Entity3', coordinates: [4, -1], labels: ['labelD', 'labelC']},
	{name: 'Entity4', coordinates: [4, -1], labels: ['labelD', 'labelC']},
]

const DataSetEntity = (props) => {
	const { elem } = props;
		
	return (
		/*<tr>
			<td><h5>{elem.name}</h5></td>
			<td>{elem.coordinates.map((coord, index) => <span key={index}>{coord} </span>)}</td>
			<td>{elem.labels.map((label, index) => <span key={index}>{label} </span>)}</td>
			<td>
				<Button className='m-1' variant="primary">Edit</Button>
				<Link to={`/dataset/${elem._id}`}>Edit</Link>
				<Button className='m-1' variant="danger">Remove</Button>
			</td>
		</tr>*/
		<div>test</div>
	)
}

export default DataSetEntity;
