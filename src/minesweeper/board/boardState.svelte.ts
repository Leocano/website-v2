import { setup } from "./boardSetup";

export const boardState = $state(setup());

export function flagCell(row: number, col: number) {
  const cell = boardState[row][col];

  if (cell.status !== "initial") {
    return;
  }

  boardState[row][col].status = "flagged";
}
