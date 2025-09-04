import { createEmptyBoard } from "./boardSetup";
import {
  toggleFlag as toggleFlagEngine,
  revealCells as revealCellsEngine,
  placeMines,
} from "./engine";

let boardState = $state(createEmptyBoard());
let initialized = $state(false);

export function getBoardState() {
  return boardState;
}

export function restartGame() {
  boardState = createEmptyBoard();
}

export function toggleFlag(row: number, col: number) {
  boardState = toggleFlagEngine(boardState, row, col);
}

export function revealCells(row: number, col: number) {
  if (!initialized) {
    boardState = placeMines(boardState, row, col);
    initialized = true;
  }

  boardState = revealCellsEngine(boardState, row, col);
}
