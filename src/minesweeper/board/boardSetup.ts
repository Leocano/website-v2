import { BOARD_SIZE } from "../constants";
import type { Cell } from "../types";

export function createEmptyBoard() {
  return Array.from(Array(BOARD_SIZE.ROWS), () =>
    Array.from(
      Array(BOARD_SIZE.COLS),
      (): Cell => ({
        content: "empty",
        status: "initial",
        bombsAround: 0,
      }),
    ),
  );
}
