let n = 0;
let m = n + 1;
let a = 2*m*n;
let b = m*m - n*n;
let c = m*m + n*n;

while (a+b+c<1000) {
	n++;
	m = n+1;
	a = 2*m*n;
	b = m*m - n*n;
	c = m*m + n*n;
	console.log("OL : a = " + a + ", b = "+b+", c = "+c);
	console.log("c = " + c);
	while (a+b+c<1000){
		m++;
		a = 2*m*n;
		b = m*m - n*n;
		c = m*m + n*n;
		console.log("IL : a = " + a + ", b = "+b+", c = "+c);

		if (a+b+c>1000) {
			m = n + 1
			a = 2*m*n;
			b = m*m - n*n;
			c = m*m + n*n;
			break;

		}
	}

}

console.log(a*b*c);
