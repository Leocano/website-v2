import { BOARD_SIZE } from "../config";
import type { Cell } from "../types";

export const setup = (): Cell[][] => {
  return Array.from(Array(BOARD_SIZE[0]), () =>
    Array.from(Array(BOARD_SIZE[1]), () => ({
      content: "empty",
      status: "initial",
    })),
  );
};
