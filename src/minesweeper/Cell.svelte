<script lang="ts">
  import type { Cell } from "./types";
  import { DIRECTIONS } from "./constants";
  import { boardState, flagCell } from "./board/boardState.svelte";

  type Props = Cell & {
    row: number;
    col: number;
  };

  function floodFill(row: number, col: number) {
    if (
      row < 0 ||
      col < 0 ||
      row >= boardState.length ||
      col >= boardState[0].length
    ) {
      return;
    }

    const cell = boardState[row][col];

    if (cell.status === "clicked") return;
    if (cell.status === "flagged") return;

    boardState[row][col].status = "clicked";

    if (cell.bombsAround > 0) return;

    for (const [rowOffset, colOffset] of DIRECTIONS) {
      floodFill(row + rowOffset, col + colOffset);
    }
  }

  function handleCellClick() {
    if (status === "flagged") {
      return;
    }

    if (content === "mine") {
      alert("PERDEU");
      return;
    }

    floodFill(row, col);
  }

  function handleContextMenu(e: Event) {
    e.preventDefault();
    flagCell(row, col);
  }

  const { content, status, row, col, bombsAround }: Props = $props();
</script>

<button
  type="button"
  class={[content === "mine" ? "bg-red-200" : "bg-blue-200", "border-2"]}
  onclick={handleCellClick}
  oncontextmenu={handleContextMenu}
>
  {#if status === "flagged"}
    {status}
  {:else if status === "clicked"}
    {#if content === "empty"}
      {bombsAround}
    {:else}
      {content}
    {/if}
  {/if}
</button>
