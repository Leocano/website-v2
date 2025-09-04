import { BOARD_SIZE, MINE_AMOUNT, DIRECTIONS } from "../constants";
import type { Cell, Board } from "../types";
import { isOutOfBounds } from "./utils";

function createEmptyBoard() {
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

export function setup(): Board {
  const board = createEmptyBoard();

  let placed = 0;
  while (placed < MINE_AMOUNT) {
    const row = Math.floor(Math.random() * BOARD_SIZE.ROWS);
    const col = Math.floor(Math.random() * BOARD_SIZE.COLS);

    const cell = board[row][col];

    if (cell.content === "mine") {
      continue;
    }

    cell.content = "mine";
    placed++;

    for (const [rowOffset, colOffset] of DIRECTIONS) {
      const newRow = row + rowOffset;
      const newCol = col + colOffset;
      if (!isOutOfBounds(newRow, newCol)) {
        board[newRow][newCol].bombsAround++;
      }
    }
  }

  return board;
}
