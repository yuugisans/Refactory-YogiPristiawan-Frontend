const str = "Bruiser build";

function main(str) {
	const char = str.toLowerCase().match(/[a-z]/g);
	let results = {},
		prev = [];

	for (let i = 0; i < char.length; i++) {
		if (!prev.includes(char[i])) {
			results[char[i]] = "*";
		} else {
			results[char[i]] += "*";
		}
		prev.push(char[i]);
	}

	return results;
}

console.log(main(str));
