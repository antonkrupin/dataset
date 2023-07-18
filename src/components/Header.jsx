import React from 'react';
import Button from 'react-bootstrap/Button';

const Header = () => {
	return (
		<div className="d-flex justify-content-center mb-5 mt-5">
			<Button className='m-1' variant="success">Create new dataset</Button>
			<Button className='m-1' variant="danger">Clear dataset</Button>
		</div>
	)
}

export default Header;