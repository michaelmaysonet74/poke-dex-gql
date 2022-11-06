import { MetaPokemon } from "..";
import {
  Maybe,
  SchemaGameVersion,
  SchemaLanguage,
  SchemaPokemonEntryArgs,
} from "../../../schema-types";
import { ResolverContext } from "../../../context/types";
import { FlavorTextEntry } from "../../../data-sources/poke-api/models/flavor-text-entry";

const DEFAULT_LANGUAGE = SchemaLanguage.en;

const filterByLanguage =
  (filter?: Maybe<SchemaLanguage>): ((e: FlavorTextEntry) => boolean) =>
  ({ language }) =>
    language.name === (filter ?? DEFAULT_LANGUAGE).toString();

const filterByVersion = (
  filter?: Maybe<SchemaGameVersion>
): ((e: FlavorTextEntry) => boolean) =>
  filter ? ({ version }) => version.name === filter.toString() : () => true;

export const getEntry = async (
  parent: MetaPokemon,
  args: SchemaPokemonEntryArgs,
  ctx: ResolverContext
): Promise<string | null> => {
  const { id } = parent;
  const { language: maybeLanguage, version: maybeVersion } = args;

  const {
    dataSources: { pokeAPI },
  } = ctx;

  const { flavor_text_entries = [] } =
    (await pokeAPI.getPokemonSpeciesById(id)) ?? {};

  const byLanguage = filterByLanguage(maybeLanguage);
  const byVersion = filterByVersion(maybeVersion);

  const entry = flavor_text_entries
    .filter((_) => byLanguage(_) && byVersion(_))
    .map(({ flavor_text }) => flavor_text)?.[0];

  return entry?.split("\n").join(" ").split("\f").join(" ") ?? null;
};
