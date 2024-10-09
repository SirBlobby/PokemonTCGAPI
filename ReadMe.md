# PokemonTCGAPI

This is a simple API wrapper that allows you to get information about Pokemon cards. It is built using [Pokemon TCG API](https://pokemontcg.io/) to get the data.

**This is not an official API wrapper made by Pokemon TCG API.**

## Installation
Install the package using npm:
```bash
npm install pokemontcgapi
```
Install the package using pnpm:
```bash
pnpm install pokemontcgapi
```

## Usage
```javascript
import { PokemonTCGAPI } from 'pokemontcgapi';

const api = new PokemonTCGAPI();
```

## Get Types
```javascript
const types = await api.getTypes();
console.log(types);
```

## Get Supertypes
```javascript
const supertypes = await api.getSupertypes();
console.log(supertypes);
```

## Get Subtypes
```javascript
const subtypes = await api.getSubtypes();
console.log(subtypes);
```

## Get Rarities
```javascript
const rarities = await api.getRarities();
console.log(rarities);
```

## Get All Sets
Usage: `all(): Promise<Set[]>`
```javascript
const sets = await api.sets.all();
console.log(sets);
```

## Get Set By ID
Usage: `getSetByID(id: string): Promise<Set>`
```javascript
const set = await api.sets.getSetByID('base1');
console.log(set);
```

## Get Set By Name
Usage: `getSetByName(name: string): Promise<Set>`
```javascript
const set = await api.sets.getSetByName('base');
console.log(set);
```

## Get Cards By ID
Usage: `getCard(id: filters: ReturnData[]|string[] = []_)`
```javascript
const card = await api.cards.getCard('base1-4');
console.log(card);
```

## Get Cards By Name
Usage: `searchByName(name: string, subtype: string, type: string, filters: ReturnData[]|string[] = [])`
```javascript
const cards = await api.cards.getCardByName('Charizard');
console.log(cards);
```

## Return Data
```typescript
enum ReturnData {
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
```