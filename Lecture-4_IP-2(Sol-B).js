let n = 0;
let m = n;
let i = 1;
let sum = 0;

	while (i<2000000) {
		i++;
		//console.log("i = "+i);
		for (j = 2; j < 1414; j++) {
			//console.log("j = "+j);
			if (i%j==0 && j<i) {
				n++;
				//console.log("n = "+n);
				break;
			}
	}
		if (m==n) {
			sum = sum + i;
			console.log("Sum ====== "+sum);
		}

		m = n;
}

console.log(sum);
