//const Model = require("./Model.js");

class AccountModel {
	constructor() {
		console.log("test");
		//super();
		this.users = new Map(); // Example in-memory storage
	}

	async get(id) {
		return this.users.get(id) || null;
	}

	async create(data) {
		const id = Date.now().toString(); // Example ID generation
		this.users.set(id, { id, ...data });
		return this.users.get(id);
	}

	async update(id, data) {
		if (!this.users.has(id)) return null;
		const updatedUser = { ...this.users.get(id), ...data };
		this.users.set(id, updatedUser);
		return updatedUser;
	}

	async delete(id) {
		return this.users.delete(id);
	}
}

export default AccountModel;
