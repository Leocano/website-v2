import { setup } from "./boardSetup";
import {
  toggleFlag as toggleFlagEngine,
  revealCells as revealCellsEngine,
} from "./engine";
import type { Board } from "../types";

let boardState = $state<Board>(setup());

export function getBoardState() {
  return boardState;
}

export function restartGame() {
  boardState = setup();
}

export function toggleFlag(row: number, col: number) {
  boardState = toggleFlagEngine(boardState, row, col);
}

export function revealCells(row: number, col: number) {
  boardState = revealCellsEngine(boardState, row, col);
}
