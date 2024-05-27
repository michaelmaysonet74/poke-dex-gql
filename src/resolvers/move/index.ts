import { gql } from "apollo-server";
import { getName } from "./name";
import { SchemaMoveCategory } from "../../schema-types";

export interface MetaMove {
  _meta?: {
    name: string;
  };
}

const MoveSchema = gql`
  """
  Category of a Pokemon Move.
  """
  enum MoveCategory {
    Physical
    Special
    Status
  }

  """
  Represents the details of a Pokemon Move.
  """
  type Move {
    ""
    id: ID!

    ""
    name: String!

    ""
    effect: String

    ""
    category: MoveCategory

    ""
    power: Int

    ""
    pp: Int

    ""
    priority: Int

    ""
    accuracy: Int
  }
`;

const MoveResolver = {
  name: getName,
  effect: (): string | null => null,
  category: (): SchemaMoveCategory | null => null,
  power: (): number | null => null,
  pp: (): number | null => null,
  priority: (): number | null => null,
  accuracy: (): number | null => null,
};

export default {
  resolver: MoveResolver,
  schema: MoveSchema,
};
