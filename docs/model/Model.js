class Model {
	constructor() {
		if (new.target === Model) {
			throw new Error("Cannot instantiate an abstract class.");
		}
	}

	/**
	 * Abstract method for retrieving data.
	 * @param {number|string} id - The identifier of the item to retrieve.
	 * @returns {Object|null} - The retrieved item, or null if not found.
	 */
	async get(id) {
		throw new Error("Method 'get(id)' must be implemented.");
	}

	/**
	 * Abstract method for creating a new item.
	 * @param {Object} data - The data for the new item.
	 * @returns {Object} - The created item.
	 */
	async create(data) {
		throw new Error("Method 'create(data)' must be implemented.");
	}

	/**
	 * Abstract method for updating an existing item.
	 * @param {number|string} id - The identifier of the item to update.
	 * @param {Object} data - The updated data.
	 * @returns {Object} - The updated item.
	 */
	async update(id, data) {
		throw new Error("Method 'update(id, data)' must be implemented.");
	}

	/**
	 * Abstract method for deleting an item.
	 * @param {number|string} id - The identifier of the item to delete.
	 * @returns {boolean} - True if the item was deleted, false otherwise.
	 */
	async delete(id) {
		throw new Error("Method 'delete(id)' must be implemented.");
	}
}

export default Model;
