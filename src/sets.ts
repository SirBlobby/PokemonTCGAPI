import { AxiosInstance } from "axios";

import { AppResponse } from './types';

export default class Sets {
    #instance: AxiosInstance;

    /**
     * @param {AxiosInstance} instance Authenticated Axios instance
     */
    constructor(instance: AxiosInstance) {
        this.#instance = instance;
    }

    private appResponse(req: any): AppResponse {
		switch(req.status) {
			case 200:
				return req.data.data;
			case 404:
				return { status: 404, error: "Not Found" };
			default:
				return { status: req.status,  error: "Unknown Error" };
		}
	}

    /**
     * @returns {AppResponse} Returns a list of all available sets
    */
    public async all() {
        return this.appResponse(await this.#instance.get('sets'));
    }

    /**
     * @param {string} id
     * @returns {AppResponse} Returns a set by id
     */
    public async getSetByID(id: string) {
        return this.appResponse(await this.#instance.get(`sets/${id}`));
    }

    /**
     * @param {string} name
     * @returns {AppResponse} Returns a set by name
     */
    public async getSetByName(name: string) {
        return this.appResponse(await this.#instance.get('sets', {
            params: {
                q: `name:${name.trim()}`,
            },
        }));
    }
}