const https = require("https");

const get = async (url) => {
	return new Promise((resolve, reject) => {
		https
			.get(url, (resp) => {
				let data = "";

				// A chunk of data has been received.
				resp.on("data", (chunk) => {
					data += chunk;
				});
				// console.log(data);
				// The whole response has been received. Print out the result.
				resp.on("end", () => {
					return resolve(JSON.parse(data));
				});
			})
			.on("error", (err) => {
				return reject("Error: " + err.message);
			});
	});
};

(async () => {
	const users = await get("https://jsonplaceholder.typicode.com/users");
	const posts = await get("https://jsonplaceholder.typicode.com/posts");

	let user_data = {};

	let results = [];

	users.forEach((user) => {
		user_data[user.id] = user;
	});

	posts.forEach((post) => {
		Object.keys(user_data).forEach((key) => {
			if (post.userId == key) {
				post.user = user_data[key];
				results.push(post);
			}
		});
	});

	console.log(results);
})();
