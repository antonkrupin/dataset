import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button, Spinner } from 'react-bootstrap';

import { setIsLoading, setError } from '../slices/mainReducer';
import { fetchIsLoading, fetchError } from '../slices/selectors';

const DataSetAdd = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const formRef = useRef();
	const inputRef = useRef();
	const isLoading = useSelector(fetchIsLoading);
	const error = useSelector(fetchError);
	
	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const addNewDataSet = async (e) => {
		e.preventDefault();

		const formData = new FormData(formRef.current);
		const newDataset = {};

		newDataset.name = formData.get('inputName');
		newDataset.coordinates = formData.get('inputCoordinates').split(' ');
		newDataset.labels = formData.get('inputLabels').split(' ');

		if (newDataset.coordinates.length === 2) {
			dispatch(setIsLoading());
			await fetch(
				'http://localhost:5000/api/addDataset', {
					method: 'POST',
					headers: {'Content-Type':'application/json'},
					body: JSON.stringify(newDataset)
				});
			dispatch(setError());
			dispatch(setIsLoading());
			navigate('/');
		} else {
			dispatch(setError('Check coordinates. Two coordinates needed.'));
		}
	}
	return (
		<>
			{isLoading && (
				<div className="d-flex justify-content-center">
					<Spinner animation="border" role="status">
					</Spinner>
					<span>Adding dataset</span>
				</div>
			)}
			{!isLoading && (
				<div className="addForm">
					<h3>Add new dataset</h3>
					<form
						onSubmit={addNewDataSet}
						className="d-flex flex-column"
						ref={formRef}
					>
						<label htmlFor="inputName">Name</label>
						<input
							id="inputName"
							ref={inputRef}
							type="text"
							placeholder="Name"
							name="inputName"
							required
						/>
						<label htmlFor="inputCoordinates">Coordinates</label>
						<input
							id="inputCoordinates"
							type="text"
							placeholder="Coordinates are separated by spaces"
							name="inputCoordinates"
							required
						/>
						<label>Labels</label>
						<input
								type="text"
								placeholder="Input labels separeted by spaces"
								name="inputLabels"
								required
							/>
						<div className="text-danger">{error}</div>
						<Button type="submit" className='m-1' variant="success">Add</Button>
					</form>
				</div>
			)}
		</>
	)
}

export default DataSetAdd;