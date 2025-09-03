import { BOARD_SIZE, MINE_AMOUNT, DIRECTIONS } from "../constants";
import type { Cell, Board } from "../types";

const initialBoard = Array.from(Array(BOARD_SIZE.ROWS), () =>
  Array.from(
    Array(BOARD_SIZE.COLS),
    (): Cell => ({
      content: "empty",
      status: "initial",
      bombsAround: 0,
    }),
  ),
);

function incrementBombCount(row: number, col: number) {
  if (isOutOfBounds(row, col)) {
    return;
  }

  initialBoard[row][col].bombsAround++;
}

function isOutOfBounds(row: number, col: number) {
  return (
    row < 0 ||
    row >= initialBoard.length ||
    col < 0 ||
    col >= initialBoard[0].length
  );
}

export function setup(): Board {
  for (let i = 0; i < MINE_AMOUNT; i++) {
    const randomRow = Math.floor(Math.random() * BOARD_SIZE.ROWS);
    const randomCol = Math.floor(Math.random() * BOARD_SIZE.COLS);
    const cell = initialBoard[randomRow][randomCol];

    if (cell.content === "mine") {
      i--;
      continue;
    }

    cell.content = "mine";

    for (const [rowOffset, colOffset] of DIRECTIONS) {
      incrementBombCount(randomRow + rowOffset, randomCol + colOffset);
    }
  }

  return initialBoard;
}
