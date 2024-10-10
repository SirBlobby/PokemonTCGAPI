# PokemonTCGAPI

This is a simple API wrapper that allows you to get information about Pokemon cards. It is built using [Pokemon TCG API](https://pokemontcg.io/) to get the data.

**This is not an official API wrapper made by Pokemon TCG API.**
<br><br>
<img style="display: inline-block;" src="https://img.shields.io/npm/v/@bosstop/pokemontcgapi"> <img style="display: inline-block;" src="https://img.shields.io/npm/dt/@bosstop/pokemontcgapi" > <img style="display: inline-block;" src="https://img.shields.io/github/issues/GamerBoss101/PokemonTCGAPI" >

## Installation
Install the package using npm:
```bash
npm install @bosstop/pokemontcgapi
```
Install the package using pnpm:
```bash
pnpm install @bosstop/pokemontcgapi
```

## Usage
```javascript
import { PokemonTCG } from '@bosstop/pokemontcgapi';

const api = new PokemonTCG("<API_KEY>"); // Get your API key from https://pokemontcg.io/
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

## Donate 
If you like this package, consider donating to me. It will help me to maintain this package and make more packages like this.
<br>
[![Ko-fi](https://img.shields.io/badge/Donate-Ko--fi-red)](https://ko-fi.com/sirblob)