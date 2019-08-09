calcuatePascTriangle = (n) => {
	const pascTriangle = [];
	if (n == 1) {
		pascTriangle.push([ 1 ]);
	} else {
		for (row = 1; row <= n; row++) {
			let rowData = [];
			for (i = 0; i < row; i++) {
				if (i == 0 || i == row - 1) {
					rowData.push(1);
				} else {
					rowData.push(pascTriangle[row - 2][i - 1] + pascTriangle[row - 2][i]);
				}
			}
			pascTriangle.push(rowData);
		}
	}
	console.log(pascTriangle);
	return pascTriangle;
};
