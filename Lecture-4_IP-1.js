let count = 0;
let n = 0;
let m = n;
let i = 2;

	while (count<10001) {
		i++;
		console.log("i = "+i);
		for (j = 2; j < i; j++) {
			//console.log("j = "+j);
			if (i%j==0) {
				n++;
				//console.log("n = "+n);
			}
	}
		if (m==n) {
			count++;
			console.log("Count ====== "+count);
		}

		m = n;

		if (count==10001) {
		break;
}
	}

console.log(i);
