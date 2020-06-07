function teste(x) {
	let y = 2; // Scope variable

	if(x > 5) {
		let y = 4;

		console.log(x, y);
	}
}

teste(10);