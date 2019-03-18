function debug (name) {
	return function (str) {
		console.log(`[${name}] ${str}`)
	}
}

const log = debug("Mouse");
log("Error Happended"); 		// [Mouse] Error Happended