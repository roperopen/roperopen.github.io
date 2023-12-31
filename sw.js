self.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open("v1")
			.then((cache) => {
				cache.addAll(["./", "./style.css", "./sw.js"]);
				console.log("Assets cached");
			})
			.catch((err) => console.log("could not cache assets"))
	);
});