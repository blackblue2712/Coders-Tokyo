function waitAndRun (ms, func) {
	setTimeout(func, ms);
}

function run () {
	console.log("Running ...");
}

waitAndRun(2000, run);