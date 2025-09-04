import { DIRECTIONS } from "../constants";
import { setup } from "./boardSetup";
import { isOutOfBounds } from "./utils";

export const boardState = $state(setup());

export function flagCell(row: number, col: number) {
  const cell = boardState[row][col];

  if (cell.status !== "initial") {
    return;
  }

  boardState[row][col].status = "flagged";
}

export function revealCells(row: number, col: number) {
  if (isOutOfBounds(row, col)) {
    return;
  }

  const cell = boardState[row][col];

  if (cell.status === "clicked") return;
  if (cell.status === "flagged") return;

  boardState[row][col].status = "clicked";

  if (cell.bombsAround > 0) return;
  if (cell.content === "mine") return;

  for (const [rowOffset, colOffset] of DIRECTIONS) {
    revealCells(row + rowOffset, col + colOffset);
  }
}
