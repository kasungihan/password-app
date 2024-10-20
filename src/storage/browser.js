export function storeItem(items) {
	let data = localStorage.getItem("passData");
	data.push(items);
	localStorage.setItem("passData", data);
	return data[localStorage.length];
}

export function getItem(id) {
	if (!localStorage.getItem("passData")) {
		throw new Error("File not allocate!");
	}
	const data = JSON.parse(localStorage.getItem("passData"));
	let found = null;

	for (const value of data) {
		if (value.id === id) {
			found = value;
			break;
		}
	}
	return found;
}

export function allItem() {
	//.env get name if exist keyword or set empty array
	let data = [];
	if (!localStorage.getItem("passData")) {
		localStorage.setItem("passData", data);
	}
	data = localStorage.getItem("passData");
	return JSON.parse(data);
}
