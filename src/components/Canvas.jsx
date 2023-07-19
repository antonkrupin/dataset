import React, { useEffect } from 'react';

const coordinates = [
	[-5, 10],
	[3, 6],
	[4, -1],
	[-20, -30],
	[-70, 80],
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

const drawingDots = (ctx, canvas, coordinates) => {
	coordinates.forEach((coord) => {
		ctx.strokeRect(canvas.width / 2 + coord[0], canvas.height / 2 - coord[1], 1, 1);
	})
}

const drawingBoundingArea = (ctx, canvas, coords) => {
	ctx.moveTo(canvas.width / 2 + coords[0], canvas.height / 2 - coords[1]);
	ctx.lineTo(canvas.width / 2 + coords[2], canvas.height / 2 - coords[1]);
	ctx.lineTo(canvas.width / 2 + coords[2], canvas.height / 2 - coords[3]);
	ctx.lineTo(canvas.width / 2 + coords[0], canvas.height / 2 - coords[3]);
	ctx.lineTo(canvas.width / 2 + coords[0], canvas.height / 2 - coords[1]);
	ctx.stroke();
	// [-20, -20, -10, 10]
	//если обе координаты положительные то y добавляем минус
	//если y отрицательный то убираем минус
	//если координаты по x, y обе отрицательные то перед x ставим минус, y минус убираем
	//если x отрицательный то ставим минусы везде
	// ctx.strokeRect(canvas.width / 2 + startX, canvas.height / 2 - startY, -basicW, -basicH);
	/* if (startX < 0 && startY < 0) {
		console.log('test');
		ctx.strokeRect(canvas.width / 2 + startX, canvas.height / 2 - startY, basicW, basicH);
		//ctx.strokeRect(canvas.width / 2 + startX, canvas.height / 2 - startY, 1, 1);
	} else if (startX >= 0 && startY >= 0) {
		console.log('test1')
		ctx.strokeRect(canvas.width / 2 + startX, canvas.height / 2 - startY, basicW, -basicH);
	} else if (startY < 0) {
		console.log('test2')
		ctx.strokeRect(canvas.width / 2 - startX, canvas.height / 2 - startY, basicW, basicH);
	}else if (startX < 0) {
		console.log('test3')
		ctx.strokeRect(canvas.width / 2 + startX, canvas.height / 2 - startY, basicW, -basicH);
	} */
}

const Canvas = () => {

	//заданный квардат 8 на 16 увеличим область в 10 раз
	const basicW = 90;
	const basicH = 90;

	const startWidth = basicW*2;
	const startHeight = basicH*2;

	const startX = 5;
	const startY = -10;

	const test = [
		/*[-40, 40, -20, 20],
		[-10, 20, 10, 40],
		[20, 20, 40, 40],
		[-20, 10, -40, -10],*/
		[-50, -40, -40, -50],
		/*[20, 10, 40, -10],
		[-20, -20, -40, -40],
		[-10, -20, 10, -40],
		[20, -20, 40, -40],*/
	]

	useEffect(() => {
			const canvas = document.getElementById("example");
			const ctx = canvas.getContext("2d");
			canvas.width = startWidth;
			canvas.height = startHeight;
			ctx.strokeStyle = '#b70A02';
			ctx.lineWidth = 0.5;
			drawingCoordLines(ctx, canvas);
			test.forEach((coord) => {
				drawingBoundingArea(ctx, canvas, coord);
			})
			ctx.strokeStyle = '#313131';
			ctx.lineWidth = 2;
			drawingDots(ctx, canvas, coordinates);
	}, []);

	return (
		<div>
			<canvas height='300' width='300' id='example'>Обновите браузер</canvas>
		</div>
	)
};

export default Canvas;
