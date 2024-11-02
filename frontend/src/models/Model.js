export default class Model {
    static api;

    static async loadAll() {
        const data = await this.api.getAll();
        return data.map(item => new this(item));
    }

    static async load(id) {
        const data = await this.api.read(id);
        return new this(data);
    }

    static loadMany(...ids) {
        return Promise.all(ids.map(id => this.load(id)));
    }

    static loadData(data) {
        return data.map(modelData => new this(modelData));
    }

    constructor({ _id = "", createdAt = "" } = {}) {
        this._id = _id;
        this.createdAt = createdAt;
    }

    async save() {
        if (this._id) {
            await this.api.update(this._id, this);
        } else {
            const data = await this.api.create(this);
            Object.keys(data).forEach(name => this[name] = data[name]);
        }

        return this;
    }

    async delete() {
        try {
            await this.api.delete(this._id);
        } catch (e) {
            throw e;
        }
    }
}
