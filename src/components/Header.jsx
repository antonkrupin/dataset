import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { fetchIsLoading } from '../slices/selectors';


const Header = () => {
	const location = useLocation();
	const isLoading = useSelector(fetchIsLoading);
	
	return (
		<>
			{!isLoading && (
			<div className="d-flex justify-content-center mb-5 mt-5">
				{location.pathname === '/addDataset' && (
					<Link to="/">Back</Link>
				)}
				{
					location.pathname !== '/addDataset' && (
						<Link to="/addDataset">Add new dataset</Link>
					)
				}
			</div>
		)}
		</>
	)
}

export default Header;