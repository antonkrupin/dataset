import React from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import DataSetEntity from './DataSetEntity';

const dataset = [
	{name: 'Entity1', coordinates: [-5, 10], labels: ['labelF', 'labelB', 'labelC']},
	{name: 'Entity2', coordinates: [3, 6], labels: ['labelA', 'labelC']},
	{name: 'Entity3', coordinates: [4, -1], labels: ['labelD', 'labelC']},
]

const DataSetList = () => {
	// const { dataset } = props;
	return (
		<div className="d-flex justify-content-center">
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Coordinates</th>
						<th>Labels</th>
						<th>Interact buttons</th>
					</tr>
				</thead>
				<tbody>
					{
						dataset.map((elem, index) =>
							<DataSetEntity key={index} id={index}/>
						)
					}
				</tbody>
			</Table>
		</div>
	)
}

export default DataSetList;

/*

dataset.map((el, index) =>
				<DataSetEntity key={index} name={el.name} coordinates={el.coordinates} labels={el.labels}/>
				)

*/