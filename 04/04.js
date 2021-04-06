const numbers = [];

for (let i = 0; i <= 1000; i++) {
	numbers.push(i);
}

const isEven = (number) => (number % 2 === 0 ? true : false);
const isOdd = (number) => (number % 2 != 0 ? true : false);
const isMultiplies_by_5 = (number) =>
	number % 5 === 0 && number > 0 ? true : false;
const isPrime = (number) => {
	for (let i = 2; i < number; i++) {
		if (number % i === 0) return false;
	}
	return number > 1;
};

function main() {
	const even = [];
	const odd = [];
	const multiplies_by_5 = [];
	const prime = [];
	const prime_less_than_100 = [];
	numbers.forEach((value) => {
		if (isEven(value)) even.push(value);
		if (isOdd(value)) odd.push(value);
		if (isMultiplies_by_5(value)) multiplies_by_5.push(value);
		if (isPrime(value)) prime.push(value);
		if (value < 100) {
			if (isPrime(value)) prime_less_than_100.push(value);
		}
	});

	return { even, odd, multiplies_by_5, prime, prime_less_than_100 };
}
console.log(main());
