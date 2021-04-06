const fs = require("fs");
const path = require("path");
const parse = require("csv-parse");

const readFile = (filename) => {
	return new Promise((resolve, reject) => {
		fs.readFile(path.join(__dirname, filename), "UTF-8", (err, res) => {
			if (err) return reject(err);
			return resolve(res);
		});
	});
};

const toRupiah = (angka, prefix) => {
	var number_string = angka.replace(/[^,\d]/g, "").toString(),
		split = number_string.split(","),
		sisa = split[0].length % 3,
		rupiah = split[0].substr(0, sisa),
		ribuan = split[0].substr(sisa).match(/\d{3}/gi);

	if (ribuan) {
		separator = sisa ? "." : "";
		rupiah += separator + ribuan.join(".");
	}
	rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
	return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
};

async function main() {
	try {
		let data = await readFile("01.csv");

		parse(
			data,
			{
				trim: true,
				columns: (header) =>
					header.map((column) => column.toLowerCase()),
			},
			(err, records) => {
				if (err) return console.log(err);
				records.sort((a, b) =>
					Number(a.price) > Number(b.price)
						? 1
						: Number(b.price) > Number(a.price)
						? -1
						: 0
				);
				records.map((value, index, array) => {
					return (array[index].price = toRupiah(value.price, "Rp. "));
				});

				return console.log(records);
			}
		);
	} catch (error) {
		return console.log(error);
	}
}

main();
