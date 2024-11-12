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

    get api() {
        return this.constructor.api;
    }


    constructor({ _id = "", createdAt = "" } = {}) {
        this._id = _id;
        this.createdAt = createdAt;
    }

    async save() {
        if (this._id) {
            console.log("I got _id");
            await this.api.update(this._id, this);
        } else {
            console.log("I don't have _id");
            const { _id, createdAt, ...dataToSave } = this;


            const data = await this.api.create(dataToSave);
            console.log("logging data: ", data);

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

    toObject() {
        return {};
    }
}
