class Bootstrap {
	data = [
		{
			id: 1,
			title: "Gmail",
			url: "https://mail.google.com/",
			username: "app@gmail.com",
			password: "123456",
		},
		{
			id: 2,
			title: "Version",
			url: "https://gitlab.com/",
			username: "app@gmail.com",
			password: "1234",
		},
	];
	constructor(app) {
		this.app = app;

		//this.table.addEventListener("click", this.handleClick.bind(this));
	}
	init() {
		if (this.app == null) {
			throw new Error("Main app element not found.");
		}
		console.log(this.app);

		this.app
			.querySelector("#formSubmit")
			.addEventListener("click", this.addItem.bind(this));

		this.displayItem();
	}

	addItem(el) {
		console.log(el);
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
		this.data.push(data);
		console.log(data);
		//const url = this.app.getElementById("url");
		//reload
		this.displayItem();
	}

	validate() {}

	removeItem() {}

	displayItem() {
		let template = "";
		this.data.forEach((element) => {
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
//console.log(app);
const boot = new Bootstrap(app);
boot.init();

//const data = new AccountModel();
//console.log("data");

//const addForm = document.getElementById("formsubmit");
