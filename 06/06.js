const str = ["c", "d", "e", "g", "h"];

function main(str) {
	let missing;
	for (let i = 1; i < str.length; i++) {
		const current_char_code = str[i].charCodeAt(0);
		if (str[i - 1].charCodeAt(0) + 1 != current_char_code) {
			missing = String.fromCharCode(current_char_code - 1);
			break;
		}
	}

	return `missing letters is : ${missing}`;
}

console.log(main(str));
