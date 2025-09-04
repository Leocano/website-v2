import type { Board } from "../types";
import { DIRECTIONS } from "../constants";
import { isOutOfBounds } from "./utils";

export function toggleFlag(board: Board, row: number, col: number): Board {
  const cell = board[row][col];

  if (cell.status === "initial") {
    board[row][col] = { ...cell, status: "flagged" };
  } else if (cell.status === "flagged") {
    board[row][col] = { ...cell, status: "initial" };
  }

  return board;
}

export function revealCells(board: Board, row: number, col: number): Board {
  if (isOutOfBounds(row, col)) {
    return board;
  }

  const cell = board[row][col];

  if (cell.status === "clicked" || cell.status === "flagged") {
    return board;
  }

  board[row][col] = { ...cell, status: "clicked" };

  if (cell.content === "mine" || cell.bombsAround > 0) {
    return board;
  }

  for (const [rowOffset, colOffset] of DIRECTIONS) {
    board = revealCells(board, row + rowOffset, col + colOffset);
  }

  return board;
}
