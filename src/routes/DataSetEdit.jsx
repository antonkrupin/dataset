import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

import { fetchEditableDataset, fetchError, fetchIsLoading } from '../slices/selectors';
import { setEditableDataset, setError, setIsLoading } from '../slices/mainReducer';


const DataSetEdit = () => {
	const id = useParams().id;

	const formRef = useRef();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const error = useSelector(fetchError);
	const editableDataset = useSelector(fetchEditableDataset);
	const isLoading = useSelector(fetchIsLoading);
		
	const udpdateDataset = async (e) => {
		e.preventDefault();
		const updatedDataset = {}
		const formData = new FormData(formRef.current);

		updatedDataset.name = formData.get('inputName');
		updatedDataset.coordinates = formData.get('inputCoordinates').split(',').map((el) => el.trim());
		
		updatedDataset.labels = formData.get('inputLabels').split(',');

		if (updatedDataset.coordinates.length === 2 && parseInt(updatedDataset.coordinates[1])) {
			dispatch(setIsLoading());
			await fetch(
				`http://localhost:5000/api/dataset/${id}`,
				{
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(updatedDataset)
				});
				dispatch(setError());
				dispatch(setIsLoading());
			navigate('/');
		} else {
			dispatch(setError('Check coordinates. Two coordinates needed.'));
		}
	}

	useEffect(() => {
		const sendRequest = async () => {
			try {
				dispatch(setIsLoading());
				const response = await fetch(`http://localhost:5000/api/dataset/${id}`);
				const responseData = await response.json();
				dispatch(setEditableDataset(responseData.data));
				dispatch(setIsLoading());
			} catch (err) {
				console.log(err);
			}
		}
		sendRequest();
	}, [dispatch, id]);

	return (
		<div className="updateForm d-flex flex-column">
			{isLoading && (
				<div className="d-flex justify-content-center">
					<Spinner animation="border" role="status">
					</Spinner>
					<span>Loading</span>
				</div>
			)}
			{!isLoading && (
				<form
					onSubmit={udpdateDataset}
					type="submit"
					className="d-flex justify-content-around flex-column"
					ref={formRef}
				>
					<label htmlFor="inputName">Name</label>
					<input
						id="inputName"
						type="text"
						defaultValue={editableDataset.name}
						name="inputName"
						required
					/>
					<label htmlFor="inputCoordinates">Coordinates, separete by commas</label>
					<input
						id="inputCoordinates"
						type="text"
						placeholder="enter coordinates separated by commas"
						defaultValue={`${editableDataset.coordinates}`}
						name="inputCoordinates"
						required
					/>
					<label>Labels, separete by commas</label>
					<input
						id="inputLabels"
						type="text"
						defaultValue={editableDataset.labels}
						placeholder="enter labels separated by commas"
						name="inputLabels"
						required
					/>
					<div className="text-danger">{error}</div>
					<Button type="submit" className='m-1' variant="success" disabled={isLoading}>Save</Button>
					<Link to="/">Back</Link>
				</form>
			)}
		</div>
	)
};

export default DataSetEdit; 
