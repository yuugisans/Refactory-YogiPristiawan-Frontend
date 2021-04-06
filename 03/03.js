const paragraph = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`;

function hitung(paragraph, word) {
	const pattern = new RegExp(`${word}`, "gi");
	const results = paragraph.match(pattern);

	return results.length;
}

function main() {
	return {
		aku: hitung(paragraph, "aku"),
		ingin: hitung(paragraph, "ingin"),
		dapat: hitung(paragraph, "dapat"),
	};
}

console.log(main());
