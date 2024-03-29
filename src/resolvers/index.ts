import Ability from "./ability";
import BaseStats from "./base-stats";
import EvolutionFrom from "./evolution-from";
import EvolutionChain from "./evolution-chain";
import Measurement from "./measurement";
import Pokemon from "./pokemon";
import Query from "./query";

export const typeDefs = [
  Ability.schema,
  BaseStats.schema,
  EvolutionFrom.schema,
  EvolutionChain.schema,
  Measurement.schema,
  Pokemon.schema,
  Query.schema,
];

export const resolvers = {
  Ability: Ability.resolver,
  BaseStats: BaseStats.resolver,
  EvolutionFrom: EvolutionFrom.resolver,
  EvolutionChain: EvolutionChain.resolver,
  Measurement: Measurement.resolver,
  Pokemon: Pokemon.resolver,
  Query: Query.resolver,
};
