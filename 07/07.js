const numbers = [9, 4, 2, 4, 1, 5, 3, 0];

function main(numbers) {
	const odd = [];
	const ind = [];
	numbers.forEach((value, index, array) => {
		if (value % 2 != 0) {
			odd.push(value);
			ind.push(index);
		}
	});
	odd.sort();
	if (ind.length > 0) {
		for (let i = 0; i < ind.length; i++) {
			numbers[ind[i]] = odd[i];
		}
	}
	return numbers;
}

console.log(main(numbers));
