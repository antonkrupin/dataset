import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { fetchMatchedDatasets, fetchRectangleCoords } from '../slices/selectors';

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

const drawingMatchedPoints = (ctx, canvas, points) => {
	points.forEach((point) => {
		ctx.strokeRect(canvas.width / 2 + point.coordinates[0] * 10, canvas.height / 2 - point.coordinates[1] * 10, 1, 1);
	})
}

const drawingBoundingArea = (ctx, canvas, coords) => {
	ctx.moveTo(canvas.width / 2 + coords[0]*10, canvas.height / 2 - coords[1]*10);
	ctx.lineTo(canvas.width / 2 + coords[2]*10, canvas.height / 2 - coords[1]*10);
	ctx.lineTo(canvas.width / 2 + coords[2]*10, canvas.height / 2 - coords[3]*10);
	ctx.lineTo(canvas.width / 2 + coords[0]*10, canvas.height / 2 - coords[3]*10);
	ctx.lineTo(canvas.width / 2 + coords[0]*10, canvas.height / 2 - coords[1]*10);
	ctx.stroke();
}

const VisualisedMatchedPoints = () => {
	const rectangleCoords = useSelector(fetchRectangleCoords);
	const checkedPoints = useSelector(fetchMatchedDatasets);
	
	useEffect(() => {
			const canvas = document.getElementById("example");
			const ctx = canvas.getContext("2d");

			const absCoords = rectangleCoords.map((coord) => Math.abs(coord));
			
			canvas.width = Math.max(...absCoords) * 30;
			canvas.height = Math.max(...absCoords) * 30;
			ctx.strokeStyle = '#b70A02';
			ctx.lineWidth = 0.5;

			drawingCoordLines(ctx, canvas);
			drawingBoundingArea(ctx, canvas, rectangleCoords);
			ctx.strokeStyle = '#00a884';
			ctx.lineWidth = 2;
			if (checkedPoints) {
				drawingMatchedPoints(ctx, canvas, checkedPoints);
			}
	}, [checkedPoints, rectangleCoords]);

	return (
		<div>
			<canvas height='300' width='300' id='example'>Обновите браузер</canvas>
		</div>
	)
};

export default VisualisedMatchedPoints;
