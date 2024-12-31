import axios, { AxiosInstance } from 'axios';

import { AppResponse } from './types';

import Cards from './cards';
import Sets from './sets';

export default class PokemonTCG {
    #instance: AxiosInstance;

    /**
     * Cards  of pokemon tcg api
     * @type {Cards}
     */
    public cards: Cards;

    /**
     * Sets of pokemon tcg api
     * @type {Sets}
     */
    public sets: Sets;

    /**
     * Creates an instance of the PokemonTCG API
     * @param apiKey 
     */
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
     * @returns {AppResponse} Returns a list of all available types
     */
    public async getTypes() {
        return this.appResponse(await this.#instance.get('types'));
    }    

    /**
     * @returns {AppResponse} Returns a list of all available subtypes
     */
    public async getSubtypes() {
        return this.appResponse(await this.#instance.get('subtypes'));
    }

    /**
     * @returns {AppResponse} Returns a list of all available supertypes
     */
    public async getSupertypes() {
        return this.appResponse(await this.#instance.get('supertypes'));
    }

    /**
     * @returns {AppResponse} Returns a list of all available rarities
     */
    public async getRarities() {
        return this.appResponse(await this.#instance.get('rarities'));
    }

    /**
     * @returns {AxiosInstance} Authenticated Axios instance
     */
    public getInstance(): AxiosInstance {
        return this.#instance;
    }
}