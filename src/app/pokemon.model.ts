export interface Pokemon {
    name: string;
    id: number;
    sprites: {
      front_default: string;
    };
    types: Array<{
      type: {
        name: string;
      };
    }>;
    abilities: Array<{
      ability: {
        name: string;
      };
    }>;
  }
  