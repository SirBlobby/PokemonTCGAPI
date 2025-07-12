
/**
 * Represents the response structure for the Pokémon TCG API.
 * @interface AppResponse
 * @property {any} [data] - The data returned from the API.
 * @property {string} [error] - An error message if the request failed.
 * @property {number} status - The HTTP status code of the response.
 */
export interface AppResponse {
    data?: any;
    error?: string;
    status: number;
}

/**
 * Enum representing the fields that can be returned by the Pokémon TCG API.
 * @enum {string}
 */
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