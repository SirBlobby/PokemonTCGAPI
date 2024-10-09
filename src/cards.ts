import { AxiosInstance } from 'axios';

export enum ReturnData {
    NAME = 'name',
    ID = 'id',
    HP = 'hp',
    SUPERTYPE = 'supertype',
    SUBTYPES = 'subtypes',
    TYPES = 'types',
    EVOLVESTO = 'evolvesTo',
    RULES = 'rules',
    ATTACKS = 'attacks',
    WEAKNESSES = 'weaknesses',
    RETREATCOST = 'retreatCost',
    SET = 'set',
    NUMBER = 'number',
    ARTIST = 'artist',
    RARITY = 'rarity',
    NATIONALPOKEDEXNUMBERS = 'nationalPokedexNumbers',
    LEGALITIES = 'legalities',
    IMAGES = 'images',
    TCGPLAYER = 'tcgplayer',
}

export default class Cards {
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

    async getCard(id: string, filters: ReturnData[]|string[] = []) {
        return this.appResponse(await this.#instance.get(`cards/${id}`, {
			params: {
				select: filters.join(','),
			},
		}));
    }

    async searchByName(name: string, subtype: string, type: string, filters: ReturnData[]|string[] = []) {
        return this.appResponse((await this.#instance.get('cards', {
            params: {
                q: `${name ? `name:${name.trim()}` : ''} ${subtype ? `subtypes:${subtype.trim()}` : ''} ${type ? `types:${type.trim()}` : ''}`,
				select: filters.join(','),
            },
        })));
    }
}