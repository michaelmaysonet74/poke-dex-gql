import {
  SchemaAbility,
  SchemaPokemon,
  SchemaPokemonType,
} from "../../schema-types";

const fakeAbility: SchemaAbility = {
  name: "Torrent",
  effect: "Ups WATER moves in a pinch.",
  isHidden: false,
};

export const fakePokemonById: SchemaPokemon = {
  id: "7",
  name: "Squirtle",
  category: "Tiny Turtle",
  isMonoType: true,
  types: [SchemaPokemonType.water],
  abilities: [fakeAbility],
  moves: ["Tackle", "Bite", "Water Gun", "Bubble"],
  measurement: {
    height: "1' 06\"",
    weight: "19.8 lbs.",
  },
  entry:
    "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
  sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  evolution: {
    from: null,
  },
  weaknesses: [SchemaPokemonType.grass, SchemaPokemonType.electric],
};

export const fakePokemonByName: SchemaPokemon = {
  id: "8",
  name: "Wartortle",
  category: "Turtle",
  isMonoType: true,
  types: [SchemaPokemonType.water],
  abilities: [fakeAbility],
  moves: ["Tackle", "Bite", "Water Gun", "Bubble"],
  measurement: {
    height: "3' 03\"",
    weight: "49.6 lbs.",
  },
  entry: null,
  sprite:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  evolution: {
    from: {
      id: "7",
      name: "Squirtle",
    },
  },
  weaknesses: [SchemaPokemonType.grass, SchemaPokemonType.electric],
};
