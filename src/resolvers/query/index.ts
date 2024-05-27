import { gql } from "apollo-server";
import { getPokemonById } from "./pokemon-by-id";
import { getPokemonByName } from "./pokemon-by-name";
import { SchemaMove } from "../../schema-types";

export const QuerySchema = gql`
  type Query {
    "Returns the details of a pokemon by the provided id."
    pokemonById(id: ID!): Pokemon

    "Returns the details of a pokemon by the provided name."
    pokemonByName(name: String!): Pokemon

    "Returns the details of a pokemon move by the provided id."
    moveById(id: ID!): Move

    "Returns the details of a pokemon move by the provided name."
    moveByName(name: String!): Move
  }
`;

const QueryResolver = {
  pokemonById: getPokemonById,
  pokemonByName: getPokemonByName,
  moveById: (): SchemaMove | null => null,
  moveByName: (): SchemaMove | null => null,
};

export default {
  resolver: QueryResolver,
  schema: QuerySchema,
};
