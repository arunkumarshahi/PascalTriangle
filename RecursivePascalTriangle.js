pascTriangle = (n, tableData) => {
	if (n == 0) {
		tableData.push([ 1 ]);
		return tableData;
	} else {
		let rowData = [];
		let prevRow = pascTriangle(n - 1, tableData);
		for (column = 0; column <= n; column++) {
			if (column === 0 || column === n) {
				rowData.push(1);
			} else {
				rowData.push(prevRow[n - 1][column] + prevRow[n - 1][column - 1]);
			}
		}
		tableData.push(rowData);
		return tableData;
	}
};

getPascalTriange = (num) => {
	const triangleData = [];
	pascTriangle(num - 1, triangleData);
	//console.log(triangleData);
	printpascTriangle(triangleData);
};

printpascTriangle = (triangleData) => {
	const length = triangleData.length;
	triangleData.forEach((element, index) => {
		let str = '';
		for (i = 0; i < 2 * (length - index); i++) {
			str = str.concat(' ');
		}
		element.forEach((innerElement, innerElementIndex) => {
			str = str.concat('    ', innerElement);
		});
		console.log(str);
	});
};
getPascalTriange(5);
