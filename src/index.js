import "./assets/sass/style.scss";
class BaseModel {
	constructor(data) {
		this.data = data; // This will hold the in-memory data
	}

	findById(id) {
		return this.data.find((item) => item.id === id) || null;
	}

	findAll() {
		if (!this.jsonFormat()) {
			throw new Error("Invalid JSON format.");
		}
		return this.data;
	}

	create(newData) {
		if (this.matchFillable(newData)) {
			throw new Error("not identify the fillable field.");
		}
		const id = this.getLastId();
		const timestamp = Date.now().toString();
		const newItem = { id, ...newData, timestamp };
		this.data.push(newItem);
		this.save();
		return newItem;
	}

	update(id, updatedData) {
		const index = this.data.findIndex((item) => item.id === id);
		if (index !== -1) {
			this.data[index] = { ...this.data[index], ...updatedData };
			this.save();
			return this.data[index];
		}
		return null;
	}

	delete(id) {
		const index = this.data.findIndex((item) => item.id === id);
		if (index !== -1) {
			const removedItem = this.data.splice(index, 1);
			this.save();
			return removedItem[0];
		}
		return null;
	}

	save() {
		// This would save data back to the data.json file, which in a real app
		// might involve updating localStorage or syncing with a backend server.
		localStorage.setItem("data", JSON.stringify(this.data));
	}

	getLastId() {
		return this.data.length + 1;
	}

	matchFillable(data) {
		const keys = Object.keys(data);
		return keys.every((key) => this.fillable.includes(key));
	}

	jsonFormat() {
		return (
			Array.isArray(this.data) &&
			this.data.every((item) => typeof item === "object")
		);
	}
}

import jsonData from "./data.json";

class Account extends BaseModel {
	fillable = ["name", "email", "password"];

	constructor(data) {
		super(data);
	}
}

let account = new Account(jsonData);

console.log(account.findAll());

class Bootstrap {
	data = [];
	constructor(app) {
		this.app = app;

		//this.table.addEventListener("click", this.handleClick.bind(this));
	}
	init() {
		if (this.app == null) {
			throw new Error("Main app element not found.");
		}

		this.app
			.querySelector("#formSubmit")
			.addEventListener("click", this.addItem.bind(this));

		this.displayItem();
	}

	addItem(el) {
		const title = this.app.querySelector("#title");
		const url = this.app.querySelector("#url");
		const username = this.app.querySelector("#username");
		const password = this.app.querySelector("#password");

		if (title.value == "") {
			alert("Title is required.");
		} else if (url.value == "") {
			alert("URL is required.");
		} else if (username.value == "") {
			alert("username is required.");
		} else if (password.value == "") {
			alert("password is required.");
		}

		let data = {
			id: this.data.length + 1,
			title: title.value,
			url: url.value,
			username: username.value,
			password: password.value,
		};

		//this.validate(data);
		account.create(data);
		//this.data.push(data);
		//const url = this.app.getElementById("url");
		//reload
		this.displayItem();
	}

	validate() {}

	removeItem() {}

	displayItem() {
		const data = account.findAll();
		let template = "";
		data.forEach((element) => {
			template += `<div>
        <div>Title: <b>${element.title}</b></div>
        <div>URL: <b>${element.url}</b></div>
        <div>Username: <b>${element.username}</b></div>
        <div>Password: <b>${element.password}</b></div>
        </div></br>`;
		});
		const table = this.app.querySelector("#table");
		table.innerHTML += template;
	}

	getItem() {
		/* fetch("./data.json")
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
        })
        .catch((error) => {
          console.error(error);
        }); */
	}
}

const app = document.getElementById("app");
const boot = new Bootstrap(app);
boot.init();
