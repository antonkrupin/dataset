import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { loadDataSet } from '../slices/mainReducer';


const DataSetEntity = (props) => {
	const { dataSet } = props;
	const dispatch = useDispatch();

	const deleteDataset = async () => {
		const { id } = dataSet;
		try {
			await fetch(`http://localhost:5000/api/dataset/${id}`, {
				method: 'DELETE',
				header: {'Content-Type': 'application/json'}
			});

			const response = await fetch('http://localhost:5000/api');
			const responseData = await response.json();
			dispatch(loadDataSet(responseData.dataSets));
		} catch(err) {
			console.log(err);
		}
	}

	return (
		<tr>
			<td><h5>{dataSet.name}</h5></td>
			<td>{dataSet.coordinates.map((coord, index) => <span key={index}>{coord} </span>)}</td>
			<td>{dataSet.labels.map((label, index) => <span key={index}>{label} </span>)}</td>
			<td>
				<Link to={`/dataset/${dataSet._id}`}>Edit</Link>
				<Button onClick={deleteDataset} className='m-1' variant="danger">Remove</Button>
			</td>
		</tr>
	)
}

export default DataSetEntity;
