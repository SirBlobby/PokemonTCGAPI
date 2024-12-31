

export interface AppResponse {
    data?: any;
    error?: string;
    status: number;
}

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