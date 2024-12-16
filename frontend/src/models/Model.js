export default class Model {
    static api;
    static cache;

    static async loadAll(forceRefresh = false) {
        if (forceRefresh || !this.cache.all) {
            try {
                const all = await this.api.getAll();
                this.cache.all = [];

                all.forEach(data => {
                    const model = this.cache[data._id] || new this(data);
                    this.cache[model._id] = model;
                    this.cache.all.push(model);
                });

            } catch (error) {
                console.error('Error fetching data from API:', error);
                throw error;
            }
        }

        return this.cache.all;
    }

    static async load(id) {
        if (!this.cache[id]) {
            const data = await this.api.read(id);
            this.cache[id] = new this(data);
        }

        return this.cache[id];
    }

    static loadMany(...ids) {
        return Promise.all(ids.map(id => this.load(id)));
    }

    static loadData(data) {
        const models = [];

        data.forEach(modelData => {
            if (!this.cache[modelData._id]) {
                const model = new this(modelData);
                this.cache[model._id] = model;
                this.cache.all?.push(model);
            }

            models.push(this.cache[modelData._id]);
        });

        return models;
    }

    get api() {
        return this.constructor.api;
    }

    get cache() {
        return this.constructor.cache;
    }

    constructor({ _id = "", createdAt = "" } = {}) {
        this._id = _id;
        this.createdAt = createdAt;
    }

    async save() {
        if (this._id) {
            await this.api.update(this._id, this);
            this.cache[this._id] = this;
        } else {
            const { _id, createdAt, ...dataToSave } = this;
            const data = await this.api.create(dataToSave);
            Object.keys(data).forEach(name => this[name] = data[name]);
            this.cache[this._id] = this;
            this.cache.all?.push(this);
        }
        this.cache[this._id] = this;
        return this;
    }

    async delete() {
        const index = this.cache.all?.indexOf(this);
        delete this.cache[this._id];
        if (index > -1) {
            this.cache.all.splice(index, 1);
        }

        try {
            await this.api.delete(this._id);
        } catch (e) {
            this.cache[this._id] = this;
            if (index > -1) {
                this.cache.all.splice(index, 0, this);
            }
            throw e;
        }
    }

    toObject() {
        return {};
    }
}
