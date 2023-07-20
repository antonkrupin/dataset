import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { Button, Spinner } from 'react-bootstrap';
import { fetchEditableDataset } from '../slices/selectors';
import { setEditableDataset } from '../slices/mainReducer';


const DataSetEdit = () => {
	const id = useParams().id;
	const formRef = useRef();
	const dispatch = useDispatch();
	const editableDataset = useSelector(fetchEditableDataset);
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);
	

	const udpdateDataset = async (e) => {
		e.preventDefault();
		const updatedDataset = {}
		const formData = new FormData(formRef.current);
		updatedDataset.name = formData.get('inputName');
		updatedDataset.coordinates = formData.get('inputCoordinates').split(',');
		updatedDataset.labels = formData.get('inputLabels').split(',');
		
		try {
			await fetch(
				`http://localhost:5000/api/dataset/${id}`,
				{
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(updatedDataset)
				});
		} catch (err) {
			console.log(err);
		}
		navigate('/');
	}

	useEffect(() => {
		const sendRequest = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(`http://localhost:5000/api/dataset/${id}`);
				const responseData = await response.json();
				dispatch(setEditableDataset(responseData.data));
				setIsLoading(false);
			} catch (err) {
				console.log(err);
			}
		}
		sendRequest();
	}, []);

	return (
		<div className="updateForm d-flex flex-column">
			{isLoading && (
				<>
					<Spinner animation="border" role="status">
					</Spinner>
					<span>Loading dataset</span>
				</>
			)}
			{!isLoading && (
				<form onSubmit={udpdateDataset} type="submit" className="d-flex justify-content-around flex-column" ref={formRef}>
					<label htmlFor="inputName">Name</label>
					<input id="inputName" type="text" defaultValue={editableDataset.name} name="inputName" required/>
					<label htmlFor="inputCoordinates">Coordinates, separete by commas</label>
					<input id="inputCoordinates" type="text" placeholder="enter coordinates separated by commas" defaultValue={`${editableDataset.coordinates}`} name="inputCoordinates" required/>
					<label >Labels, separete by commas</label>
					<input defaultValue={editableDataset.labels} placeholder="enter labels separated by commas" name="inputLabels" required></input>
					<Button type="submit" className='m-1' variant="success">Save</Button>
				</form>
			)}
		</div>
	)
};

export default DataSetEdit; 
