const str = "23dn3ir30fd2eddd";

function main(str) {
	const toAstrerisk = str.substr(0, str.length - 3);
	const notChange = str.substr(-3);
	return toAstrerisk.replace(/./g, "*") + notChange;
}

console.log(main(str));
