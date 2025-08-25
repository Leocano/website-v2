import { BOARD_SIZE, MINE_AMOUNT } from "../config";
import type { Cell } from "../types";

export const setup = (): Cell[][] => {
  const board = Array.from(Array(BOARD_SIZE[0]), () =>
    Array.from(
      Array(BOARD_SIZE[1]),
      (): Cell => ({
        content: "empty",
        status: "initial",
      }),
    ),
  );

  for (let i = 0; i < MINE_AMOUNT; i++) {
    const randomRow = Math.floor(Math.random() * BOARD_SIZE[0]);
    const randomCol = Math.floor(Math.random() * BOARD_SIZE[1]);

    if (board[randomRow][randomCol].content === "mine") {
      i--;
      continue;
    }

    board[randomRow][randomCol].content = "mine";
  }

  return board;
};
