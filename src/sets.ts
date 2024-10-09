import { AxiosInstance } from "axios";


export default class Sets {
    #instance: AxiosInstance;

    constructor(instance: AxiosInstance) {
        this.#instance = instance;
    }

    appResponse(data: any) {
		switch(data.status) {
			case 200:
				return data.data.data;
			case 404:
				return { status: 404, error: "Not Found" };
			default:
				return { status: data.status,  error: "Unknown Error" };
		}
	}

    async all() {
        return this.appResponse(await this.#instance.get('sets'));
    }

    async getSetByID(id: string) {
        return this.appResponse(await this.#instance.get(`sets/${id}`));
    }

    async getSetByName(name: string) {
        return this.appResponse(await this.#instance.get('sets', {
            params: {
                q: `name:${name.trim()}`,
            },
        }));
    }
}