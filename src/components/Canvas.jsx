import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { fetchRectangleCoords } from '../slices/selectors';

const coordinates = [
	[22*10, 25*10],
	[30*10, 50*10],
	[4*10, 6*10],
	[2*10, 3*10]
]

const drawingCoordLines = (ctx, canvas) => {
	ctx.moveTo(canvas.width / 2, canvas.height / 2);
	ctx.lineTo(canvas.width / 2, 0);

	ctx.moveTo(canvas.width / 2, canvas.height / 2);
	ctx.lineTo(canvas.width, canvas.height / 2);

	ctx.moveTo(canvas.width / 2, canvas.height / 2);
	ctx.lineTo(canvas.width / 2, canvas.height);

	ctx.moveTo(canvas.width / 2, canvas.height / 2);
	ctx.lineTo(0, canvas.height / 2);

	ctx.stroke();
}

const drawingPoints = (ctx, canvas, coordinates) => {
	coordinates.forEach((coord) => {
		ctx.strokeRect(canvas.width / 2 + coord[0], canvas.height / 2 - coord[1], 1, 1);
	})
}

const drawingBoundingArea = (ctx, canvas, coords) => {
	console.log('coords from drawing', coords);
	ctx.moveTo(canvas.width / 2 + coords[0]*10, canvas.height / 2 - coords[1]*10);
	ctx.lineTo(canvas.width / 2 + coords[2]*10, canvas.height / 2 - coords[1]*10);
	ctx.lineTo(canvas.width / 2 + coords[2]*10, canvas.height / 2 - coords[3]*10);
	ctx.lineTo(canvas.width / 2 + coords[0]*10, canvas.height / 2 - coords[3]*10);
	ctx.lineTo(canvas.width / 2 + coords[0]*10, canvas.height / 2 - coords[1]*10);
	ctx.stroke();
}

const Canvas = () => {
	const coords = useSelector(fetchRectangleCoords);
	
	/*const test = [
		[-40, 40, -20, 20],
		[-10, 20, 10, 40],
		[20, 20, 40, 40],
		[-20, 10, -40, -10],
		[50, 30, 20, 40],
		[20, 30, 40, 55],
		[-20, -20, -40, -40],
		[-10, -20, 10, -40],
		[20, -20, 40, -40],
	]*/

	useEffect(() => {
			const canvas = document.getElementById("example");
			const ctx = canvas.getContext("2d");

			canvas.width = Math.max(...coords) * 30;
			canvas.height = Math.max(...coords) * 30;
			ctx.strokeStyle = '#b70A02';
			ctx.lineWidth = 0.5;

			drawingCoordLines(ctx, canvas);
			drawingBoundingArea(ctx, canvas, coords);
			ctx.strokeStyle = '#313131';
			ctx.lineWidth = 2;
			drawingPoints(ctx, canvas, coordinates);
	}, [coords]);

	return (
		<div>
			<canvas height='300' width='300' id='example'>Обновите браузер</canvas>
		</div>
	)
};

export default Canvas;
