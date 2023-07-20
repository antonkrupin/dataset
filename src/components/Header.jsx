import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
	const location = useLocation();
	
	return (
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
	)
}

export default Header;