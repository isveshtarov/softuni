function goldMine(input) {
	let idx = 0
	const locations = input[idx];
	
	for (let l = 1; l <= locations; l++) {
		idx++;
		const expectedAvgIncome = input[idx];
		
		idx++
		const days = input[idx];
		
		let income = 0;
		for (let d = 1; d <= days; d++) {
			idx++;
			income += Number(input[idx]);
		}
		
		const avgIncome = (income / days);
		
		if (avgIncome >= expectedAvgIncome) {
			console.log('Good job! Average gold per day' + avgIncome.toFixed(2))
		} else {
			const missingIncome = expectedAvgIncome - avgIncome;
			console.log('You need ' + missingIncome.toFixed(2) + ' gold');
		}
	}
}

goldMine(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])