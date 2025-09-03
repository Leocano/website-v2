<script lang="ts">
  import type { Cell } from "./types";
  import { boardState } from "./board/boardState.svelte";

  type Props = Cell & {
    row: number;
    col: number;
  };

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

    boardState[row][col].status = "clicked";

    if (cell.bombsAround > 0) return;

    for (const [dr, dc] of directions) {
      floodFill(row + dr, col + dc);
    }
  }

  function handleCellClick() {
    if (content === "mine") {
      alert("PERDEU");
      return;
    }

    floodFill(row, col);
  }

  const { content, status, row, col, bombsAround }: Props = $props();
</script>

<button
  type="button"
  class={[
    "h-16",
    "w-16",
    content === "mine" ? "bg-red-200" : "bg-blue-200",
    "border-2",
  ]}
  onclick={handleCellClick}
>
  {#if status === "clicked"}
    {#if content === "empty"}
      {bombsAround}
    {:else}
      {content}
    {/if}
  {/if}
</button>
