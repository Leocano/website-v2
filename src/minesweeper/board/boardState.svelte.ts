import { BOARD_SIZE, MINE_AMOUNT } from "../config";
import type { Cell } from "../types";

const setup = (): Cell[][] => {
  const board = Array.from(Array(BOARD_SIZE[0]), () =>
    Array.from(
      Array(BOARD_SIZE[1]),
      (): Cell => ({
        content: "empty",
        status: "initial",
        bombsAround: 0,
      }),
    ),
  );

  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [1, 1], // down-right
    [1, -1], // down-left
    [-1, 0], // up
    [-1, 1], // up-right
    [-1, -1], // up-left
  ];

  function fillBombCount(row: number, col: number) {
    if (row < 0 || row >= BOARD_SIZE[0] || col < 0 || col >= BOARD_SIZE[1]) {
      return;
    }

    board[row][col].bombsAround++;
  }

  for (let i = 0; i < MINE_AMOUNT; i++) {
    const randomRow = Math.floor(Math.random() * BOARD_SIZE[0]);
    const randomCol = Math.floor(Math.random() * BOARD_SIZE[1]);
    const cell = board[randomRow][randomCol];

    if (cell.content === "mine") {
      i--;
      continue;
    }

    cell.content = "mine";

    for (const [rowOffset, colOffset] of directions) {
      fillBombCount(randomRow + rowOffset, randomCol + colOffset);
    }
  }

  return board;
};

export const boardState = $state(setup());
