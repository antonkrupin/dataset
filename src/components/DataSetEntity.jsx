import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Button from 'react-bootstrap/Button';

const dataset = [
	{name: 'Entity1', coordinates: [-5, 10], labels: ['labelF', 'labelB', 'labelC']},
	{name: 'Entity2', coordinates: [3, 6], labels: ['labelA', 'labelC']},
	{name: 'Entity3', coordinates: [4, -1], labels: ['labelD', 'labelC']},
]

const DataSetEntity = (props) => {
	const { id } = props;
		
	return (
		<tr >
			<td><h5>{dataset[id].name}</h5></td>
			<td>{dataset[id].coordinates.map((coord, index) => <span key={index}>{coord} </span>)}</td>
			<td>{dataset[id].labels.map((label, index) => <span key={index}>{label} </span>)}</td>
			<td>
				<Button className='m-1' variant="primary">Edit</Button>
				<Link to={`/dataset/${id}`}>Edit</Link>
				<Button className='m-1' variant="danger">Remove</Button>
				
			</td>
		</tr>
	)
}

export default DataSetEntity;
