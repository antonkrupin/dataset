import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Header = () => {
	const location = useLocation();
	
	return (
		<div className="d-flex justify-content-center mb-5 mt-5">
			<Button className='m-1' variant="success">Add new dataset</Button>
			<Button link="/addDataset" className='m-1' variant="danger">Clear dataset</Button>
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