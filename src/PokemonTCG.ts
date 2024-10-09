import axios, { AxiosInstance } from 'axios';

import Cards from './cards';
import Sets from './sets';

export default class PokemonTCG {
    #instance: AxiosInstance;

    cards: Cards;
    sets: Sets;

    constructor(apiKey: string) {
        if (!apiKey) throw new Error('An API key is required to use the PokemonTCG API');
        
        this.#instance = axios.create({
            baseURL: 'https://api.pokemontcg.io/v2/',
            headers: {
                'X-Api-Key': apiKey,
            },
        });

        this.cards = new Cards(this.#instance);
        this.sets = new Sets(this.#instance);
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

    async getTypes() {
        return this.appResponse(await this.#instance.get('types'));
    }    

    async getSubtypes() {
        return this.appResponse(await this.#instance.get('subtypes'));
    }

    async getSupertypes() {
        return this.appResponse(await this.#instance.get('supertypes'));
    }

    async getRarities() {
        return this.appResponse(await this.#instance.get('rarities'));
    }
}